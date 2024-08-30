import {useEffect, useState} from 'react';

export type PromiseStatus = {
  loading: boolean;
  error: boolean;
};

export const usePromise = <T>(promise: () => Promise<T>) => {
  const [data, setData] = useState<T>();
  const [promiseStatus, setPromiseStatus] = useState<PromiseStatus>({
    error: false,
    loading: false,
  });

  const executePromise = async () => {
    try {
      setPromiseStatus({error: false, loading: true});
      const response = await promise();
      setData(response);
      setPromiseStatus({error: false, loading: false});
    } catch {
      setData(undefined);
      setPromiseStatus({error: true, loading: false});
    }
  };

  useEffect(() => {
    executePromise();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    ...promiseStatus,
  };
};
