import { Dispatch } from "react";
export interface Rect {
  users: User[];
}

export interface User {
  id: number;
  weeks: Week[];
}

export interface Week {
  week: number;
  state: number;
}

export interface RectProps {
  week: number;
  year: number;
  userid: number;
  state: number;
  offsetX: number;
  offsetY: number;
  index: number;
  dispatch: Dispatch<any>;
}

export interface InitProps {
  index: number;
  state: number;
}
