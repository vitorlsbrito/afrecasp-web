//import Link from 'next/link';
import { useState, useEffect } from 'react';

import Stop from '../../models/Stop';

function StopsList() {
    const [stops, setStops] = useState([]);

    const getStops = async() => {
        const data = await Stops.scanc().exec();
        setStops(data);
    }

    return (
        <>
            <h1>Stops</h1>

            <p>Stops: { Object.keys(stops).length} </p>
        </>
    );
}

export default StopsList;
