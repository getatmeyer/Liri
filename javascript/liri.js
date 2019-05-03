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
 if (command === "spotify-this-song" ) {
    console.log("browsing song");
 
    spotify.search({ type: 'track', query: search }, function(err, data) {
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
console.log(process.argv)
if (command === "concert-this") {

    var axios = require('axios')

    // SEVERAL ATTEMPTS
    // this.venue = venue; //failed
    // var venue; // failed
    
        axios.get("https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp")
        // axios.get("https://rest.bandsintown.com/artists/" + search +  venue + "/events?app_id=codingbootcamp")

        .then(function(response) {
console.log(response);
// console.log(response.data);

            if(response.data[0].venue != undefined) {
                console.log(" Venue: " + response.data[0].venue.name);
                console.log(" Location : " + response.data[0].venue.city);
                var datetime = moment(response.data[0].datetime)
                console.log(response.data[0].datetime);
                
                console.log("Date of the event") + datetime.format("MM/DD/YYYY");
console.log(JSON.stringify,null,2);

                // for (var i = 0; i < venue.length; i++) {
                // }
            }
            }).catch(function(err){console.log(err)})

            }
                  
                
  
            
            // console.log(events);
            // console.log(events.data);

            // }).catch(function(err){console.log(err)})
            
    
       
            
        // console.log("name of concert");
        // console.log(events[0].search.artistName);
        // console.log(events[0].search.dates);
        
    

    // if (command === "concert-this") {
//         console.log("name of concert");
// //         // If axios is successful...
//         console.log(events[0].artistName);
//         console.log(events[0].dates);
//     }
// })
//  }
    
    
//     }  
// })

    


// // if (command === "movies-this") {
// //     console.log("movies database");


// // }
// // if (command === "do-what-it-says") {
// //     console.log("simon says"); 
//     }
