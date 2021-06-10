import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import { setLogger } from 'react-query';
import ListPeople from '@views/landing/list-people';
import { data } from '@views/landing/landing.mock';
import { Person } from '@views/landing/landing.types';
import { render } from '../../../__utils__/test-utils';

beforeAll(() => {
  setLogger({
    log: console.log,
    warn: console.warn,
    error: () => undefined,
  });
});

afterEach(cleanup);

describe('list people', () => {
  it('render with correct data', async () => {
    const { getByText } = render(<ListPeople filter='' people={data as Person[]} />);

    expect(getByText(`${data[0].id}.`)).toBeInTheDocument();
    expect(getByText(data[0].name)).toBeInTheDocument();
    expect(getByText(`@${data[0].username}`)).toBeInTheDocument();

    expect(getByText(`${data[1].id}.`)).toBeInTheDocument();
    expect(getByText(data[1].name)).toBeInTheDocument();
    expect(getByText(`@${data[1].username}`)).toBeInTheDocument();

    expect(getByText(`${data[2].id}.`)).toBeInTheDocument();
    expect(getByText(data[2].name)).toBeInTheDocument();
    expect(getByText(`@${data[2].username}`)).toBeInTheDocument();
  });
  it('render with empty data', async () => {
    const { getByText } = render(<ListPeople filter='' people={[]} />);

    expect(getByText('there are no users')).toBeInTheDocument();
  });
  it('render with incorrect data', async () => {
    const { getByText } = render(<ListPeople filter='' people={undefined} />);

    expect(getByText('there are no users')).toBeInTheDocument();
  });
  it('render data with filter', async () => {
    const { getByText } = render(<ListPeople filter='Bret' people={data as Person[]} />);

    expect(getByText(`${data[0].id}.`)).toBeInTheDocument();
    expect(getByText(data[0].name)).toBeInTheDocument();
    expect(getByText(`@${data[0].username}`)).toBeInTheDocument();

    expect(screen.queryByText(`${data[1].id}.`)).toBeNull();
    expect(screen.queryByText(data[1].name)).toBeNull();
    expect(screen.queryByText(`@${data[1].username}`)).toBeNull();

    expect(screen.queryByText(`${data[2].id}.`)).toBeNull();
    expect(screen.queryByText(data[2].name)).toBeNull();
    expect(screen.queryByText(`@${data[2].username}`)).toBeNull();
  });
});
