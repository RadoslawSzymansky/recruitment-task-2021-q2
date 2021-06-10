import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import { setLogger } from 'react-query';
import { ContentWrapper } from '@common/components';
import { render } from '../../__utils__/test-utils';

beforeAll(() => {
  setLogger({
    log: console.log,
    warn: console.warn,
    error: () => undefined,
  });
});

afterEach(cleanup);

describe('content wrapper', () => {
  it('render data isLoading', async () => {
    const message = 'children';
    render(
      <ContentWrapper isError={false} isLoading refetch={() => true}>
        {message}
      </ContentWrapper>
    );

    expect(screen.queryByText(message)).toBeNull();
  });
  it('render data isError', async () => {
    const message = 'children';
    const { getByText } = render(
      <ContentWrapper isError isLoading={false} refetch={() => true}>
        {message}
      </ContentWrapper>
    );

    expect(getByText('Try to refresh')).toBeInTheDocument();
    expect(screen.queryByText(message)).toBeNull();
  });
  it('render data !isError !isLoading', async () => {
    const message = 'children';
    const { getByText } = render(
      <ContentWrapper isError={false} isLoading={false} refetch={() => true}>
        {message}
      </ContentWrapper>
    );

    expect(getByText(message)).toBeInTheDocument();
    expect(screen.queryByText('Try to refresh')).toBeNull();
  });
});
