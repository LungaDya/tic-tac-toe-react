import { createContext, useState } from "react";

export const GameContext = createContext({});

export const GameContextProvider = (props) => {
  const [game, setGame] = useState({
    board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    player1: {
      choice: "x",
      name: "Lunga",
    },
    player2: {
      choice: "o",
      name: "Vuyo",
    },
    turn: "x",
  });

  const updateBoard = (index) => {
    let updatedBoard = game.board;
    updatedBoard[index] = game.turn;
    setGame({
      ...game,
      board: updatedBoard,
      turn: game.turn === "x" ? "0" : "x",
    });
  };

  return (
    <GameContext.Provider
      value={{
        game,
        updateBoard,
      }}
    >
      {props.childern}
    </GameContext.Provider>
  );
};
