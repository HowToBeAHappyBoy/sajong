import { rest } from 'msw';

import {
  mockGetWishItems,
  mockAddWishItems,
  mockUpdateWishItems,
  mockDeleteWishItems,
} from './handler';

export const WishItemHandler = [
  rest.get('/wish-list/:userId', mockGetWishItems),
  rest.post('/wish-list/:userId', mockAddWishItems),
  rest.put('/wish-list/:userId', mockUpdateWishItems),
  rest.delete('/wish-list/:userId', mockDeleteWishItems),
];
