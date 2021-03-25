import axios from 'axios';
import { useState, useEffect, useRef } from 'react'; 
import { useRouter } from 'next/router';

import styles from './container.module.css'

function Stop(props) {
    const router = useRouter();
    const { id } = router.query;

    const [stop, setStop] = useState([]);

    /*
        import React, {useCallback, useRef} from 'react'

        function useHookWithRefCallback() {
            const ref = useRef(null)
            const setRef = useCallback(node => {
                if (ref.current) {
                // Make sure to cleanup any events/references added to the last instance
            }
    
            if (node) {
                // Check if a node is actually passed. Otherwise node would be null.
                // You can now do what you need to, addEventListeners, measure, etc.
            }
    
            // Save a reference to the node
            ref.current = node
        }, [])
  
        return [setRef]
    }

function Component() {
  // In your component you'll still recieve a `ref`, but it 
  // will be a callback function instead of a Ref Object
  const [ref] = useHookWithRefCallback()
  
  return <div ref={ref}>Ref element</div>
}
    */

    let inputBus = useRef(stop.bus);
    const inputTrip = useRef(stop.trip);

    const getStop = async () => {
        const response = await axios.get(`https://3000-green-parrotfish-ahm8btgy.ws-us03.gitpod.io/api/stops/${ id }`);
        setStop(response.data);
    }

    useEffect(() => {
        getStop();
    }, []);

    return (
        <>
            <div className='box'>
                <h2>{ `${ stop.bus } - ${ stop.trip } - ${ stop.stop } - ${ stop.label }` }</h2>

                <form>
                    <label>Bus</label>
                    <input type='text' ref={ inputBus } />

                    <label>Trip</label>
                    <input type='text' ref={ inputTrip } />
                </form>

            </div>

            <div className={ styles.container }>
                <label>Ônibus:</label>
                <input type='text' name='TxtBus' id='TxtBus' value={ stop.bus} />

                <label>Viagem:</label>
                <input type='text' name='TxtTrip' id='TxtTrip' value={ stop.trip } />

                <label>Parada:</label>
                <input type='text' name='TxtTrip' id='TxtTrip' value={ stop.stop } />

                <label>Nome:</label>
                <input type='text' name='TxtTrip' id='TxtTrip' value={ stop.label } />

                <label>Endereço:</label>
                <input type='text' name='TxtTrip' id='TxtTrip' value={ stop.address } />
            </div>
        </>
    )

}

export default Stop;