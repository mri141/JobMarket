import React, { useState } from 'react';
import Card from './Card';

interface CardData {
  id: number;
  image: string;
  title: string;
}

interface CardSectionProps {
  title: string;
  subtitle: string;
  cards: CardData[];
}

const CardSection = ({ title, subtitle, cards }: CardSectionProps) => {
  const [rowsToShow, setRowsToShow] = useState(1);

  const handleShowMore = () => {
    setRowsToShow(rowsToShow + 1);
  };

  const handleCardsToShow = () => {
    const startIndex = (rowsToShow - 1);
    const endIndex = startIndex + 1;
    return cards.slice(startIndex, endIndex);

};
console.log(rowsToShow);
console.log(" what the fuck is happeniong handleCardsToShow");

  return (
    <section className="p-8">
      <h1 className="text-4xl font-bold">{title}</h1>
      <h2 className="text-xl font-medium">{subtitle}</h2>
      {Array.from({ length: rowsToShow }, (_, i) => {
        const cardsToShow = handleCardsToShow();
        return (
          <div
            key={i}
            className="grid gap-4"
            style={{
              gridTemplateColumns: 'repeat(1, 1fr)',
            }}
          >
            {cardsToShow.map((card) => (
              <Card key={card.id} image={card.image} title={card.title} />
            ))}
          </div>
        );
      })}
      <div className="text-center mt-4">
        {rowsToShow * 5 < cards.length && (
          <button
            className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md"
            onClick={handleShowMore}
          >
            Show More
          </button>
        )}
      </div>
    </section>
  );
};

export default CardSection;
