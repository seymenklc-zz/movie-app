import { useEffect, useState } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setData(data);
                    setIsPending(false);
                })
                .catch(err => console.log(err));
        }, 2000);
    }, [url]);

    return { data, isPending, setData };
};

export default useFetch;