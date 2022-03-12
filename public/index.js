const browserObject = require('./browser');
const scraperController = require('./pageController');

let boton = document.getElementById("boton");

async function index(){
    //Start the browser and create a browser instance
    let browserInstance = browserObject.startBrowser();
    
    // Pass the browser instance to the scraper controller
    let msje = await scraperController(browserInstance)
    console.log(msje)
    console.log("estoy en index.js")
}

boton.addEventListener('click', index());