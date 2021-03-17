import Stop from '../../../models/Stop';

async function Stops (req, res) {
    const { method } = req;

    switch (method) {
        case 'GET':
            res.setHeader('Cache-Control', 's-maxage=10', 'stale-while-revalidate');

            const stops = await Stop.scan().exec();
            return res.json({ stops });
            break;
        case 'POST':
            return res.json({ method: 'POST' })
            break;
        default:
            res.status(500).json({ error: 'Method does not supported.' });
    }
}

export default Stops;
