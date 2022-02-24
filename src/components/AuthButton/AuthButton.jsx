import { useUser } from '../../context/UserContext';
import { Link } from 'react-router-dom';
import { signOutUser } from '../../services/users';

export default function AuthButton() {
  const { user, setUser } = useUser();
  const button =
    'inline-block text-sm px-4 py-2 leading-none border rounded text-slate-200 border-slate-200 hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0';

  return (
    <>
      {/* {user?.email ? (
        <button
          className={button}
          onClick={async () => {
            await signOutUser();
            setUser({});
          }}
        >
          Sign Out
        </button>
      ) : ( */}
      <Link to="/login" className={className}>
        <button className={button}>Sign In</button>
      </Link>
      {/* )} */}
    </>
  );
}
