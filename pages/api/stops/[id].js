import Stop from '../../../models/Stop';

async function Stops (req, res) {
    const { method } = req;

    if (method === 'GET') {
        const { id } = req.query;

        const stop = await Stop.get(id);
        res.json(stop);
    } else if (method === 'PUT') {
        const { id } = req.query;

        const stop = await Stop.update(id, req.body);
        res.json(stop);
    } else if (method === 'DELETE') {
        const { id } = req.query;

        await Stop.delete(id);
        res.sendStatus(204);
    } else {
        res.status(500).json({ error: 'Method does not supported.' });
    }
}

export default Stops;
