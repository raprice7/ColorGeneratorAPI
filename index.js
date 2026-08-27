// Id's:
//  color-form
//  seed-color 
//  scheme-mode 
//  get-scheme-button
//  image-container
let seedColor = document.getElementById("seed-color");
let schemeMode = document.getElementById("scheme-mode"); // (<select></select>)
let getSchemeButton = document.getElementById("get-scheme-button");
let colorForm = document.getElementById("color-form");
let imageContainer = document.getElementById("image-container")

// Add Event listener to button
colorForm.addEventListener("submit", e => {
        e.preventDefault();
        const userScheme = schemeMode.value
        console.log(userScheme);
    })
//Create a function to render colors
// - this should fire after user clicks "Get Color Scheme"
// - Program needs to take user input which will be the input.value -> schemeMode.value
// - color API returns an image in the format of an SVG
function renderColorScheme(){
    let html = ""

    
}

// fetch functionality to send GET request to Color API
    fetch("https://www.thecolorapi.com/scheme?hex=0047AB&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33&format=json&mode=analogic&count=6")
        .then(res => res.json())
        .then(data => {
                console.log(data.image)
                imageContainer.innerHTML = `<img src="${data.image.bare}">`
                console.log(imageContainer)
        }
            
            )

