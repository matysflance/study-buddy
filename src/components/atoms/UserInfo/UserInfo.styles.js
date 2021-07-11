import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const StyledName = styled.p`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.l};
  margin: 0;
`;

export const StyledInfo = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: 0;
`;
