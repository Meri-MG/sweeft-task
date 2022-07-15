import React, { useState, useRef, useCallback } from 'react';
import useFriendsData from '../../hooks/useFriendsData';
import Loading from '../UI/Loading';
import FriendsItem from './FriendsItem';
import styles from '../Cards/CardsList.module.css';

function FriendsList({ cardId }) {
  const [pageNumber, setPageNumber] = useState(1);

  const { userData, hasMore, loading, error } = useFriendsData(
    cardId,
    pageNumber
  );
  console.log(userData, 'data');

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
    <>
      <div>{loading && <Loading />}</div>
      <div>{error && 'Error'}</div>
      <ul className={styles.cardsList}>
        {userData?.map((card, index) => {
          if (userData.length - 1 === index) {
            return (
              <div ref={lastCardElementRef} key={card.id}>
                <FriendsItem cardData={card} />
              </div>
            );
          } else {
            return <FriendsItem cardData={card} key={card.id} />;
          }
        })}
      </ul>
    </>
  );
}

export default FriendsList;
