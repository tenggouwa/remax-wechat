import * as React from 'react';

interface IUserInfo {
  avatarUrl: string;
  nickName: string;
}

export interface ILoginResponse {
  detail: {
    userInfo: IUserInfo;
  };
}

type IUserTuple = [IUserInfo | undefined, (res: ILoginResponse) => void]

export default function useUserInfo(): IUserTuple {
  const [userInfo, setUserInfo] = React.useState<IUserInfo>();

  function login(response: ILoginResponse) {
    const { userInfo } = response.detail;

    setUserInfo(userInfo);
  }

  return [userInfo, login];
}
