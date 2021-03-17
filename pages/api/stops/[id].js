import Stop from '../../../models/Stop';

async function Stops (req, res) {
    const { method } = req;

    switch (method) {
        case 'GET':
            return res.json(req);
            break;
        case 'POST':
            return res.json({ method: 'POST' })
            break;
        default:
            res.status(500).json({ error: 'Method does not supported.' });
    }
}

export default Stops;
