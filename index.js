// Id's:
//  color-form
//  seed-color 
//  scheme-mode 
//  get-scheme-button
//  image-container
const seedColor = document.getElementById("seed-color")
const schemeMode = document.getElementById("scheme-mode")
const colorForm = document.getElementById("color-form")
const schemeContainer = document.getElementById("scheme-container")

// Add Event listener to button
colorForm.addEventListener("submit", e => {
        e.preventDefault();
        const userColor = seedColor.value;
        const userScheme = schemeMode.value;
        // edit baseURL
        let fetchURL = `https://www.thecolorapi.com/scheme?hex=${userColor.slice(1)}&mode=${userScheme}&count=6`

        // fetch functionality to send GET request to Color API
        fetch(fetchURL)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                    renderColorScheme(data.colors);
            }
                )
    })
//Create a function to render colors
// - this should fire after user clicks "Get Color Scheme"
// - color API returns an image in the format of an SVG
function renderColorScheme(colors){
    // create empty HTML String
    let html = ""
    // loop through colors
        // add HTML for this color
        // use its hex value for the background
        // use its hex value for the text
        for(const color of colors){
            html += `
            <div class="color-column">
                <div class="color-swatch" style="background-color: ${color.hex.value}"></div>
                <p class="hex-code">${color.hex.clean}</p>
            </div>
`
        }
        console.log(html);
    // put finished HTML into div
        schemeContainer.innerHTML = html;
}


    

