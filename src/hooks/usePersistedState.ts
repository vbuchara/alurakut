import { useState, useEffect } from 'react';

export function usePersistedState(key: string, initialState: any){
  const [ state, setState ] = useState(initialState);

  useEffect(() => {
    setState(JSON.parse(localStorage.getItem(key)));
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [ state, setState ];
}