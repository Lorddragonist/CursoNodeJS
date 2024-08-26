const puppeteer = require('puppeteer');

(async () => {
	try {
		// Iniciar el navegador
		console.log('Launching browser');
		const browser = await puppeteer.launch({
			headless: false,
            executablePath: '/usr/bin/chromium-browser'
		});

		// Crear una nueva página
		console.log('New page');
		const page = await browser.newPage();

		// Ir a una página
		console.log('Going to page');
		await page.goto('https://es.wikipedia.org/wiki/Node.js');

        let titulo1 = await page.evaluate(() => {
            const h1 = document.querySelector('h1');
            // console.log(h1.innerText);
            return h1.innerText;
        });

        console.log(titulo1);

		// Cerrar el navegador
		console.log('Closing browser');
		await browser.close();
	} catch (error) {
        console.log(error.message);
    }
})();
