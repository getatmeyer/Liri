require("dotenv").config();
var moment = require('moment');
var keys = require("./keys.js");
console.log(keys);

// READ FILE, random.txt /////////////////////
var fs = require("fs")
// The code will store the contents of the reading inside data
fs.readFile("random.txt", "utf8", function(error, data) {

    if (error) {
        return console.log(error);
    }
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
//function definition wrap all code below

// function spotifySong(value) {

 if (command === "spotify-this-song" ) {
    console.log("browsing song");
 
    spotify.search({
         type: 'track', query: search }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        for (let i = 0; i <data.length; i++) {
            console.log(data[i]);
        }
        //album name
        console.log(data.tracks.items[0].album.name);
        //preview_url
        console.log(data.tracks.items[0].preview_url);
        //If you want _all_ the artists, you;ll need to loop through the artists array
        console.log(data.tracks.items[0].artists[0].name);
        // console.log(JSON.stringify(data,null,2)); 
    
        });
    }
 
///////////// BANDS IN TOWN SECTION
var command = process.argv[2];
console.log(command);
var search = process.argv[3];
console.log(search);
console.log(process.argv[0])

// function concertThis(value) {

if (command === "concert-this") {

    var axios = require('axios')

        axios.get("https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp")

        .then(function(response) {
        // console.log(response);
        // console.log(response.data);

console.log("______________________________________");
console.log("______________________________________");
console.log("_________BANDSINTOWN DATABASE_________");
console.log("______________________________________");
console.log("______________________________________");

            if(response.data[0].venue != undefined) {

                console.log(" Venue : " + response.data[0].venue.name);
                console.log(" Location : " + response.data[0].venue.city);
                var datetime = moment(response.data[0].datetime)
                console.log(response.data[0].datetime);
                
                console.log("Date of the event") + datetime.format("MM/DD/YYYY");
                // console.log(JSON.stringify,null,2);
            }
            }).catch(function(err){console.log(err)})

            }

            /////////////////// OMDB SECTION
    
            var command = process.argv[2];
            console.log(command);
            var search = process.argv[3];
            console.log(search);

            // function movieThis(value) {
            if (command === "movies-this") {

                var axios = require("axios");
                // console.log(axios);
                

                // axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy")
                axios.get("http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy")
            

                .then(function(response) {
                    // console.log(response);
                    if(search != " ") {
                       search = "Mr. Nobody";
                    }
                    
                console.log("______________________________________");
                console.log("______________________________________");
                console.log("_____________OMDB DATABASE____________");
                console.log("______________________________________");
                console.log("______________________________________");
                console.log(" Title of movie is : " + response.data.Title);
                console.log(" Year : " + response.data.Year);
                console.log(" The movie's rating is : " + response.data.imdbRating);
                console.log(" The Plot is based on : " + response.data.Plot);
                console.log(" Language : " + response.data.Language);
                console.log(" County : " + response.data.Country);
                console.log(" Actors: " + response.data.Actors);
                console.log(" Rotten Tomatoes score : " + response.data.Ratings[1].Value);
            });
            
        }
        // else  { if (command === " ") {
        //     console.log("Mr.Nobody");
        // }   
        
         ////////////// DO-WHAT-IF-SAYS

            // var command = process.argv[2];
            // console.log(command);
            // var search = process.argv[3];
            // console.log(search);


            //     if (command === "do-what-it-says") {
            //         console.log("do-what-it-says"); 

            //         switch (command) {
            //             case "spotify-this-song":
            //             spotifySong(value)
            //             break;
            //             case "concert-this":
            //             concertThis(value)
            //             break;
            //             case "movies-this":
            //             movieThis(value)
            //             break;
            //             case "do-what-it-says":
            //             doThis(value)
            //             break;

            //         };
            //     }
                
            
                    // function command (logText) {
                    //     log.info(logText);
                    //     console.log(logText);
    
                    // }