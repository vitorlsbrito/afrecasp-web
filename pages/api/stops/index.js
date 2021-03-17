require('dotenv').config();
import firestore from '../../../utils/firestore';

function Stops (req, res) {
    const { method } = req;

    firestore.settings({ ignoreUndefinedProperties: true });
    const collection = firestore.collection('stops');

    console.log(collection);

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
