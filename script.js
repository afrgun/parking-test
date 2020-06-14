function createSlot() {
	var txt;
	var resultPark = [];
	var slotPark = prompt("Create parking lot of size n:");
	if (slotPark == null || slotPark == "") {
	  txt = "Canceled";
	  document.getElementById("listPark").innerHTML = txt;
	} else {
	  txt = slotPark;
	  for(var i = 0; i < slotPark; i++){
		  resultPark.push('park KA-01-HH-12'+i);
    }
    
    var str = '<ul>';
    resultPark.forEach(function(slide) {
      str += '<li>'+ slide + '</li>';
    }); 
    str += '</ul>';

		document.getElementById("listPark").innerHTML = str;
	}
}