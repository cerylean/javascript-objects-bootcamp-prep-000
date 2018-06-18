var playlist = { Madonna: "like a prayer"};

function updatePlaylist(playlist, artist, song) {Object.assign (playlist, {[artist]: song}); return playlist} 

function removeFromPlaylist(name, artist) {delete name.artist; return name}