const axios = require('axios').default;

axios.get('https://afrecasp-web.vercel.app/api/stops')
.then((content) => {
    if (content.status === 200) {
        console.log(Object.keys(content.data).length);
    } else {
        console.log({ id: 'Erro' });
    }
}).catch((e) => {
    console.log({ id: 'Erro' });
});