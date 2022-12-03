import { setupWorker } from 'msw';

import { UserHandler } from './user';
import { WishItemHandler } from './wishItem';

export const worker = setupWorker(...UserHandler, ...WishItemHandler);
