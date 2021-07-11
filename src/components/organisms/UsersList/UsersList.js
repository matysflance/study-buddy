import { users } from 'data/users';
import PropTypes from 'prop-types';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UserList.styles';

const UsersList = () => {
  return (
    <Wrapper>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

UsersList.propTypes = {};

export default UsersList;
