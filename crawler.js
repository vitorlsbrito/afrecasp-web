
const axios = require('axios').default;
const { JSDOM } = require('jsdom');

const pages = [
    'https://www.afrecasp.com.br/paulista-1/',
    'https://www.afrecasp.com.br/paulista-2/',
    'https://www.afrecasp.com.br/paulista-3/',
    'https://www.afrecasp.com.br/paulista-4/',
    'https://www.afrecasp.com.br/paulista-5/',
    'https://www.afrecasp.com.br/paulista-6/',
    'https://www.afrecasp.com.br/paulista-7/',
    'https://www.afrecasp.com.br/paulista-8/',
    'https://www.afrecasp.com.br/paulista-9/',
    'https://www.afrecasp.com.br/paulista-10/',
    'https://www.afrecasp.com.br/paulista-vip/',
    'https://www.afrecasp.com.br/zona-sul-1/',
    'https://www.afrecasp.com.br/zona-sul-4/',
    'https://www.afrecasp.com.br/zona-sul-5/',
    'https://www.afrecasp.com.br/zona-sul-6/',
];

pages.map(async (page) => {
    const content = await axios.get(page);

    const document = new JSDOM(content.data).window.document;
    const tables = document.getElementsByTagName('table');

    for (let t=0; t<tables.length; t++) {
        const tableLines = tables[t].getElementsByTagName('tr');

        for (let l=0; l<tableLines.length; l++) {
            try { hour = (tableLines[l].getElementsByTagName('td')[0].innerHTML).replace('\n', '') }
            catch (e) { hour = ''; }

            try { place = tableLines[l].getElementsByTagName('td')[1].innerHTML }
            catch (e) { place = ''; }

            const stop = {
                'bus': page.split('/')[3].split('-').join(' '),
                'trip': t===0 ? 'Ida' : 'Volta',
                'stop': l,
                'hour': hour,
                'label': place,
                'address': ''
            }

            axios.post('https://afrecasp-web.vercel.app/api/stops', stop)
            .then((data) => {
                console.log(data.status);
            }).catch((e) => {
                console.log(e);
            });
        }
    }
});