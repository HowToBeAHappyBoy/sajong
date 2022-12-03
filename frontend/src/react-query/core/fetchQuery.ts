import { FetchQueryOptions, QueryClient, QueryFunction, QueryKey } from 'react-query';

export function fetchQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  queryClient: QueryClient,
  queryKey: TQueryKey,
  queryFn: QueryFunction<TQueryFnData, TQueryKey>,
  options?: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
): Promise<TData> | null {

  return queryClient.fetchQuery(queryKey, queryFn, options);
}
