import { FetchInfiniteQueryOptions, InfiniteData, QueryClient, QueryFunction, QueryKey } from 'react-query';

export function fetchInfiniteQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  queryClient: QueryClient,
  queryKey: TQueryKey,
  queryFn: QueryFunction<TQueryFnData, TQueryKey>,
  options?: FetchInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
): Promise<InfiniteData<TData>> | null {
  return queryClient.fetchInfiniteQuery(queryKey, queryFn, options);
}
