import React, { FC, useState, useRef } from 'react';
import { useQuery } from 'react-query';
import { Title, ContentWrapper } from '@common/components';
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
import { Person } from './landing.types';
import fetchUsersList from './landing.api';

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
          <StyledItem key={`list-item-${id}`}>
            <StyledLp>{id}.</StyledLp> <StyledName>{name}</StyledName> <StyledUserName>@{username}</StyledUserName>
          </StyledItem>
        ))}
    </StyledList>
  );
};

const Landing: FC = () => {
  const [filter, setFilter] = useState<string>('');
  const filterRef = useRef<HTMLInputElement>(null);

  const { data, isError, isLoading, refetch } = useQuery<Person[], Error>(['fetchUsersList'], () => fetchUsersList());

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
      <ContentWrapper isError={isError} isLoading={isLoading} refetch={refetch}>
        <ListPeople filter={filter} people={data} />
      </ContentWrapper>
    </StyledContainer>
  );
};

export default Landing;
