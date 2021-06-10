import React from 'react';
import { cleanup } from '@testing-library/react';
import { setLogger } from 'react-query';
import { Title } from '@common/components';
import { render } from '../../__utils__/test-utils';

beforeAll(() => {
  setLogger({
    log: console.log,
    warn: console.warn,
    error: () => undefined,
  });
});

afterEach(cleanup);

describe('title', () => {
  it('render with correct data', async () => {
    const message = 'Test message';
    const { getByText } = render(<Title>{message}</Title>);

    expect(getByText(message)).toBeInTheDocument();
  });
});
