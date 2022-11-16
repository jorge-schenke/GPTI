import fetch from 'node-fetch';
import cheerio from 'cheerio';
import puppeteer from 'puppeteer';

export default async function handler(req, res) {
    const query = req.query.query;
    const getRawData = async (url) => {
        const response = await fetch(url);
        const data = await response.text();
        return data;
    }
    const dataList = [];
    const getSearch = async (querySearch, responseList) => {
        const drSimiURL = `https://www.drsimi.cl/${query}?_q=${query}&map=ft`;
        const cruzVerdeURL = `https://www.cruzverde.cl/search?query=${query}`;
        const AhumadaURL = `https://www.farmaciasahumada.cl/catalogsearch/result/?q=${query}`;
        const salcobrandURL = `https://salcobrand.cl/search_result?query=${query}`;
        //Dr Simi
        const drSimiData = await getRawData(drSimiURL);
        const $ = cheerio.load(drSimiData);
        const drSimiList = [];
        $('.vtex-product-summary-2-x-container').each((i, el) => {
            const title = $(el).find('.vtex-product-summary-2-x-productNameContainer').text();
            const price = parseInt($(el).find('.vtex-product-price-1-x-sellingPrice').text().replace("$", ""));
            const link = "https://www.drsimi.cl" + $(el).find('.vtex-product-summary-2-x-clearLink').attr('href');
            const image = $(el).find('.vtex-product-summary-2-x-image').attr('src');
            const source = "Dr Simi";
            drSimiList.push({
                title,
                price,
                link,
                image,
                source
            });
        });
        //add to dataList
        responseList.push.apply(responseList, drSimiList);
        //Cruz Verde
        const browser = await puppeteer.launch({
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
            ],
        })
        const page = await browser.newPage();
        await page.goto(cruzVerdeURL);
        await page.waitForSelector('ml-card-product');
        const cruzVerdeData = await page.content();
        const $CV = cheerio.load(cruzVerdeData);
        const cruzVerdeList = [];
        $CV('ml-card-product').each((i, el) => {
            const title = $CV(el).find('span.ng-star-inserted').text().replace(" Ver disponibilidad ", "").trim();
            const price = parseInt($CV(el).find('span.text-orange').text().replace("$", "").replace(".", ""));
            const link = "https://www.cruzverde.cl" + $CV(el).find('a').attr('href');
            const image = $CV(el).find('img.max-w-full').attr('src');
            const source = "Cruz Verde";
            cruzVerdeList.push({
                title,
                price,
                link,
                image,
                source
            });
        });
        //add to dataList
        responseList.push.apply(responseList, cruzVerdeList);
        //Ahumada
        const AhumadaData = await getRawData(AhumadaURL);
        const $AH = cheerio.load(AhumadaData);
        const AhumadaList = [];
        $AH('.product-item-info').each((i, el) => {
            const title = $AH(el).find('.product-item-link').text().replace('\n', '').replace(/\s+/g, ' ').trim();
            const price = parseInt($AH(el).find('.price').text().replace("$", "").replace(".", ""));
            const link = $AH(el).find('.product-item-photo').attr('href');
            const image = $AH(el).find('.product-image-photo').attr('src');
            const source = "Ahumada";
            AhumadaList.push({
                title,
                price,
                link,
                image,
                source
            });
        });
        //add to dataList
        responseList.push.apply(responseList, AhumadaList);
        //Salcobrand
        // console.log("Salcobrand URL: ", salcobrandURL);
        // const salcobrandData = await getRawData(salcobrandURL);
        // const $SB = cheerio.load(salcobrandData);
        // console.log("Salcobrand Data: ", salcobrandData);
        // const salcobrandList = [];
        // $SB('.product').each((i, el) => {
        //     const title = $SB(el).find('.product-info').text().replace('\n', '').replace(/\s+/g, ' ').trim();
        //     const price = parseInt($SB(el).find('.original-price').text().replace("Precio farmacia: $", "").replace(".", ""));
        //     const link = $SB(el).find('a').attr('href');
        //     const image = $SB(el).find('.img-responsive').attr('src');
        //     const source = "Salcobrand";
        //     salcobrandList.push({
        //         title,
        //         price,
        //         link,
        //         image,
        //         source
        //     });
        // });
        // console.log("Salcobrand List: ", salcobrandList);
        await browser.close();
    }
    // try{
    await getSearch(query, dataList);
    //send detaList in response:
    res.status(200).json({ dataList });
    // } catch {
    //     res.status(404);
    //     console.log("Error en llamada");
    // }
}