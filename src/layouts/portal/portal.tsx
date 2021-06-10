import React, { FC } from 'react';

import { StyledMain } from './portal.styled';

const Portal: FC = ({ children }) => <StyledMain>{children}</StyledMain>;

export default Portal;
