import Stop from '../../../models/Stop';

async function Stops (req, res) {
    const { method } = req;

    switch (method) {
        case 'GET':
            res.setHeader('Cache-Control', 's-maxage=10', 'stale-while-revalidate');

            if (!req.params) {
                const stops = await Stop.scan().exec();
                return res.json({ stops });
            } else {
                const { id } = req.params;

                const stop = await Stop.get(id);
                return res.json(stop);
            }
        default:
            return res.status(200).json({ message: 'Teste' });
    }
}

export default Stops;
