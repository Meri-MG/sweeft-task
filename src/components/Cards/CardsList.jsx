import React from 'react';
import CardsItem from './CardsItem';
import styles from './CardsList.module.css';

const CardsList = (props) => {
  const { data } = props;
  console.log(data, 'props');

  return (
    <ul className={styles.cardsList}>
      {data?.map((card) => (
        <CardsItem cardData={card} key={card.id} />
      ))}
    </ul>
  );
};

export default CardsList;
