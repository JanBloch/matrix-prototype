import { User, Week } from "../../redux/types/rect";

export const getStatebyUserAndWeek = (
  state: User[],
  userid: number,
  week: number
) => {
  let user = getUserById(state, userid);
  if (user.weeks.length > 0) {
    return getStateByWeek(user.weeks, week);
  }
  return -1;
};

export const getStateByWeek = (state: Week[], week: number) => {
  let status: number = -1;
  state.forEach((loopweek) => {
    if (loopweek.week === week) status = loopweek.state;
  });
  return status;
};

export const getUserById = (state: User[], userid: number) => {
  let user: User = { id: -1, weeks: [] };
  state.forEach((loopuser) => {
    if (loopuser.id === userid) user = loopuser;
  });
  return user;
};

export const setStateForWeek = (
  state: Week[],
  week: number,
  status: number
) => {
  for (let i = 0; i < state.length; i++) {
    let tmpweek = state[i];
    if (tmpweek.week === week) {
      tmpweek.state = status;
      state[i] = tmpweek;
    }
  }
  return state;
};

export const getWeeksByUser = (state: User[], userid: number) => {
  let weeks: Week[] = [];
  state.forEach((user) => {
    if (user.id === userid) weeks = user.weeks;
  });
  return weeks;
};

export const setWeeksForUser = (
  state: User[],
  userid: number,
  weeks: Week[]
) => {
  state.forEach((user) => {
    if (user.id === userid) user.weeks = weeks;
  });
  return state;
};
