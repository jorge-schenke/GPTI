import fetch from 'node-fetch';
import cheerio from 'cheerio';

export default async function handler(req, res) {
    const query = req.query.query;
    console.log("Query: ", query);
    const getRawData = async (url) => {
        const response = await fetch(url);
        const data = await response.text();
        return data;
    }
    const dataList = [];
    const getSearch = async (querySearch, responseList) => {
        const drSimiURL = `https://www.drsimi.cl/${query}?_q=${query}&map=ft`;
        console.log("Dr Simi URL: ", drSimiURL);
        const cruzVerdeURL = `https://www.cruzverde.cl/search?query=${query}`;
        const AhumadaURL = `https://www.farmaciasahumada.cl/catalogsearch/result/?q=${query}`;
        const salcobrandURL = `https://salcobrand.cl/search_result?query=${query}`;
        //Dr Simi
        const drSimiData = await getRawData(drSimiURL);
        const $ = cheerio.load(drSimiData);
        const drSimiList = [];
        $('.vtex-product-summary-2-x-container').each((i, el) => {
            const title = $(el).find('.vtex-product-summary-2-x-productNameContainer').text();
            const price = $(el).find('.vtex-product-price-1-x-sellingPrice').text();
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
        console.log("Dr Simi List: ", drSimiList);
        //add to dataList
        responseList.push(drSimiList);
        //Cruz Verde
        const cruzVerdeData = await getRawData(cruzVerdeURL);
        //Ahumada
        const AhumadaData = await getRawData(AhumadaURL);
        //Salcobrand
        const salcobrandData = await getRawData(salcobrandURL);
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