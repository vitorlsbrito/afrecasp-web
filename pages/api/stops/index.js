import Stop from '../../../models/Stop';

async function Stops (req, res) {
    const { method } = req;

    switch (method) {
        case method == 'GET':
            const stops = await Stop.scan().exec();

            return res.json({ stops });
            //return res.status(200).json({ message: 'GET' });
        case method == 'POST':
            return res.status(200).json({ message: 'POST' });
        default:
            return res.status(200).json({ message: 'TESTE!' });
    }
}

export default Stops;
