
const calculatetemp = () => {

    const numberTemp = document.getElementById('temp').value; // Getting value of the inputted number 

    const unit = document.getElementById('unit');
    const unitvalue = unit.options[unit.selectedIndex].value;  // Getting value of the inputted unit


    const celtofah = (cel) => {
        let fah = Math.round(((cel * 9 / 5) + 32));
        return fah;
    }

    const fahtocel = (fah) => {
        let cel = Math.round(((fah - 32) * 5 / 9));
        return cel;
    }

    let result;

    if(unitvalue == 'none'){
        document.getElementById('result').innerHTML = ` Invalid Input `;
    }
    else if (unitvalue == 'cel') {
        result = celtofah(numberTemp);
        document.getElementById('result').innerHTML = ` ${result}° Fahrenheit`;
    }
    else {
        result = fahtocel(numberTemp);
        document.getElementById('result').innerHTML = ` ${result}° Celsius`;
    }

}