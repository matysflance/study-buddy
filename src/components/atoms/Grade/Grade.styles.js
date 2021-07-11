import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.m};
  ${(props) => `
		${
      props.children < 6 &&
      `
			background: ${props.theme.colors.success};
		`
    }
		${
      props.children < 4 &&
      `
			background: ${props.theme.colors.warning};
		`
    }
		${
      props.children < 3 &&
      `
			background: ${props.theme.colors.error};
		`
    }
	`};
`;
