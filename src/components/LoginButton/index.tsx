import * as React from 'react';
import { Button } from 'remax/wechat';
import { ILoginResponse } from '@/hooks/useUserInfo';
import './index.css';

interface IProps {
  login: (res: ILoginResponse) => void,
  children: React.ReactChild
}

const LoginButton = ({ login, children }: IProps) => {
  return (
    <Button
      className="login-button"
      hoverClassName="none"
      openType="getUserInfo"
      onGetUserInfo={login}
    >
      {children}
    </Button>
  );
};

export default LoginButton;
