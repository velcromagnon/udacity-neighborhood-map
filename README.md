# Udacity Neighboorhood Map

Author: Steve Lent

# About
This is the eighth and final project in the Udacity Front-End Web Developer Nanodegree. It's a searchable map for a set of given locations in Minneapolis, in three categories. Brewpubs, sporting arenas, and pizza restaurants. Custom icons are used to distinguish the different types of location. When an location(marker) is clicked or selected from the side panel, an infowindow is brought up with information from StreetView and Wikipedia. These are loaded asynchronously, as well as loading Google Maps itself. This allows the application to be responsive, and not to wait for the loading to complete. If errors occur, the infowindow is updated with the type of error and does not impact the user's experience.

The technologies used are HTML, CSS, Javascript, with APIs for Google Maps, Google StreetView, and Wikipedia. The knockout framework is used to organize the code into an MVVM design pattern, with a sidebar with a searchable list of locations. As the user enters keywords, the list is narrowed down (as well as the markers on the map).

In addition, the user can choose to close the search bar to preserve space in a device with limited screen real estate.

# Setup
Download or clone the repo [here](https://github.com/velcromagnon/udacity-neighborhood-map), open index.html in the root directory using the browser of your choice.
Or you can run it directly from [here](some link)

# Attributions
Knockout Logic (Udacity Advanced JS Lesson 8)
[Knockout tutorial - http://learn.knockoutjs.com/#/?tutorial=intro](http://learn.knockoutjs.com/#/?tutorial=intro)
Map Logic (Udacity Advanced JS lesson 11)
[Creating filtered lists - www.knockmeout.net/2011/04/utility-functions-in-knockoutjs.html](www.knockmeout.net/2011/04/utility-functions-in-knockoutjs.html)
[Default text for input boxes - https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_placeholder](https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_placeholder)
[Filter icon - https://www.w3schools.com/icons/tryit.asp?filename=tryicons_fa-filter](https://www.w3schools.com/icons/tryit.asp?filename=tryicons_fa-filter)
[Wikipedia access code - http://www.9bitstudios.com/2014/03/getting-data-from-the-wikipedia-api-using-jquery](http://www.9bitstudios.com/2014/03/getting-data-from-the-wikipedia-api-using-jquery)
[Wikipedia attribution example -  https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple](https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple)
[Click event listener - https://developers.google.com/maps/documentation/javascript/examples/marker-animations](https://developers.google.com/maps/documentation/javascript/examples/marker-animations)
[Custom map icons - http://www.benjaminkeen.com/google-maps-coloured-markers/](http://www.benjaminkeen.com/google-maps-coloured-markers)
[Removing map marker with search - https://stackoverflow.com/questions/29557938/removing-map-pin-with-search](https://stackoverflow.com/questions/29557938/removing-map-pin-with-search)
[Making location list take up 100% of height - https://stackoverflow.com/questions/90178/make-a-div-fill-the-height-of-the-remaining-screen-space](https://stackoverflow.com/questions/90178/make-a-div-fill-the-height-of-the-remaining-screen-space)