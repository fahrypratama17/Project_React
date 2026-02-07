import GameHeader from "./components/GameHeader.jsx";
import Card from "./components/Card.jsx";
import { useEffect, useState } from "react";

const cardValue = [
  "🍓",
  "🥭",
  "🍍",
  "🍇",
  "🍊",
  "🍎",
  "🍐",
  "🫐",
  "🍇",
  "🍎",
  "🥭",
  "🍓",
  "🍍",
  "🫐",
  "🍊",
  "🍐",
];

const App = () => {
  const [cards, setCards] = useState([]);

  const initializeGame = () => {
    // Shuffle the cards

    const finalCards = cardValue.map((value, index) => ({
      id: index,
      value,
      isFlipped: false,
      isMatched: false,
    }));

    setCards(finalCards);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  return (
    <div className="app">
      <GameHeader score={3} moves={2} />

      <div className="cards-grid">
        {cards.map((item) => (
          <Card card={item} />
        ))}
      </div>
    </div>
  );
};

export default App;
