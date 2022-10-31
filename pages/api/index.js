export default async function handler(req, res) {
    try{
        console.log("Buscando cookies");
        const resp_cook = await fetch("https://www.cruzverde.cl/?utm_source=google&utm_medium=branded_paid_search&utm_campaign=FCV_AO-Brand-Exacto__conversion_AO&gclid=CjwKCAjwtKmaBhBMEiwAyINuwOBG6ZPAZFbkewlnKSa6zmF1Wxhx21T8jrYPAt53xyRVNA6BrysPsRoCQWEQAvD_BwE")
        console.log(resp_cook.headers);
        console.log("Vamo a darle a cru verde");
        const resp = await fetch("https://api.cruzverde.cl/product-service/products/recommendations/product-to-product?products[]=260536&enableTracking=true&inventoryId=1119", {
        "credentials": "include",
        "headers": {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:103.0) Gecko/20100101 Firefox/103.0',
            'Accept': 'application/json, text/plain, */*',
            'Accept-Language': 'es-CL,es;q=0.8,en-US;q=0.5,en;q=0.3',
            'Accept-Encoding': 'gzip, deflate, br',
            'Origin': 'https://www.cruzverde.cl',
            'Connection': 'keep-alive',
            'Referer': 'https://www.cruzverde.cl/',
            'Cookie': '_gcl_aw=GCL.1661863193.CjwKCAjw6raYBhB7EiwABge5KpPrPdsohP96ObOLyh7g9NkTf5DtuDgpCfhGwbvVKZF0kfdMlVHqtBoCeVoQAvD_BwE; _gcl_au=1.1.187801429.1661261114; _ga_GMKXQPNSW5=GS1.1.1665843837.7.1.1665843858.39.0.0; _ga=GA1.2.435906953.1661261118; _fbp=fb.1.1661261119211.411688162; _hjSessionUser_1614665=eyJpZCI6IjFjMmYxM2NkLWE3ODUtNTA1NC05YjMxLTJkYTYzNGEyYTdiNSIsImNyZWF0ZWQiOjE2NjEyNjExMTkyMDcsImV4aXN0aW5nIjp0cnVlfQ==; _gac_UA-149350909-1=1.1661863615.CjwKCAjw6raYBhB7EiwABge5KpPrPdsohP96ObOLyh7g9NkTf5DtuDgpCfhGwbvVKZF0kfdMlVHqtBoCeVoQAvD_BwE; _gid=GA1.2.1341702791.1665843838; connect.sid=s%3Acruzverde-8a919eae-b38a-4b09-9256-e7b79d8250e3.2KJVJDcCiAQLFRfUkcb0gS7v9Gy%2Bg2uCcNLle4umgUM; _gat_UA-149350909-1=1; _hjSession_1614665=eyJpZCI6IjlhZmUwODc5LTMyZDMtNDFkNi04YjU2LTRjY2Q5YmY4OTQ4MiIsImNyZWF0ZWQiOjE2NjU4NDM4Mzk4MDUsImluU2FtcGxlIjpmYWxzZX0=; _hjAbsoluteSessionInProgress=0',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-site',
            'If-None-Match': 'W/"10860-k4NfTE9QE/3WoHAOjfvFDQCYgrU"',
            'TE': 'trailers'
        },
        "referrer": "https://www.cruzverde.cl/",
        "method": "GET",
        "mode": "cors"
    });
    const respJson = await resp.json();
    res.status(200).json({"data": respJson});
    } catch {
        res.status(404);
        console.log("Error en llamada");
    }
}