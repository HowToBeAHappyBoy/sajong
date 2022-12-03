import { rest } from 'msw';

import {
  mockGetWishItems,
  mockAddWishItems,
  mockUpdateWishItems,
  mockDeleteWishItems,
} from './handler';

export const WishItemHandler = [
  rest.get('http://apiapi.api/wish-list/:userId', mockGetWishItems),
  rest.post('http://apiapi.api/wish-list/:userId', mockAddWishItems),
  rest.put('http://apiapi.api/wish-list/:userId/:wishItemId', mockUpdateWishItems),
  rest.delete('http://apiapi.api/wish-list/:userId/:wishItemId', mockDeleteWishItems),
];
