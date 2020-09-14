import React from "react";
import { Label, Layer, Line, Stage, Text } from "react-konva";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/reducers/rect";
import { User } from "../../redux/types/rect";
import { Rect } from "../molecules/rect";

export const Matrix = () => {
  const rects: Array<JSX.Element> = [];
  const dispatch = useDispatch();
  const storeRects = useSelector(getAllUsers);
  const currentWeek = "03";
  let y = 0;
  let loopweek = 0;
  storeRects[0].weeks.forEach((week) => {
    let weekNumber = week.week.toString().substr(-2);
    rects.push(
      <Label
        offsetX={loopweek === 0 ? -20 : loopweek * -90 + -20}
        key={"label_kw_" + week.week}
      >
        <Text
          width={50}
          align="center"
          text={"KW " + weekNumber}
          fontFamily="Arial"
          fontSize={15}
          fontStyle={weekNumber === currentWeek ? "bold" : "normal"}
          key={"text_kw_" + week.week}
        />
      </Label>
    );
    loopweek++;
  });
  rects.push(
    <Line
      points={[0, 20, 10 * 90, 20]}
      stroke={"#DDD"}
      key={"heading_line"}
      strokeWidth={0.7}
    ></Line>
  );
  storeRects.forEach((user: User) => {
    let offsetx = 0;
    user.weeks.forEach((week) => {
      rects.push(
        <Rect
          userid={user.id}
          week={week.week}
          year={Math.floor(week.week / 100)}
          state={week.state}
          offsetX={offsetx}
          offsetY={y}
          index={user.id * 1000000 + week.week}
          key={"matrix_rect_" + user.id + "_" + week.week}
          dispatch={dispatch}
        ></Rect>
      );
      offsetx++;
    });

    rects.push(
      <Line
        points={[0, y * 90 + 20, 10 * 90, y * 90 + 20]}
        stroke={"#DDD"}
        key={y + "_line"}
        strokeWidth={0.7}
      ></Line>
    );
    y++;
  });
  return (
    <Stage
      width={90 * 10}
      height={90 * 100 + 40}
      style={{
        marginLeft: (window.innerWidth - 90 * 10) / 2 + "px",
        marginTop: "40px",
      }}
    >
      <Layer>{rects}</Layer>
    </Stage>
  );
};
