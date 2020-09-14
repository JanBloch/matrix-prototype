import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getStatebyUserAndWeek,
  getWeeksByUser,
  setStateForWeek,
  setWeeksForUser,
} from "../../components/utils/userlookup";
import { RootState } from "../types";
import { Rect as RectInterface, User, Week } from "../types/rect";

const generatePlaceholder = () => {
  const users: User[] = [];
  for (let i = 1; i <= 100; i++) {
    const weeks: Week[] = [];
    for (let w = 1; w <= 10; w++) {
      weeks.push({
        week: 2020 * 100 + w,
        state: Math.floor(Math.random() * 4),
      });
    }
    users.push({ id: i, weeks: weeks });
  }
  return users;
};

const initialState: RectInterface = {
  users: generatePlaceholder(),
};
const rectSlice = createSlice({
  name: "rectSlice",
  initialState: initialState,
  reducers: {
    incrementState: (
      state: RectInterface,
      action: PayloadAction<{ userid: number; yearweek: number }>
    ) => {
      let rect = getStatebyUserAndWeek(
        state.users,
        action.payload.userid,
        action.payload.yearweek
      );
      if (rect === -1) return;
      if (rect > -1) rect += 1;
      if (rect === 4) rect = 0;
      let weeks = getWeeksByUser(state.users, action.payload.userid);
      state.users = setWeeksForUser(
        state.users,
        action.payload.userid,
        setStateForWeek(weeks, action.payload.yearweek, rect)
      );
    },
  },
});
export const { incrementState } = rectSlice.actions;
export const rectReducer = rectSlice.reducer;
export const getAllUsers = (state: RootState) => {
  return state.rectReducer.users;
};
