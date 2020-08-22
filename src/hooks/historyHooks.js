import {useState, useEffect, } from  'react';
import useFetch from 'use-http';

const useHistoryHook = () => {

    const  [history, setHistory] = useState([]); 
    const { get, post, response, loading, error } = useFetch('http://localhost:9000/api');

    const getHisotry = async () => {
        const data = await get('/history')
        if (response.ok) setHistory(data)
    }

    const postHistory = async (requestody) => {
        const data = await post('/history', requestody);
        if (response.status === 200 ) 
            setHistory(data);
    }

    useEffect (() => { 
        getHisotry();
    }, []);


    return {
        loading,
        error,
        history,
        postHistory,
        getHisotry,
    }

}

export default useHistoryHook;