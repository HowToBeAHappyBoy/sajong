import { FetchInfiniteQueryOptions, QueryClient, QueryFunction, QueryKey } from 'react-query';

export function prefetchInfiniteQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  queryClient: QueryClient,
  queryKey: TQueryKey,
  queryFn: QueryFunction<TQueryFnData, TQueryKey>,
  options?: FetchInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
): Promise<void> | null {

  return queryClient.prefetchInfiniteQuery(queryKey, queryFn, options);
}
