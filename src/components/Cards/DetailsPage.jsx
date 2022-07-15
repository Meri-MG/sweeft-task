import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styles from './DetailsPage.module.css';
import FriendsList from '../User/FriendsList';

const DetailsPage = () => {
  const [userDetails, setUserDetails] = useState({});
  const [history, setHistory] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    fetch(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`
    )
      .then((response) => response.json())
      .then((res) => {
        setUserDetails(res);
        const userName = `${res.prefix} ${res.name} ${res.lastName}`;

        setHistory((previous) => {
          if (previous.some((user) => user.id === id)) {
            return previous;
          }
          return [...previous, { userName, id }];
        });
      });
  }, [id]);

  const randomImg = `?q=${userDetails.id}`;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <img
            className={styles.img}
            src={userDetails.imageUrl + randomImg}
            alt={`${userDetails.name} ${userDetails.lastName}`}
          />
        </div>
        <fieldset className={[styles.fieldset, styles.one].join(' ')}>
          <legend>Info</legend>
          <h3>{`${userDetails.prefix} ${userDetails.name} ${userDetails.lastName}`}</h3>
          <h4>
            <i>{userDetails.title}</i>
          </h4>
          <p>
            <span>Email</span>:{userDetails.email}
          </p>
          <p>
            <span>IP Address</span>:{userDetails.ip}
          </p>
          <p>
            <span>IP Address</span>:{userDetails.ip}
          </p>
          <p>
            <span>Job Area</span>:{userDetails.jobArea}
          </p>
          <p>
            <span>Job Type</span>:{userDetails.jobType}
          </p>
        </fieldset>
        <fieldset className={[styles.fieldset, styles.two].join(' ')}>
          <legend>Address</legend>
          <h3>{`${userDetails.company?.name} ${userDetails.company?.suffix}`}</h3>
          <p>
            <span>City</span>:{userDetails.address?.city}
          </p>
          <p>
            <span>Country</span>:{userDetails.address?.country}
          </p>
          <p>
            <span>State</span>:{userDetails.address?.state}
          </p>
          <p>
            <span>Street Address</span>:{userDetails.address?.streetAddress}
          </p>
          <p>
            <span>ZIP</span>:{userDetails.address?.zipCode}
          </p>
        </fieldset>
      </div>
      <div className={styles.history}>
        {history.map((user, index) => {
          return (
            <div key={user.id}>
              <Link to={`/user/${user.id}`} className={styles.links}>
                {user.userName}
              </Link>
              {history.length - 1 !== index && (
                <i className={styles.arrow} id={styles.arrow}>
                  {'>'}
                </i>
              )}
            </div>
          );
        })}
      </div>
      <h2>Friends:</h2>
      <FriendsList cardId={id} />
    </div>
  );
};

export default DetailsPage;
