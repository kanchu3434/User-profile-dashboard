import Modal from 'react-modal';
import { User } from '../types';

Modal.setAppElement('#root');

interface Props {
  user: User;
  onClose: () => void;
}

const UserModal: React.FC<Props> = ({ user, onClose }) => (
  <Modal isOpen={true} onRequestClose={onClose} className="bg-white p-6 max-w-md mx-auto mt-20 rounded shadow">
    <button onClick={onClose} className="float-right text-xl">×</button>
    <div className="text-center">
      <img src={user.picture.large} className="w-24 h-24 rounded-full mx-auto" />
      <h2 className="text-xl mt-2">{user.name.first} {user.name.last}</h2>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-gray-600">{user.phone}</p>
      <p className="mt-2">{user.location.street.number} {user.location.street.name}, {user.location.city}, {user.location.country}</p>
      <p>DOB: {new Date(user.dob.date).toLocaleDateString()}</p>
    </div>
  </Modal>
);

export default UserModal;
