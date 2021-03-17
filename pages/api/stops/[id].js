import { useRouter } from 'next/router';
import Stop from '../../../models/Stop';

async function Stops (req, res) {
    const { method } = req;

    switch (method) {
        case 'GET':
            const router = useRouter();
            const id = router.query.id;

            return res.json({ message: 'Test' });
            break;
        case 'POST':
            return res.json({ method: 'POST' })
            break;
        default:
            res.status(500).json({ error: 'Method does not supported.' });
    }
}

export default Stops;
