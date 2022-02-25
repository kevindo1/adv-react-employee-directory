import { UserProvider } from './context/UserContext';

test.skip('Should render app', () => {
  render(
    <UserProvider>
      <App />
    </UserProvider>
  );
});
