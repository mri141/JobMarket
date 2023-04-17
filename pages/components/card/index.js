import React from 'react';
import Card from '../card/card.tsx';

const data = [
  {
    id: 1,
    image: 'https://source.unsplash.com/random/800x600',
    title: 'Card 1',
  },
  {
    id: 2,
    image: 'https://source.unsplash.com/random/800x600',
    title: 'Card 2',
  },
  {
    id: 3,
    image: 'https://source.unsplash.com/random/800x600',
    title: 'Card 3',
  },
  {
    id: 4,
    image: 'https://source.unsplash.com/random/800x600',
    title: 'Card 4',
  },
  {
    id: 5,
    image: 'https://source.unsplash.com/random/800x600',
    title: 'Card 5',
  },
  {
    id: 6,
    image: 'https://source.unsplash.com/random/800x600',
    title: 'Card 6',
  },
  {
    id: 7,
    image: 'https://source.unsplash.com/random/800x600',
    title: 'Card 7',
  },
];

const Index = () => {
  return (
    <div className="grid grid-cols-5 gap-4 p-4">
      {data.map((item) => (
        <Card key={item.id} image={item.image} title={item.title} />
      ))}
    </div>
  );
};

export default Index;
