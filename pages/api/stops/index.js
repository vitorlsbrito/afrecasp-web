function Stops (req, res) {
    const { method } = req;

    switch (method) {
        case 'GET':
            res.status(200).json({ message: 'GET' });
        case 'PUT':
            res.status(200).json({ message: 'PUT' });
        case 'POST':
            res.status(200).json({ message: 'POST' });
        case 'DELETE':
            res.status(200).json({ message: 'DELETE' });
    }
}

export default Stops;
