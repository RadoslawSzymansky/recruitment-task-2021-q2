import styled from 'styled-components';

const StyledList = styled.ul`
  padding: 0;
  list-style: none;
  margin: 2rem auto 0 auto;
  max-width: 400px;
  width: 100%;
`;

const StyledLp = styled.span`
  color: ${({ theme }) => theme.colors.grey300};
  font-size: 1rem;
`;

const StyledName = styled.span`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 1.25rem;
`;

const StyledUserName = styled.span`
  color: ${({ theme }) => theme.colors.grey300};
  font-size: 1rem;
`;

const StyledMessage = styled.p`
  text-align: center;
`;

export { StyledList, StyledLp, StyledName, StyledUserName, StyledMessage };
