import { useRouter } from 'next/router';

function Stops() {
    const router = useRouter();
    const id = router.query.id;

    return (
        <h1>{ id }</h1>
    )
}

export default Stops;
