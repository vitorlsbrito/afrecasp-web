import Stop from '../../../models/Stop';
import { useRouter } from 'next/router';

async function Stops (req, res) {
    const { method } = req;

    switch (method) {
        case 'GET':
            const router = useRouter();
            const { id } = router.query;

            const stop = await Stop.get(id);
            return res.json(stop);
            break;
        case 'PUT':
            return res.json({ method: 'POST' })
            break;
        default:
            res.status(500).json({ error: 'Method does not supported.' });
    }
}

export default Stops;
