import userEvent from '@testing-library/user-event';
import ContactFormula from '@/app/ui/contact/ContactFormula';
import { render, screen } from '@testing-library/react';

it('testa att knappen fungerar', async () => {
  const user = userEvent.setup();

  render(<ContactFormula />);

  await user.click(screen.getByRole('button', { name: 'Skicka meddelande' }));
});
