
let measurement = document.getElementById("size-3");
let meterz = document.getElementById("meters-1");
let volumez = document.getElementById("volume-1");
let massz = document.getElementById("mass-1");

function lengthConverter (valNum) {
        meterz.innerHTML= valNum +" meters = " + Number(valNum*3.2808).toFixed(3) + " feet "+ " | " + valNum + " feet = "+ Number(valNum/3.2808).toFixed(3) + " meters" ;
        volumez.innerHTML= valNum +" litres = " + Number(valNum*0.264172).toFixed(3) + " gallons "+ " | " + valNum + " gallons = "+ Number(valNum/0.264172).toFixed(3) + " litres" ;
        massz.innerHTML= valNum +" kilos = " + Number(valNum*2.2).toFixed(3) + " pounds "+ " | " + valNum + " pounds= "+ Number(valNum/2.2).toFixed(3) + " kilos" ;
}

