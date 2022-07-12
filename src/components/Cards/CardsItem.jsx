import React from 'react';
import styles from './CardsItem.module.css';

const CardsItem = (props) => {
  const card = props.cardData;
  return (
    <li key={card.id} className={styles.listItem}>
      <div>
        <img src={card.imageUrl} alt={`${card.name} ${card.lastName}`} />
      </div>
      <div>
        <h2>{`${card.prefix} ${card.name} ${card.lastName}`}</h2>
        <p>{card.title}</p>
      </div>
    </li>
  );
};

export default CardsItem;
