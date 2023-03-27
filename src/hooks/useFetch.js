import { useEffect, useState } from 'react';


const useFetch = (url) => {

    const [state, setState] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    
    useEffect(() => {

        setIsLoading(true);

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setIsLoading(false);
                setState(data)
            })
            .catch(err => setError(err));
            
    }, [url]);

    return {
        state,
        isLoading,
        error
    }
}

export default useFetch;