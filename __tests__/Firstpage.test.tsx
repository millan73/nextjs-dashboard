import { render, screen, within } from '@testing-library/react';
import Page from '@/app/page';

test('Första sidan renderar en rubrik inuti main ', () => {
  render(<Page />);

  const main = screen.getByRole('main');

  within(main).getByRole('heading'),
    {
      name: 'Detta är en rubrik',
    };
});
