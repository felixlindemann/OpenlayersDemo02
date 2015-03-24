
  $('#btnAddDemo').click(function (evt) {
    evt.preventDefault();
    olMapControls.Layers.ReadGpx("gpx/track.gpx", "Bycycle Tour Wuppertal 100km");
    
    $(this).parent().remove();
  }); 

 
$("#" + olMapControls.map.div).on('ReadGpx', function(){    
  var index = olMapControls.Layers.Tiles.length-1;
  var value = olMapControls.Layers.Tiles[index];
  console.log("index: " + index);
  console.log("value: " + value);
  AddButtonToOverlay("tracks",index, value);

});