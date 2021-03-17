require('dotenv').config();

function Stops (req, res) {
    const { method } = req;

    console.log(process.env.FIREBASE_CREDENTIALS);

    switch (method) {
        case method == 'GET':
            return res.status(200).json({ message: 'GET' });
        case method == 'POST':
            return res.status(200).json({ message: 'POST' });
        default:
            return res.status(200).json({ message: 'TESTE!' });
    }
}

export default Stops;
