var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function (){

  var allPlaylists = library.playlists;
  for (var id in allPlaylists) {
    var currPlaylist = allPlaylists[id];
    var name = currPlaylist.name;
    var tracksLength = currPlaylist.tracks.length

    console.log(id + ': ' + name + ' - ' + tracksLength + ' tracks');
  }
}

//printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {

  var allTracks = library.tracks;
  for (var track in allTracks) {
    var currTrack = allTracks[track];
    var name = currTrack.name;
    var artist = currTrack.artist;
    var album = currTrack.album;
    console.log(track + ': ' + name + ' by ' + artist + ' (' + album +')');
 }
}
//printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var allPlaylists = library.playlists;

  var currPlaylist = allPlaylists[playlistId];
  var name = currPlaylist.name;
  var tracksLength = currPlaylist.tracks.length
  console.log(playlistId + ': ' + name + ' - ' + tracksLength + ' tracks');

  var allTracks = library.tracks;
  var trackIds = currPlaylist.tracks;
  for (var i = 0; i < trackIds.length; i++) {
    var currTrack = trackIds[i];
    var libTrack = allTracks[currTrack];
    var name = libTrack.name;
    var artist = libTrack.artist;
    var album = libTrack.album;
    console.log(trackIds[i] + ': ' + name + ' by ' + artist + ' (' + album +')');
  }
}

//printPlaylist('p01');

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  var allPlaylists = library.playlists;
  var toThisPlaylist = allPlaylists[playlistId];
  var inTracks = toThisPlaylist.tracks;
  inTracks.push(trackId)
  return inTracks;
  }

//console.log(addTrackToPlaylist('t03', 'p01'));

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// adds a track to the library

var addTrack = function (newName, newArtist, newAlbum) {
  var allTracks = library.tracks;
  var newId = uid();
  allTracks[newId] = {id: newId,
                      name: newName,
                      artist: newArtist,
                      album: newAlbum
                    }
  return allTracks[newId];
}

//console.log(addTrack('Gold', 'daMan', 'Hits'));

// adds a playlist to the library

var addPlaylist = function (newName) {
  var allPlaylists = library.playlists;
  var newId = uid();
  allPlaylists[newId] = {id: newId,
                      name: newName,
                      tracks: []}

  return allPlaylists[newId];

}
//console.log(addPlaylist('Old Goodies'));

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}