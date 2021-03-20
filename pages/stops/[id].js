import { useRouter } from 'next/router';

function Stop(props) {
    const router = useRouter();
    const { id } = router.query;

    return (
        <h1>{ id }</h1>
    )

}

export default Stop;