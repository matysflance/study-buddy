import { users } from 'data/users';
import PropTypes from 'prop-types';
import UsersListItem from 'components/UsersListItem/UsersListItem';

const UsersList = () => {
  return (
    <div>
      <ul>
        {users.map((userData) => (
          <UsersListItem userData={userData} />
        ))}
      </ul>
    </div>
  );
};

UsersList.propTypes = {};

export default UsersList;
