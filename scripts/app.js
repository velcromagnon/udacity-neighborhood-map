var map;
var infowindow;
var bounds;
var streetViewService;

var minneapolisLocation = {
  lat: 44.986656,
  lng: -93.258133
};

// Create the map and initiate knockout binding.
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: minneapolisLocation,
    zoom: 13
  });

  infowindow = new google.maps.InfoWindow({maxWidth: 400});

  bounds = new google.maps.LatLngBounds();

  streetViewService = new google.maps.StreetViewService();

  ko.applyBindings(new MapViewModel());
}

// An individual location and operations that are associated with it. This is done with knockout observables.
var Location = function(data) {
  var self = this;

  this.name = ko.observable(data.name);
  this.placeId = ko.observable(data.placeId);
  this.address = ko.observable(data.address);
  this.lat = ko.observable(data.lat);
  this.lng = ko.observable(data.lng);
  this.wikiResult = null;

  // Icons from http://www.benjaminkeen.com/google-maps-coloured-markers/
  // Show a different color and letter based on the point type.
  this.getIconForType = function(type) {
    if (type == 'pizza')
      return 'icons/red_MarkerP.png';
    else if (type == 'bar')
      return 'icons/paleblue_MarkerB.png';
    else
      return 'icons/green_MarkerS.png';
  };

  // Logic from here: https://stackoverflow.com/questions/29557938/removing-map-pin-with-search
  // Create a new marker with drop animation.
  this.marker = new google.maps.Marker({
    position: new google.maps.LatLng(this.lat(), this.lng()),
    animation: google.maps.Animation.DROP,
    title: this.name(),
    icon: this.getIconForType(data.type)
  });

  this.isVisible = ko.observable(false);

  this.isVisible.subscribe(function(currentState) {
    if (currentState) {
      self.marker.setMap(map);
    } else {
      self.marker.setMap(null);
    }
  });

  this.handleClick = function() {
    if (infowindow.marker != self.marker)
      toggleBounce(); // Turn it on if it's not already selected.
    self.populateInfoWindow(self.marker, infowindow);
  };

  // Add click event listener.
  // from https://developers.google.com/maps/documentation/javascript/examples/marker-animations
  this.marker.addListener('click', this.handleClick);

  this.populateInfoWindow = function(marker, infowindow) {
    if (infowindow.marker != marker) {
      infowindow.marker = marker;
      // Clean up any previous listeners
      google.maps.event.clearListeners(infowindow, 'closeclick');
      infowindow.addListener('closeclick', function() {
        toggleBounce();
        infowindow.marker = null;
      });
      var radius = 50;
      function getStreetView(data, status) {
        if (status == google.maps.StreetViewStatus.OK) {
          var nearStreetViewLocation = data.location.latLng;
          var heading = google.maps.geometry.spherical.computeHeading(nearStreetViewLocation, marker.position);

          infowindow.setContent('<div>' + marker.title + '</div><div id="pano"></div>' + wikiResult);

          var panoramaOptions = {
            position: nearStreetViewLocation,
            pov: {
              heading: heading,
              pitch: 30
            }
          };
          var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), panoramaOptions);
        } else {
          infowindow.setContent('<div>' + marker.title + '</div><div>No Street View Found</div>' + wikiResult);
        }
      }

      // How to call wikipedia --> http://www.9bitstudios.com/2014/03/getting-data-from-the-wikipedia-api-using-jquery/
      // For attribution code --> https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple
      function getWiki(name) {
        var url = `http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=${name}&callback=?`;
        var content = '';
        // Cached return value.
        if (self.wikiResult != null)
        {
          streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
          return;
        }
        $.ajax({
          type: "GET",
          url: url,
          contentType: "application/json; charset=utf-8",
          async: false,
          dataType: "json",
          success: function (data, textStatus, jqXHR) {
            if (data.error) {
               wikiResult = `<div>Cannot access Wikipedia content: ${data.error.info}</div>`;
            }
            else
            {
              var markup = data.parse.text["*"];
              var blurb = $('<div></div>').html(markup);

              // remove links as they will not work
              blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });

              // remove any references
              blurb.find('sup').remove();

              // remove cite error
              blurb.find('.mw-ext-cite-error').remove();
              wikiResult = $(blurb).find('p')[0].innerHTML;
              wikiResult += `<br><br><div>Attribution: ${name}, https://en.wikipedia.org/w/index.php?title=${name}.<div>`;
            }
            streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
          },
          error: function (errorMessage) {
            wikiResult = "<div>Cannot access Wikipedia content</div>";
            streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
          }
        });
      }

      getWiki(data.wikiname || data.name);

      infowindow.open(map, marker);
    }
  };

  bounds.extend(this.marker.position);

  function toggleBounce() {
    if (infowindow.marker && infowindow.marker !== self.marker)
      infowindow.marker.setAnimation(null);
    if (self.marker.getAnimation() !== null) {
      self.marker.setAnimation(null);
    } else {
      self.marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

  this.isVisible(true);
};

var MapViewModel = function()
{
  var self = this;

  this.filterValue = ko.observable('');
  this.locations = ko.observableArray([]);
  initialLocations.forEach(function(location) {
    self.locations.push(new Location(location) );
  });
  this.displaySideBar = ko.observable(true);

  map.fitBounds(bounds);

  // Logic from www.knockmeout.net/2011/04/utility-functions-in-knockoutjs.html
  this.filteredLocations = ko.computed(function() {
    const search = self.filterValue().toLowerCase();
    return ko.utils.arrayFilter(this.locations(), function(location) {
      var match = location.name().toLowerCase().includes(search);
      location.isVisible(match);
      return match;
    });
  }, this);

  // Pass it on to the location to be clicked.
  this.handleClick = function(location) {
    location.handleClick();
  };

  this.hamburgerClick = function() {
    this.displaySideBar(!this.displaySideBar());
    google.maps.event.trigger(map, "resize");
  };

};