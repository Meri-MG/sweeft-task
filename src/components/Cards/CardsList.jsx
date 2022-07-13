import React, { useState, useRef, useCallback } from 'react';
import useCardData from '../../hooks/useCardData';
import CardsItem from './CardsItem';
import styles from './CardsList.module.css';

const CardsList = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { userData, hasMore, loading, error } = useCardData(pageNumber);

  const observer = useRef();
  const lastCardElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <ul className={styles.cardsList}>
      {userData?.map((card, index) => {
        if (userData.length === index + 1) {
          return (
            <div ref={lastCardElementRef} key={card.id}>
              <CardsItem cardData={card} />
            </div>
          );
        } else {
          return <CardsItem cardData={card} key={card.id} />;
        }
      })}
      <div>{loading && 'Loading Users...'}</div>
      <div>{error && 'Error'}</div>
    </ul>
  );
};

export default CardsList;
