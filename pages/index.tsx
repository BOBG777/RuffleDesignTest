import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Index() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/HomePage');
    }, []);

    return null;
}

export default Index;
