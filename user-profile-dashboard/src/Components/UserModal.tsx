import React from 'react';
import { User } from '../types';

interface UserModalProps {
  user: User;
  onClose: () => void;
}

const UserModal: React.FC<UserModalProps> = ({ user, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          ✕
        </button>
        <div className="text-center">
          <img
            src={`https://i.pravatar.cc/150?u=${user.id}`}
            alt={user.name}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
          <p className="text-sm text-gray-700 mb-1">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="text-sm text-gray-700 mb-1">
            <strong>Phone:</strong> {user.phone}
          </p>
          <p className="text-sm text-gray-700 mb-1">
            <strong>Website:</strong> {user.website}
          </p>
          <p className="text-sm text-gray-700 mb-1">
            <strong>Company:</strong> {user.company.name}
          </p>
          <p className="text-sm text-gray-700">
            <strong>Address:</strong> {user.address.street}, {user.address.city}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
