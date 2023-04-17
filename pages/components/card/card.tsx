import React from 'react';

interface CardProps {
//   key: number;
  image: string;
  title: string;
}

const Card = ({  image, title }: CardProps) => {
  return (
    <div className="bg-white rounded-md shadow-md">
      <img src={image} alt={title} />
      <h3 className="text-lg font-medium p-4">{title}</h3>
    </div>
  );
};

export default Card;
