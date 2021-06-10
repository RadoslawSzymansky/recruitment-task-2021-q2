import React from 'react';
import { waitFor, cleanup, screen } from '@testing-library/react';
import axios from 'axios';
import { setLogger } from 'react-query';
import Landing from '@views/landing/landing';
import { data } from '@views/landing/landing.mock';
import { Person } from '@views/landing/landing.types';
import { render } from '../../../__utils__/test-utils';

const mockedAxios = axios as jest.Mocked<typeof axios>;

beforeAll(() => {
  setLogger({
    log: console.log,
    warn: console.warn,
    error: () => undefined,
  });
});

afterEach(cleanup);

describe('landing', () => {
  it('render with correct data', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: data as Person[] });

    render(<Landing />);

    await waitFor(
      () => {
        const refresh = screen.queryByText('Try to refresh');
        expect(refresh).toBeNull();
      },
      { timeout: 2000 }
    );
  });
  it('render with incorrect data', async () => {
    mockedAxios.get.mockRejectedValueOnce({});

    render(<Landing />);

    await waitFor(
      () => {
        const refresh = screen.queryByText('Try to refresh');
        expect(refresh).toBeTruthy();
      },
      { timeout: 2000 }
    );
  });
});
