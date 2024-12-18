'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import Loader from './components/Loader';
import UserHistory from './components/UserHistory';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
      .then(response => {
        const filteredUsers = response.data.slice(9);
        setUsers(filteredUsers);
        console.log(filteredUsers);
        
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  const handleSelectUser = user => {
    setSelectedUser(user);
    setHistory(prevHistory => {
      const updatedHistory = [user, ...prevHistory.filter(u => u.id !== user.id)].slice(0, 2);
      return updatedHistory;
    });
  };

  return (
    <div className="flex flex-row p-2 md:p-4 space-y-0 space-x-2 md:space-x-4 bg-teal-50">
      <div className="w-1/2">
        {loading ? <Loader /> : <UserList users={users} onSelectUser={handleSelectUser} />}
        {error && <p className="text-center text-red-500">{error}</p>}
      </div>
      <div className="w-1/2">
        <UserDetails user={selectedUser} />
        <UserHistory history={history} onSelectUser={handleSelectUser}/>
      </div>
    </div>
  );
};

export default App;
