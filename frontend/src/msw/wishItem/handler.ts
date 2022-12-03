import { MOCK_WISH_ITEMS } from '../data';
import type { Props } from '../type';

export const mockGetWishItems: Props = (req, res, ctx) => res(ctx.json(MOCK_WISH_ITEMS));

export const mockGetWishItem: Props = (req, res, ctx) => {
    const id = req.params.wishItemId as string;
    const found = MOCK_WISH_ITEMS.find(item => item.id.toString() === id);
    return res(ctx.json(found));
};

export const mockAddWishItems: Props = (req, res, ctx) => res(ctx.json(null));

export const mockUpdateWishItems: Props = (req, res, ctx) => res(ctx.json(null));

export const mockDeleteWishItems: Props = (req, res, ctx) => res(ctx.json(null));
