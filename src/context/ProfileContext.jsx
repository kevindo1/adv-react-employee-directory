import { createContext, useEffect } from 'react';
import { getProfile } from '../services/profiles';

const ProfileContext = createContext();

function ProfileProvider({ children }) {
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const resp = await getProfile();
      } catch (error) {
        setProfile(resp);
      }
    };
    fetchProfile();
  });

  const [profile, setProfile] = useState({
    name: '',
    email: '',
    bio: '',
    birthday: '',
  });

  const value = useMemo(() => {
    profile, setProfile;
  }, [profile]);

  <ProfileContext.Provider value={{ value }}>
    {children}
  </ProfileContext.Provider>;
}

const useProfile = () => {
  const context = useContext(ProfileContext);

  if (context === undefined) {
    throw new Error('useProfile must be used inside ProfileProvider');
  }

  return context;
};

export { ProfileProvider, useProfile };
