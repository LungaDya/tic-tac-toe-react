import React from "react";
import { CellStyle } from "./GameCell.Styled";

function GameCell({cellItem, index}) {
  return <CellStyle onClick={() => {console.log(cellItem, index)}}>{cellItem}</CellStyle>;
}

export default GameCell;
