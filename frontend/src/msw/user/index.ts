import { rest } from 'msw';

import { mockLogin } from './handler';

export const UserHandler = [rest.post('http://apiapi.api/sign-in/:userId', mockLogin)];
