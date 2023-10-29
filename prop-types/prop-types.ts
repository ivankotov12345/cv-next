import { Dispatch, SetStateAction, RefObject } from 'react';

export type NavigationPropsType = {
    isOpened: boolean,
    setIsOpened: Dispatch<SetStateAction<boolean>>,
    burgerBtnRef: RefObject<HTMLButtonElement>,
};