import { useState, useEffect } from 'react';
import { request } from 'graphql-request'
import * as CONFIG from './config'

export const useHttp = (url, dependencies) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    const pass = async () => {
      setIsLoading(true);
      console.log('Sending Http request to URL: ' + url);
      const data =
        await request(url, CONFIG.query, dependencies);
      setIsLoading(false);
      setFetchedData(data);
    }
    dependencies = dependencies ? pass() : ''
  }, [dependencies]);

  return [isLoading, fetchedData];
};