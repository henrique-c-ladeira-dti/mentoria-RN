import {renderHook, waitFor} from '@testing-library/react-native';
import {usePromise} from './usePromise';

describe('Tests on usePromise', () => {
  const makeSut = <T>(promise: () => Promise<T>) => {
    const sut = renderHook(() => usePromise(promise));
    return {sut};
  };

  it('returns promise data and status correctly on success', async () => {
    const data = 'data_success';
    const promise = () => Promise.resolve(data);

    const {sut} = makeSut(promise);

    await waitFor(() => {
      expect(sut.result.current.data).toBe(data);
      expect(sut.result.current.loading).toBe(false);
      expect(sut.result.current.error).toBe(false);
    });
  });

  it('returns empty data and status correctly on error', async () => {
    const data = 'data_error';
    const promise = () => Promise.reject(data);

    const {sut} = makeSut(promise);

    await waitFor(() => {
      expect(sut.result.current.data).toBe(undefined);
      expect(sut.result.current.loading).toBe(false);
      expect(sut.result.current.error).toBe(true);
    });
  });

  it('returns loading true whilte promise fetching', async () => {
    const data = 'data_error';
    const promise = () => Promise.reject(data);

    const {sut} = makeSut(promise);

    await waitFor(() => {
      expect(sut.result.current.data).toBe(undefined);
      expect(sut.result.current.loading).toBe(true);
      expect(sut.result.current.error).toBe(false);
    });
  });
});
