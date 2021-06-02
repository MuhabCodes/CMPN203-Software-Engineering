import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import FollowersCard from './FollowersCard';
import './FollowersPage.css';

function FollowersPage() {
  const { userid } = useParams();
  const [followers, setfollowers] = useState([]);
  useEffect(() => {
    axios.get(`followers?userId=${userid}`)
      .then((items) => {
        setfollowers(items.data);
      });
  }, []);
  console.log(followers);
  return (
    <div>
      <FollowersCard followers={followers} />
    </div>
  );
}

export default FollowersPage;
