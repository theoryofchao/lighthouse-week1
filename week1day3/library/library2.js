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
  printPlaylists: function () {
    for(var playlist in this.playlists){
      console.log(this.playlists[playlist].id+": "+this.playlists[playlist].name+" - "+this.playlists[playlist].tracks.length,"tracks");
    }
  },
  printTracks: function () {
    for( var track in this.tracks){
      console.log(this.tracks[track].id+": "+this.tracks[track].name+" by "+this.tracks[track].artist,"("+this.tracks[track].album+")");
    }
  },
  printPlaylist: function (playlistId) {
    console.log(this.playlists[playlistId].id+": "+this.playlists[playlistId].name+" - "+this.playlists[playlistId].tracks.length,"tracks");
    for(var i = 0; i < this.playlists[playlistId].tracks.length; i++) {
      var trackId = this.playlists[playlistId].tracks[i];
      console.log(trackId+": "+this.tracks[trackId].name+" by "+this.tracks[trackId].artist,"("+this.tracks[trackId].album+")");
    }
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    if(this.playlists[playlistId].tracks.includes(trackId)){
      console.log("Track already Included");
    }
    else {
      this.playlists[playlistId].tracks.push(trackId);
      console.log("Track added");
      console.log(this.playlists[playlistId]);
    }
  },
  addTrack: function (name, artist, album) {
    var newTrackId = uid();
    var newTrack =  {
                      id: newTrackId,
                      name: name,
                      artist: artist,
                      album: album
                    };

    this.tracks[newTrackId] = newTrack;
    console.log(this);
  },
  addPlaylist: function (name) {
    var newPlaylistId = uid();
    var newPlaylist = {
                        id: newPlaylistId,
                        name: name,
                        tracks: {}
                      };
    this.playlists[newPlaylistId] = newPlaylist;
    console.log(this);
  },
  printSearchResults: function(query) {
    var songsFound = [];
    var queryLowerCase = query.toLowerCase();

    for(var track in this.tracks) {
      var name = this.tracks[track].name.toLowerCase();
      var artist = this.tracks[track].artist.toLowerCase();
      var album = this.tracks[track].album.toLowerCase();

      if((name.search(queryLowerCase) != -1) || (artist.search(queryLowerCase) != -1) || (album.search(queryLowerCase) != -1) ){
        songsFound.push(track);
      }
    }

    console.log(songsFound);
  }
}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

/*TEST CASES*/
// library.printPlaylists();
// library.printTracks();
// library.printPlaylist('p01');
// library.addTrackToPlaylist('t03', 'p01');
// library.addTrack('Billie Jean','Michael Jackson','Thriller?');
//library.addPlaylist('New Playlist');
library.printSearchResults("wo");