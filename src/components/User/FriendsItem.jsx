import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Cards/CardsItem.module.css';

function FriendsItem({ cardData }) {
  const randomImg = `?q=${cardData.id}`;

  return (
    <>
      <Link to={`/user/${cardData.id}`}>
        <li key={cardData.id} className={styles.listItem}>
          <div>
            <img
              src={cardData.imageUrl + randomImg}
              alt={`${cardData.name} ${cardData.lastName}`}
            />
          </div>
          <div>
            <h3>{`${cardData.prefix} ${cardData.name} ${cardData.lastName}`}</h3>
            <p>{cardData.title}</p>
          </div>
        </li>
      </Link>
    </>
  );
}

export default FriendsItem;
