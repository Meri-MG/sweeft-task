import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CardsItem.module.css';

const CardsItem = ({ cardData }) => {
  return (
    <>
      <Link to={`/user/${cardData.id}`}>
        <li key={cardData.id} className={styles.listItem}>
          <div>
            <img
              src={cardData.imageUrl}
              alt={`${cardData.name} ${cardData.lastName}`}
            />
          </div>
          <div>
            <h2>{`${cardData.prefix} ${cardData.name} ${cardData.lastName}`}</h2>
            <p>{cardData.title}</p>
          </div>
        </li>
      </Link>
    </>
  );
};

export default CardsItem;
