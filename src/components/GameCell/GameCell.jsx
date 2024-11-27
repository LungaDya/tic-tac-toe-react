import React, { useContext } from "react";
import { CellStyle } from "./GameCell.Styled";
import { GameContext } from "../contexts/GameContext";
import { checkForWinner } from "../utils/GameUtils";
import { ReactComponent as IconX } from "../assets/svgs/icon-x.svg";
import { ReactComponent as XIconOutline } from "../assets/svgs/icon-x-outline.svg";
import { ReactComponent as IconO } from "../assets/svgs/icon-o.svg";
import { ReactComponent as OIconOutline } from "../assets/svgs/icon-o-outline.svg";

function GameCell({ cellItem, index }) {
  const { updateBoard, game } = useContext(GameContext);

  const cellClickHandler = () => {
    updateBoard(index);
    checkForWinner(game.board);
  };

  if (cellItem === "x") {
    return <IconX />;
  } else if (cellItem === "o") {
    return <IconO />;
  }
  return (<CellStyle onClick={cellClickHandler}>{game.turn === "x" ? (<XIconOutline />) : (<OIconOutline />)}</CellStyle>);
}

export default GameCell;
