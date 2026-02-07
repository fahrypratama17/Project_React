import GameHeader from "./components/GameHeader.jsx";
import Card from "./components/Card.jsx";
import WinMessage from "./components/WinMessage.jsx";
import { useGameLogic } from "./hooks/use-gameLogic.js";
import { cardValue } from "./data/data.js";

const App = () => {
  const { cards, score, moves, initializeGame, isGameComplete, handleFlip } =
    useGameLogic(cardValue);

  return (
    <div className="app">
      <GameHeader score={score} moves={moves} onReset={initializeGame} />

      {isGameComplete && <WinMessage moves={moves} />}

      <div className="cards-grid">
        {cards.map((item) => (
          <Card card={item} flip={handleFlip} />
        ))}
      </div>
    </div>
  );
};

export default App;
