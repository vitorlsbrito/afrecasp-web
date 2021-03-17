import Stop from '../../../models/Stop';

async function Stops (req, res) {
    const { method } = req;

    switch (method) {
        case 'GET':
            const stops = await Stop.scan().exec();
            return res.status(200).json(stops);
        default:
            return res.status(200).json({ message: 'Teste' });
    }
}

export default Stops;
