import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import Stop from '../../models/Stop';

function Form() {
    const router = useRouter();

    const stopForm = useRef(null);
    const pageTitle = useRef(null);

    useEffect(() => {
        const fetchStop = async() => {
            const data = await Stop.get(router.query.id);

            stopForm.current['bus'].value = data.bus;
            stopForm.current['trip'].value = data.trip;
            stopForm.current['stop'].value = data.stop;
            stopForm.current['label'].value = data.label;
            stopForm.current['hour'].value = data.hour;
            stopForm.current['address'].value = data.address;
            stopForm.current['lat'].value = data.lat;
            stopForm.current['lng'].value = data.lng;

            pageTitle.current.innerHTML = `${ data.bus } - ${ data.trip } - ${ data.label }`
        }
        
        fetchStop();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updateStop = async() => {
            const data = {
                id: router.query.id,
                bus: stopForm.current['bus'].value,
                trip: stopForm.current['trip'].value,
                stop: parseInt(stopForm.current['stop'].value),
                label: stopForm.current['label'].value,
                address: stopForm.current['address'].value,
                hour: stopForm.current['hour'].value,
                lat: stopForm.current['lat'].value,
                lng: stopForm.current['lng'].value
            };
 
            const stop = await Stop.update(data);
            console.log(stop);
        }

        updateStop();
    } 

    return (
        <>
            <h1 ref={ pageTitle }></h1>

            <form ref={ stopForm }>
                <div className='inputWrapper'>
                    <label>Ônibus</label>
                    <input type='text' name='bus' placeholder='Zona Sul 6' />
                </div>

                <div className='inputWrapper'>
                    <label>Viagem</label>
                    <input type='text' name='trip' placeholder='Ida' />
                </div>

                <div className='inputWrapper'>
                    <label>Parada</label>
                    <input type='text' name='stop' placeholder='13' />
                </div>

                <div className='inputWrapper'>
                    <label>Nome</label>
                    <input type='text' name='label' placeholder='Dalben - Posto Ipiranga' />
                </div>

                <div className='inputWrapper'>
                    <label>Hora</label>
                    <input type='text' name='hour' placeholder='07:50' />
                </div>

                <div className='inputWrapper'>
                    <label>Endereço</label>
                    <input type='text' name='address' placeholder='Av. Nossa Senhora de Fátima, 1128' />
                </div>

                <div className='inputWrapper'>
                    <label>Latitude</label>
                    <input type='text' name='lat' placeholder='40.772606714296685' />
                </div>

                <div className='inputWrapper'>
                    <label>Longitude</label>
                    <input type='text' name='lng' placeholder='-73.90467290079579' />
                </div>

                <button onClick={ handleSubmit }>
                    Salvar
                </button>
            </form>
        </>
    )
}

export default Form;
