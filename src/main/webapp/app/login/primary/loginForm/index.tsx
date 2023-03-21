import { createContext, useState, useMemo, useCallback } from 'react';
import { Button } from '@nextui-org/react';

import LoginModal from '@/login/primary/loginModal';

export const UserInfoContext = createContext<UserInfoContextType | Record<string, never>>({});

const LoginForm = () => {
  const [isOpen, setOpen] = useState(false);
  const [username, setUsername] = useState<string>('');
  const [token, setToken] = useState<string>('');

  const userInfoContextValues = useMemo(
    () => ({
      setUsername,
      setToken,
    }),
    []
  );

  const onPressLoginButton = useCallback(() => setOpen(true), []);

  const onPressLogoutButton = useCallback(() => setToken(''), []);

  const onCloseModal = useCallback(() => setOpen(false), []);

  return (
    <div>
      {!token ?
        (
          <Button data-testid="login-button" css={{ backgroundColor: '$blue700' }} auto shadow onPress={onPressLoginButton}>
            Log in
          </Button>
        )
      :
        (
          <>
            <p>
              Welcome <strong>{username}</strong> !
            </p>
            <Button css={{ backgroundColor: '$blue700' }} size="sm" shadow onPress={onPressLogoutButton}>
              Log out
            </Button>
          </>
        )
      }
      <UserInfoContext.Provider value={userInfoContextValues}>
        <LoginModal open={isOpen} onClose={onCloseModal} />
      </UserInfoContext.Provider>
    </div>
  );
};

export default LoginForm;
