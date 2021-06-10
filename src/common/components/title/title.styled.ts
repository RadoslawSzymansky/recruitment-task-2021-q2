import styled from 'styled-components';
import { Props } from './title.types';

const StyledTitle = styled.h2<Props>`
  font-size: 3rem;
  font-weight: 600;
  line-height: 44px;
  color: ${({ theme }) => theme.colors.dark};
  display: flex;
  justify-content: ${({ align }) => align};
`;

export { StyledTitle };
