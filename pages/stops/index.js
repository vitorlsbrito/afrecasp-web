import { useEffect, useState } from 'react';
import Link from 'next/link';
import Stop from '../../models/Stop';

function Stops() {
    const [stops, setStops] = useState([]);

    useEffect(() => {
        const fetchStops = async () => {
            const data = await Stop.scan().attributes(['id', 'bus', 'trip', 'stop', 'label']).exec();
            setStops(data);
        }

        fetchStops();
    }, []);
    
    return (
        <>
            <h1>Paradas</h1>

            <p>Número de paradas: { stops.length }</p>

            { stops.length > 0 && (
                <>
                    <p>Lista de paradas</p>

                    <ul>
                        { stops.map((stop, ix) => {
                            return (
                                <li key={ stop.id }>
                                    <Link href={ `/stops/${ stop.id }`}>
                                        {`${ ix }: ${ stop.bus } - ${ stop.trip } - ${ stop.stop } - ${ stop.label }`}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </>
            )}
        </>
    )
}

export default Stops;
