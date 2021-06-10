import React, { FC } from 'react';

import { StyledList, StyledLp, StyledName, StyledUserName, StyledMessage } from './list-people.styled';
import { Person } from './landing.types';

type Props = {
  people?: Person[];
  filter: string;
};

const ListPeople: FC<Props> = ({ people, filter }) => {
  const list = people || [];

  return (
    <StyledList>
      {list
        .filter(({ username }) => username.indexOf(filter) !== -1)
        .map(({ id, name, username }) => (
          <li key={`list-item-${id}`}>
            <StyledLp>{`${id}.`}</StyledLp> <StyledName>{name}</StyledName>{' '}
            <StyledUserName>{`@${username}`}</StyledUserName>
          </li>
        ))}
      {list.length === 0 && <StyledMessage>there are no users</StyledMessage>}
    </StyledList>
  );
};

export default ListPeople;
