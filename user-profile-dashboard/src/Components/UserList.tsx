import React from 'react';
import { User } from '../types';

interface UserListProps {
  users: User[];
  onUserClick: (user: User) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onUserClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map(user => (
        <div
          key={user.id}
          className="bg-white rounded-lg shadow p-4 cursor-pointer hover:shadow-lg transition"
          onClick={() => onUserClick(user)}
        >
          <img
            src={`https://i.pravatar.cc/150?u=${user.id}`}
            alt={user.name}
            className="w-16 h-16 rounded-full mx-auto mb-2"
          />
          <h2 className="text-center font-semibold text-lg">{user.name}</h2>
          <p className="text-center text-sm text-gray-600">{user.email}</p>
            <p className="text-center text-gray-500">{user.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
