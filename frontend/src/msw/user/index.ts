import { rest } from 'msw';

import { mockLogin } from './handler';

export const UserHandler = [rest.post('/sign-in/:userId', mockLogin)];
