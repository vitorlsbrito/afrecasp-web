import Stop from '../../../models/Stop';

async function Stops (req, res) {
    const { method } = req;

    switch (method) {
        case 'GET':
            const { id } = req.query;

            const stop = await Stop.get(id);
            return res.json(stop);
        case 'PUT':
            const { id } = req.query;

            const stop = await Stop.update(id, req.body);
            return res.json(stop);
        case 'DELETE':
            const { id } = req.params;

            await Stop.delete(id);
            return res.sendStatus(204);
        default:
            res.status(500).json({ error: 'Method does not supported.' });
    }
}

export default Stops;
