import { atom } from "recoil";

export const posState = atom({
    key: 'posState',
    default: 45,
});

export const scoreState = atom({
    key: 'score',
    default: 0,
});

export const heartState = atom({
    key: 'heartState',
    default: [],
});