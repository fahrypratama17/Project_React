const Card = ({ card, flip }) => {
  return (
    <div
      className={`card ${card.isFlipped ? "flipped" : ""} ${card.isMatched ? "matched" : ""}`}
      onClick={() => flip(card)}
    >
      <div className="card-front">?</div>
      <div className="card-back">{card.value}</div>
    </div>
  );
};

export default Card;
