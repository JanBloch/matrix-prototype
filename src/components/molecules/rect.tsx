import React from "react";
import { Rect as RectKonva } from "react-konva";
import { incrementState } from "../../redux/reducers/rect";
import { RectProps } from "../../redux/types/rect";
export const Rect = (props: RectProps) => {
  const colors = ["#555555", "#00ff00", "#ffa500", "#ff0000"];
  return (
    <RectKonva
      id={props.year + "_" + props.week}
      fill={colors[props.state]}
      width={50}
      height={50}
      x={props.offsetX > 0 ? props.offsetX * 90 + 20 : 20}
      y={props.offsetY > 0 ? props.offsetY * 90 + 40 : 40}
      key={props.year + "_" + props.week}
      onClick={() => {
        props.dispatch(
          incrementState({
            userid: props.userid,
            yearweek: props.week,
          })
        );
      }}
    ></RectKonva>
  );
};
