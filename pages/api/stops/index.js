function Stops (req, res) {
    const { method } = req;

    res.status(200).json({ method });
}

export default Stops;
