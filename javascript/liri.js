require("dotenv").config();

var keys = require("./keys.js");
console.log(keys);

// READ FILE, random.txt /////////////////////
var fs = require("fs")
// The code will store the contents of the reading inside data
fs.readFile("random.txt", "utf8", function(error, data) {

    if (error) {
        return console.log(error);
    }
    //This will then print the contents of data
    // console.lvog(data);
    
    var dataArr = data.split(",");
    console.log(dataArr);
});

/////////// SPOTIFY SECTION
var command = process.argv[2];
console.log(command);
var search = process.argv[3];
console.log(search);


var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: "39b1926499b54d84aef4081afb53e5b1",
  secret: "2817b4a1ea7a4412ad4e19baa8908341"
});
 if (command === "spotify-this-song" ) {
    spotify.search({ type: 'track', query: search }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log(data.tracks.items[0].artists);
        // console.log(JSON.stringify(data,null,2)); 
});
 console.log("search for this song");
 
 }
 if (command === "movies-this") {
     console.log("movies database");
 }
 if (command === "do-what-it-says") {
     console.log("simon says");
     
 }
 if (command === "concert-this") {
     console.log("name of concert");
     
 }

//  .search({})

// .search({: "track", query: processArgV3})

