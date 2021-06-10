import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const StyledList = styled.ul`
  padding: 0;
  list-style: none;
  margin: 2rem auto 0 auto;
  max-width: 400px;
  width: 100%;
`;

const StyledItem = styled.li``;

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

const StyledInput = styled.input`
  padding: 0.5rem 0.75rem;
  margin: 0 auto;
  max-width: 300px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.dark};
`;

export { StyledContainer, StyledList, StyledItem, StyledLp, StyledName, StyledUserName, StyledInput };
