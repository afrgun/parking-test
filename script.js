var txt, slotAvailable, listParking;
var resultPark = [];

function createSlot() {
  var slotPark = prompt("Create parking lot of size n:");
	if (slotPark == null || slotPark == "") {
	  txt = "Canceled";
	} else {
    slotAvailable = slotPark;
	  txt = 'Created parking lot with ' + slotPark + ' slots';
	}
  
  document.getElementById("slotParking").innerHTML = txt;
}

function parkIn(){
  var carNumber = prompt("Vehicle number:");

  if (carNumber == null || carNumber == "") {
    txt = "Canceled";
  } else {
    if(slotAvailable == 0){
      return alert('Sorry, parking lot is full');
    }
    resultPark.push("park " + carNumber);
  }

  slotAvailable -= 1;

  checkSlot();

  document.getElementById("listParking").innerHTML = listParking;
  document.getElementById("slotParking").innerHTML = slotAvailable + " Slots Avalaible";
}

function checkSlot(){
  listParking = '<ul>';
  resultPark.forEach(function(car) {
    listParking += '<li>'+ car + '</li>';
  }); 
  listParking += '</ul>';

  return listParking;
}