import { User } from '../types';
import UserCard from './UserCard';

interface Props {
  users: User[];
  onUserClick: (user: User) => void;
}

const UserList: React.FC<Props> = ({ users, onUserClick }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {(users || []).map(user => (
      
      <UserCard key={user.email} user={user} onClick={() => onUserClick(user)} />
    ))}
  </div>
);

export default UserList;
