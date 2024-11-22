import { render } from '@testing-library/react';
import DashboardPage from './page';

describe('Dashboard Page Snapshot Test', () => {
  it('matches the snapshot of multiple cards', () => {
    const { asFragment } = render(<DashboardPage />);

    // Expect the rendered output of all cards to match the stored snapshot
    expect(asFragment()).toMatchSnapshot();
  });
});
