import React from 'react';
import { User } from '../types';

interface Props {
  user: User;
  onClick: () => void;
}

const UserCard: React.FC<Props> = ({ user, onClick }) => (
  <div onClick={onClick} className="cursor-pointer p-4 bg-white rounded-lg shadow hover:shadow-md bg-white rounded-2xl shadow-lg hover:shadow-4xl transition-all duration-300 p-6 cursor-pointer border border-gray-100">
    <img src={`https://i.pravatar.cc/150?u=${user.id}`} className="w-24 h-24 rounded-full mx-auto " />
    <h2 className="text-lg text-center mt-2">{user.name} </h2>
    <p className="text-center text-gray-500">{user.email}</p>
    <p className="text-center text-gray-500">{user.phone}</p>
  </div>
);

export default UserCard;
