// Id's:
//  seed-color 
//  scheme-mode 
//  get-scheme-button
let seedColor = document.getElementById("seed-color");
let schemeMode = document.getElementById("scheme-mode");
let getSchemeButton = document.getElementById("get-scheme-button");

//Create a function to render colors
// - this should fire after user clicks "Get Color Scheme"
// - Program needs to take user input which will be the input.value
// use for...of loop to push colors to color blocks

// fetch functionality to send GET request to Color API
fetch("https://www.thecolorapi.com/scheme?hex=0047AB&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33&format=json&mode=analogic&count=6")
    .then(res => res.json())
    .then(data => console.log(data))