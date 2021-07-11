import { Wrapper, StyledName, StyledInfo } from './UserInfo.styles';

const UserInfo = ({ name, attendance }) => (
  <Wrapper>
    <StyledName>{name}</StyledName>
    <StyledInfo>Attendance: {attendance}</StyledInfo>
  </Wrapper>
);

export default UserInfo;
