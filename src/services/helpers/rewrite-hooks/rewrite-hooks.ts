import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../store";
export const useMyDispatch = () => useDispatch<AppDispatch>();
export const useMySelector: TypedUseSelectorHook<RootState> = useSelector;
