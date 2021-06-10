import React, { FC, useState, useRef } from 'react';
import { useQuery } from 'react-query';
import { Title, ContentWrapper } from '@common/components';
import { Align } from '@common/components/title/title.enum';
import { StyledContainer, StyledInput } from './landing.styled';
import { Person } from './landing.types';
import fetchUsersList from './landing.api';
import ListPeople from './list-people';

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
