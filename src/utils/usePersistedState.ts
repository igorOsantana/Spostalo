import { useState, useEffect, Dispatch, SetStateAction} from 'react';

type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>,
];

// const ISSERVER = typeof window === "undefined";

export function usePersistedState<T>(key: string, initialState: T): Response<T> {
    
    const [state, setState] = useState<T>(() => {
        try{
            const storageValue = localStorage.getItem(key);
        
            return storageValue ? JSON.parse(storageValue) : initialState;
        } catch (error) {
            console.log(error);
            return initialState;
        }
    });

        useEffect(()=>{
            localStorage.setItem(key, JSON.stringify(state));
        },[state]);

        return [state, setState];

}