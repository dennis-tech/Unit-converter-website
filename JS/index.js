document.getElementById('convertBtn').addEventListener('click', unitConverter);

function unitConverter() {
        let inputValue = document.getElementById("inputField").value;
        
        if(inputValue){
                document.getElementById('lengthMeters').innerHTML= inputValue +" meters = " + 
                Number(inputValue*3.2808).toFixed(3) + " feet "+ " | " + inputValue + " feet = "+ 
                Number(inputValue/3.2808).toFixed(3) + " meters" ;

                document.getElementById('volumeLitres').innerHTML= inputValue +" litres = " + 
                Number(inputValue*0.264172).toFixed(3) + " gallons "+ " | " + inputValue + " gallons = "+ 
                Number(inputValue/0.264172).toFixed(3) + " litres" ;

                document.getElementById('massKilos').innerHTML= inputValue +" kilos = " + 
                Number(inputValue*2.2).toFixed(3) + " pounds "+ " | " + inputValue + " pounds= "+ 
                Number(inputValue/2.2).toFixed(3) + " kilos" ;
        }
        
}

