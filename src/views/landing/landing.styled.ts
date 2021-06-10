import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const StyledInput = styled.input`
  padding: 0.5rem 0.75rem;
  margin: 0 auto;
  max-width: 300px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.dark};
`;

export { StyledContainer, StyledInput };
