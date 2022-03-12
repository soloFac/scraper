const pageScraper = require('./pageScraper');

async function scrapeAll(browserInstance){
	let browser;
	try{
		browser = await browserInstance;
		let msje = await pageScraper.scraper(browser);
		console.log(msje);
		return "soy scrapeAll";
	}
	catch(err){
		console.log("Could not resolve the browser instance => ", err);
	}

}

module.exports = (browserInstance) => scrapeAll(browserInstance)
