import React, { FC } from 'react';
import { StyledSpinner, StyledErrorOverlay, StyledRefresh } from './content-wrapper.styled';

type Props = {
  isError: boolean;
  isLoading: boolean;
  refetch: () => void;
};

const ContentWrapper: FC<Props> = ({ children, isError, isLoading, refetch }) => (
  <>
    {isLoading && <StyledSpinner />}
    {!isLoading && !isError && children}
    {isError && (
      <StyledErrorOverlay>
        Can&apos;t show data
        {!isLoading && !isError && children}
        <StyledRefresh onClick={refetch}>Try to refresh</StyledRefresh>
      </StyledErrorOverlay>
    )}
  </>
);

export default ContentWrapper;
