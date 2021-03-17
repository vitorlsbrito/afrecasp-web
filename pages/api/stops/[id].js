import { useRouter } from 'next/router';

function Produtos() {
    const router = useRouter();
    const id = router.query.id;

    return <div>Id: { id }</div>
}

export default Produtos;