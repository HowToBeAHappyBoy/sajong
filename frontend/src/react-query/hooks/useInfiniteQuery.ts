import {
  QueryKey,
  useInfiniteQuery as useOriginalInfiniteQuery,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  QueryFunction,
} from 'react-query';

import { ErrorModel } from '../models';

export function useInfiniteQuery<TQueryFnData = unknown, TError = ErrorModel, TData = TQueryFnData>(
  queryKey: QueryKey,
  queryFn: QueryFunction<TQueryFnData>,
  options?: UseInfiniteQueryOptions<TQueryFnData, TError, TData>,
): UseInfiniteQueryResult<TData, TError> {
  return useOriginalInfiniteQuery(queryKey, queryFn, {
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retry: false,
    ...options,
  });
}
