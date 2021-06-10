import React, { FC } from 'react';
import { Align } from './title.enum';
import { StyledTitle } from './title.styled';
import { Props } from './title.types';

const Title: FC<Props> = ({ align = Align.start, children }) => <StyledTitle align={align}>{children}</StyledTitle>;

export default Title;
