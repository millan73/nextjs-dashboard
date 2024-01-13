import { render, screen, getByRole, within } from '@testing-library/react';
import Page from '@/app/dashboard/blog/page';

test('Vi testar att Blogsidan har en rubrik ', () => {
  render(<Page />);

  screen.getByRole('heading', {
    name: 'Här kan du blogga om dina fakturor',
  });
});
