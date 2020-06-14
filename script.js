function createSlot() {
	var txt;
	var resultPark = [];
	var slotPark = prompt("Create parking lot of size n:");
	if (slotPark == null || slotPark == "") {
	  txt = "Canceled";
	} else {
	  txt = slotPark;
	  for(var i = 0; i < slotPark; i++){
		  resultPark.push('park KA-01-HH-12'+i);
    }
    
    txt = '<ul>';
    resultPark.forEach(function(slide) {
      txt += '<li>'+ slide + '</li>';
    }); 
    txt += '</ul>';
  }
  
  document.getElementById("listPark").innerHTML = txt;
}