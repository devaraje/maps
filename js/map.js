/***********************************************************************************************************************************
Create a Web page with a map, either static or slippy, using the API of your choice.

Create a little form that allows the user to choose the location and zoom level. This could be input boxes for entering latitude, longitude, and zoom. Or it could be a menu (select, radio buttons, or something similar) of places you find interesting.

When the user chooses a location, change the map accordingly. If you are using a slippy map, there are built-in functions to do this. If a static map, build the new URL string and use jQuery's attr() function to set the src attribute.

***********************************************************************************************************************************/

//event listeners
$('#btn-submit').on('click', onClickSubmit);
$('#btn-reset').on('click', onClickReset);


  function onClickSubmit(evt){  //event handler for the submit button
    
    evt.preventDefault();
    
    var lat = $('#inputLat').val();
    var long = $('#inputLong').val();
    var zoom = $('#inputZoom').val();
    
    //If input is empty, display error
    if (lat == '' | long == '' | zoom ==''){
    
      displayError();

    }
    
    else { //display map
      
    lat = parseFloat(lat);
    long = parseFloat(long);
    zoom = Math.abs(parseFloat(zoom));
    displayMap(lat, long, zoom);
      
    }
    
  }

  function onClickReset(evt){  //event handler for the submit button

    $('#google-map').hide();
    //reset the input fields
    resetForm()
    //hide error text
    $('#input-error').hide();
    evt.preventDefault();
    
  }
  
  function displayError(){
  
    $('#input-error').show();
    resetForm();
    
  }

  function resetForm(){
    
    $('#inputLat').val('');
    $('#inputLong').val('');
    $('#inputZoom').val('');
    //set focus to the first input field
    $('#inputLat').focus();
    
  }
  
  function displayMap(latitude, longitude, zoom){
    
    console.log("in displayMap");
    var googleMap = new google.maps.Map( $('#google-map')[0] );
    googleMap.setCenter( { lat: latitude, lng: longitude } );
    googleMap.setZoom( zoom );
  
    $('#google-map').show();
    
  }
  
