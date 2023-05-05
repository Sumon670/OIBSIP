const calculate = () => {
    const input = document.getElementById('temp').value;
    const selected = document.getElementById('diff');
    const value = diff.options[selected.selectedIndex].value;
    const celToFah = (cel) => {
        let a = Math.round(((cel * 9 / 5)+32));
        return a;
    }
    const celToKel = (cel) => {
        let a = ((cel*1)+273);
        return a;
    }
    const fahToCel = (fah) => {
        let b = Math.round(((fah-32)*5/9));
        return b;
    }
    const fahToKel = (fah) => {
        let b = Math.round(((fah-32)*5/9));
        let a = (b+273);
        return a;
    }
    const kelToCel = (kel) => {
        let a = (kel-273);
        return a;
    }
    const kelToFah = (kel) => {
        let a = (kel-273);
        let b = Math.round(((a * 9 / 5)+32));
        return b;
    }
    if (value == 'cel') {
        document.getElementById('result').innerHTML = celToFah(input) + "&#176; Fahrenheit";
        document.getElementById('resultNew').innerHTML = celToKel(input) + "&nbsp; Kelvin";
    }
    else if (value == 'fah'){
        document.getElementById('result').innerHTML = fahToCel(input) + "&#176; Celsius";
        document.getElementById('resultNew').innerHTML = fahToKel(input) + "&nbsp; Kelvin";
    }
    else{
        document.getElementById('result').innerHTML = kelToCel(input) + "&#176; Celsius";
        document.getElementById('resultNew').innerHTML = kelToFah(input) + "&#176; Fahrenheit";
    }
}