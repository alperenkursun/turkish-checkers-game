function BoardSide() {
  return (
    <div className="board-side">
      <div className="board-side-item">
        <div className="checker dark">20</div>
      </div>
      <div className="board-side-item">
        <div className="checker light">20</div>
        {/* <div className="move"></div> */}
        {/* <div className="checker light king">👑</div> */}
      </div>
    </div>
  );
}

export default BoardSide;
