import { useEffect, useState } from 'react';


const useFetch = (url) => {

    const [state, setState] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setState(data)
                setIsLoading(false);
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