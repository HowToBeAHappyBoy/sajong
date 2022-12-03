import { rest } from 'msw';

import {
  mockGetWishItems,
  mockAddWishItems,
  mockUpdateWishItems,
  mockDeleteWishItems,
  mockGetWishItem
} from './handler';

export const WishItemHandler = [
  rest.get('http://apiapi.api/wish-list/:userId', mockGetWishItems),
  rest.post('http://apiapi.api/wish-list/:userId', mockAddWishItems),
  rest.get(`http://apiapi.api/wish-list/:wishItemId/detail`, mockGetWishItem),
  rest.put('http://apiapi.api/wish-list/:userId/:wishItemId', mockUpdateWishItems),
  rest.delete('http://apiapi.api/wish-list/:userId/:wishItemId', mockDeleteWishItems),
];
