import React, { FC, useState, useRef } from 'react';
import { Title } from '@common/components';
import { Align } from '@common/components/title/title.enum';
import {
  StyledContainer,
  StyledList,
  StyledItem,
  StyledLp,
  StyledName,
  StyledUserName,
  StyledInput,
} from './landing.styled';
import { data } from './landing.mock';

type Person = {
  id: number;
  name: string;
  username: string;
};

type Props = {
  people: Person[];
  filter: string;
};

const ListPeople: FC<Props> = ({ people, filter }) => (
  <StyledList>
    {people
      .filter(({ username }) => username.indexOf(filter) !== -1)
      .map(({ id, name, username }) => (
        <StyledItem key={`list-item-${id}`}>
          <StyledLp>{id}.</StyledLp> <StyledName>{name}</StyledName> <StyledUserName>@{username}</StyledUserName>
        </StyledItem>
      ))}
  </StyledList>
);

const Landing: FC = () => {
  const [filter, setFilter] = useState<string>('');
  const filterRef = useRef<HTMLInputElement>(null);

  const handleChangeFilter = (): void => {
    setFilter(filterRef?.current?.value || '');
  };

  return (
    <StyledContainer>
      <Title align={Align.center}>Users list</Title>
      <StyledInput
        name='filter'
        type='text'
        value={filter}
        onChange={handleChangeFilter}
        ref={filterRef}
        placeholder='Search by user name...'
      />
      <ListPeople filter={filter} people={data} />
    </StyledContainer>
  );
};

export default Landing;
