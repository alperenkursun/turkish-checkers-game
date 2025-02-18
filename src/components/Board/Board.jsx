import BoardSide from "../BoardSide/BoardSide";
import Letters from "../Letters/Letters";
import Numbers from "../Numbers/Numbers";

function Board() {
  return (
    <div className="board">
      {Array.from({ length: 64 }).map((_, index) => (
        <div key={index} className="cell">
          {index >= 8 && index <= 23 && (
            <div className="checker dark in-board"></div>
          )}
          {index >= 40 && index <= 55 && (
            <div className="checker light in-board"></div>
          )}
        </div>
      ))}
      <Numbers />
      <Letters />
      <BoardSide />
    </div>
  );
}

export default Board;
