var playlist = {
  ledZepplin:"Stairway To Heaven"
}

var updatePlaylist = (obj,artistName,songTitle) =>{
  return Object.assign(obj,{[artistName]:songTitle})
}

var removeFromPlaylist = (obj, artistName) =>{
  console.log(delete obj[artistName]);
  console.log(obj)
  return obj
}

console.log(removeFromPlaylist(playlist,"ledZepplin"))