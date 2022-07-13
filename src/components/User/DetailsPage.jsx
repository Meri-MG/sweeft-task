import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardsList from '../Cards/CardsList';
// import FriendsList from './FriendsList';

const DetailsPage = () => {
  const [userDetails, setUserDetails] = useState({});
  const [userFriends, setUserFriends] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`
    )
      .then((response) => response.json())
      .then((data) => setUserDetails(data));
  }, [id]);

  useEffect(() => {
    fetch(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends/1/20`
    )
      .then((response) => response.json())
      .then((data) => setUserFriends(data));
  }, []);
  console.log(userDetails, 'details');
  console.log(userFriends, 'friends data');

  return (
    <>
      <div>
        <div>
          <img
            src={userDetails.imageUrl}
            alt={`${userDetails.name} ${userDetails.lastName}`}
          />
        </div>
        <fieldset>
          <legend>Info</legend>
          <h3>{`${userDetails.prefix} ${userDetails.name} ${userDetails.lastName}`}</h3>
          <i>{userDetails.title}</i>
          <p>
            <span>Email:</span>
            {userDetails.email}
          </p>
          <p>
            <span>IP Address:</span>
            {userDetails.ip}
          </p>
          <p>
            <span>IP Address:</span>
            {userDetails.ip}
          </p>
          <p>
            <span>Job Area:</span>
            {userDetails.jobArea}
          </p>
          <p>
            <span>Job Type:</span>
            {userDetails.jobType}
          </p>
        </fieldset>
        <fieldset>
          <legend>Address</legend>
          <h3>{`${userDetails.company?.name} ${userDetails.company?.suffix}`}</h3>
          <p>
            <span>City:</span>
            {userDetails.address?.city}
          </p>
          <p>
            <span>Country:</span>
            {userDetails.address?.country}
          </p>
          <p>
            <span>State:</span>
            {userDetails.address?.state}
          </p>
          <p>
            <span>Street Address:</span>
            {userDetails.address?.streetAddress}
          </p>
          <p>
            <span>ZIP:</span>
            {userDetails.address?.zipCode}
          </p>
        </fieldset>
      </div>
      <div>Pagination</div>
      <h2>Friends:</h2>
      <CardsList data={userFriends?.list} />
    </>
  );
};

export default DetailsPage;
