import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import Grade from 'components/atoms/Grade/Grade';
import UserInfo from 'components/atoms/UserInfo/UserInfo';
import { Wrapper } from './UserListItem.styles';

const UsersListItem = ({ userData: { name, average, attendance = '0%' } }) => {
  return (
    <Wrapper>
      <Grade grade={average} />
      <UserInfo name={name} attendance={attendance} />
      <Button />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
