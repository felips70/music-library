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
             },
// prints a list of all playlists
   printPlaylists: function (){

     var allPlaylists = this.playlists;
    for (var id in allPlaylists) {
      var currPlaylist = allPlaylists[id];
      var name = currPlaylist.name;
      var tracksLength = currPlaylist.tracks.length

       console.log(id + ': ' + name + ' - ' + tracksLength + ' tracks');
    }
   },


// prints a list of all tracks
   printTracks: function () {

     var allTracks = this.tracks;
      for (var track in allTracks) {
        var currTrack = allTracks[track];
        var name = currTrack.name;
        var artist = currTrack.artist;
        var album = currTrack.album;
        console.log(track + ': ' + name + ' by ' + artist + ' (' + album +')');
      }
  },

// prints a list of tracks for a given playlist
   printPlaylist: function (playlistId) {
     var allPlaylists = this.playlists;

     var currPlaylist = allPlaylists[playlistId];
     var name = currPlaylist.name;
     var tracksLength = currPlaylist.tracks.length
     console.log(playlistId + ': ' + name + ' - ' + tracksLength + ' tracks');

     var allTracks = this.tracks;
     var trackIds = currPlaylist.tracks;
     for (var i = 0; i < trackIds.length; i++) {
       var currTrack = trackIds[i];
       var libTrack = allTracks[currTrack];
       var name = libTrack.name;
       var artist = libTrack.artist;
       var album = libTrack.album;
       console.log(trackIds[i] + ': ' + name + ' by ' + artist + ' (' + album +')');
     }
   },

// adds an existing track to an existing playlist
   addTrackToPlaylist:function (trackId, playlistId) {
     var allPlaylists = this.playlists;
     var toThisPlaylist = allPlaylists[playlistId];
     var inTracks = toThisPlaylist.tracks;
     inTracks.push(trackId)
     return inTracks;
   },


// generates a unique id
   uid: function() {
     return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
   },

// adds a track to the library

   addTrack: function (newName, newArtist, newAlbum) {
     var allTracks = this.tracks;
     var newId = this.uid();
     allTracks[newId] = {id: newId,
                      name: newName,
                      artist: newArtist,
                      album: newAlbum
                    }
     return allTracks[newId];
   },

// adds a playlist to the library

    addPlaylist: function (newName) {
      var allPlaylists = this.playlists;
      var newId = this.uid();
      allPlaylists[newId] = {id: newId,
                            name: newName,
                            tracks: []}
      return allPlaylists[newId];
    }
}

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search



var printSearchResults = function(query) {

}