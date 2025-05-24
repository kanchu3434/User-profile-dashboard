import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from './types';
import UserList from './Components/UserList';
import UserModal from './Components/UserModal';
import Loader from './Components/Loader';
import SearchBar from './Components/SearchBar';

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
     .then(res => {
       setUsers(res.data);
setFilteredUsers(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load user data');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const filtered = users.filter(user =>
      `${user.name}`.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query)
    );
    setFilteredUsers(filtered);
  }, [searchQuery, users]);

  if (loading) return <Loader />;
  if (error) return <div className="text-red-500 text-center mt-10">{error}</div>;

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center py5  text-white h-15 ">User Profile Dashboard</h1>
      <SearchBar query={searchQuery} onChange={setSearchQuery} />
      <UserList users={filteredUsers} onUserClick={setSelectedUser} />
      {selectedUser && <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />}
    </div>
  );
};

export default App;
