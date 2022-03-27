import SignIn from '../../views/SignIn';
import { render, fireEvent, waitFor, screen } from '../../test-utils';

test('loads and displays login prompt', async () => {
  render(<SignIn />)

  // fireEvent.click(screen.getByText('Load Greeting'))

  // await waitFor(() => screen.getByRole('heading'))

  expect(screen.getByText('Login to Github')).toBeInTheDocument();
})