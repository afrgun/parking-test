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
  if(slotAvailable == 0){
    return alert('Sorry, parking lot is full');
  }

  var carNumber = prompt("Vehicle number:");

  if (carNumber == null || carNumber == "") {
    txt = "Canceled";
  } else {  
    var carColor = prompt('Vehicle color:');
    if (carColor == null || carColor == "") {
      return
    }

    resultPark.push({
      'vehicle_number': "park " + carNumber,
      'vehicle_color': carColor
    });
    
  }

  slotAvailable -= 1;

  checkSlot();
  document.getElementById("slotParking").innerHTML = slotAvailable + " Slots Avalaible";
}


function checkSlot(){
  listParking = '<ul>';
  resultPark.forEach(function(car) {
    listParking += '<li>'+ car.vehicle_number + '</li>';
  }); 
  listParking += '</ul>';

  return document.getElementById("listParking").innerHTML = listParking;
}

function parkOut(){
  var charge;
  var vehicleNo = prompt("Vehicle Number:");
  if (vehicleNo == null || vehicleNo == "") {
	  return
  } else {
    const list = resultPark.filter(x => x.vehicle_number === 'park ' + vehicleNo)
    let index = resultPark.findIndex(x => x.vehicle_number === 'park ' + vehicleNo)


    if(list.length > 0){
      var hours = prompt('Hours:')
      if (hours == null || hours == "") {
        return
      } else {
        if(hours > 2){
          charge = ( hours - 2 ) * 10 + 10;
          alert("Charge $" + charge);
        } else {
          alert("Charge $10");
        }

        resultPark.splice(index, 1);
      }
    } else {
      alert('Data not found');
    }
  }

  slotAvailable += 1;

  checkSlot();
  document.getElementById("slotParking").innerHTML = slotAvailable + " Slots Avalaible";
}
