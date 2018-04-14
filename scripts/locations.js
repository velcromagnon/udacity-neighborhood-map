// Location data, an object with only location data, but nothing specific to Knockout.
var initialLocations = [
{
  name: "612Brew",
  placeId: 'ChIJ2bW5u5kts1IRzwMwNGXu7Sk',
  address: '945 Broadway St NE, Minneapolis, MN 55413',
  lat: 44.99890200000001,
  lng: -93.24685499999998,
  type: 'bar'
},
{
  name: "Andrea Pizza",
  placeId: 'ChIJoeUKnJsys1IR8obYhj9EaqQ',
  address: '225 South 6th St, Minneapolis, MN 55402',
  lat: 44.9762362,
  lng: -93.26860520000002,
  type: 'pizza'
},
{
  name: "Black Sheep Coal Fired Pizza",
  placeId: 'ChIJ8dlFFIkys1IRlWsLIEd2EB8',
  address: '600 N Washington Ave, Minneapolis, MN 55401',
  lat: 44.9872212,
  lng: -93.27582569999998,
  type: 'pizza'
},
{
  name: "Dangerous Man Brewing Company",
  placeId: 'ChIJ1YIFdXcys1IRWaTmoj43oAo',
  address: '1300 NE 2nd St, Minneapolis, MN 55413',
  lat: 45.0010214,
  lng: -93.26631499999996,
  type: 'bar'
},
{
  name: "Day Block Brewing Company",
  placeId: 'ChIJCZ_XDRgts1IRRR-YhQHQ2zg',
  address: '1105 S Washington Ave, Minneapolis, MN 55415',
  lat: 44.975189,
  lng: -93.253061,
  type: 'bar'
},
{
  name: "Dulono's Pizza",
  placeId: 'ChIJYz0Nwo8ys1IRAQ_LHQ4dX3M',
  address: '118 N 4th St, Minneapolis, MN 55401',
  lat: 44.9819699,
  lng: -93.27299699999998,
  type: 'pizza'
},
{
  name: "The Freehouse",
  placeId: 'ChIJWQwWOYoys1IRpXazSG4jUI8',
  address: '701 N Washington Ave #101, Minneapolis, MN 55401',
  lat: 44.9875643,
  lng: -93.27920280000001,
  type: 'bar'
},
{
  name: "Fulton Brewing Taproom",
  placeId: 'ChIJxROQZYwys1IR1cgpYoMgfnk',
  address: '1214, 414 N 6th Ave, Minneapolis, MN 55401',
  lat: 44.9849296,
  lng: -93.2771578,
  type: 'bar',
  wikiname: "Fulton Beer"
},
{
  name: "Galactic Pizza",
  placeId: 'ChIJe18Tmogn9ocR7UpRi67Wfz8',
  address: '2917 Lyndale Ave S, Minneapolis, MN 55408',
  lat: 44.9496798,
  lng: -93.2879102,
  type: 'pizza'
},
{
  name: "Giordano's",
  placeId: 'ChIJuXPlXNUys1IRVqZm3C0mkWw',
  address: '2700 Hennepin Ave S, Minneapolis, MN 55408',
  lat: 44.95359860000001,
  lng: -93.2980437,
  type: 'pizza',
  wikiname: "Giordano's Pizzeria"
},
{
  name: "Herkimer Pub and Brewery",
  placeId: 'ChIJgWR9oIgn9ocRJ2RBdI91ob8',
  address: '2922 Lyndale Ave S, Minneapolis, MN 55408',
  lat: 44.949223,
  lng: -93.28828499999997,
  type: 'bar'
},
{
  name: "Indeed Brewing Company and Taproom",
  placeId: 'ChIJiRDMp5Ets1IRxbOuCiddNNE',
  address: '711 NE 15th Ave, Minneapolis, MN 55413',
  lat: 45.00336979999999,
  lng: -93.25153130000001,
  type: 'bar',
  wikiname: 'Indeed Brewing Company'
},
{
  name: "Mesa Pizza Dinkytown",
  placeId: 'ChIJLaEvihEts1IRA93dH4Hw8DM',
  address: '1323 4th St SE, Minneapolis, MN 55414',
  lat: 44.98087599999999,
  lng: -93.23610209999998,
  type: 'pizza'
},
{
  name: "Pizza Lucé",
  placeId: 'ChIJ4S8J0Y8ys1IRmWaq0xTwphg',
  address: '119 N 4th St, Minneapolis, MN 55401',
  lat: 44.98175089999999,
  lng: -93.27355019999999,
  type: 'pizza'
},
{
  name: "Surly Brewing Co.",
  placeId: 'ChIJHa80f2sxs1IRSAlqsByPiLY',
  address: '520 Malcolm Ave SE, Minneapolis, MN 55414',
  lat: 44.9729768,
  lng: -93.2098183,
  type: 'bar',
  wikiname: 'Surly Brewing Company'
},
{
  name: "Target Center",
  placeId: 'ChIJe1j2u5Eys1IR7I-ZF9E9Xdg',
  address: '600 N 1st Ave, Minneapolis, MN 55403',
  lat: 44.9794545,
  lng: -93.27618989999996,
  type: 'sports'
},
{
  name: "Target Field",
  placeId: 'ChIJJYc87o0ys1IRVcUvE2JZ4uQ',
  address: '1 Twins Way, Minneapolis, MN 55403',
  lat: 44.9817656,
  lng: -93.277514,
  type: 'sports'
},
{
  name: "TCF Bank Stadium",
  placeId: 'ChIJbyL77h4ts1IRa79fA9QpoTM',
  address: '420 SE 23rd Ave, Minneapolis, MN 55455',
  lat: 44.976525,
  lng: -93.22454619999996,
  type: 'sports'
},
{
  name: "Town Hall Brewery",
  placeId: 'ChIJWXJFzWkts1IRc_B_voNR6xY',
  address: '1430 S Washington Ave, Minneapolis, MN 55454',
  lat: 44.9733315,
  lng: -93.24778570000001,
  type: 'bar'
},
{
  name: "U.S. Bank Stadium",
  placeId: 'ChIJ88m282Ats1IR07-KSSWdNeU',
  address: '401 Chicago Ave, Minneapolis, MN 55415',
  lat: 44.9737514,
  lng: -93.25781540000003,
  type: 'sports'
}];