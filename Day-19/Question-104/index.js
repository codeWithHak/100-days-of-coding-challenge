function hexaDecimalCode() {
    var color = '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");
    return color;
}
console.log(hexaDecimalCode());
