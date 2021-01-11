import * as React from 'react';
import {
  View,
  Text,
  Image,
  navigateTo,
} from 'remax/wechat';
import useUserInfo from '@/hooks/useUserInfo';
import LoginButton from '@/components/LoginButton';
import logo from '@/assets/logo.png';
import './index.css';

const IndexPage = () => {
  const [user, login] = useUserInfo();

  const handleAdd = () => {
    navigateTo({ url: '../new/index' });
  };

  return (
    <View className="page-todos">
      <View className="user">
        <LoginButton login={login}>
          <Image className="avatar" src={user ? user.avatar : logo} />
        </LoginButton>
        <View className="nickname">
          {user ? user.nickName + "'s" : 'My'} Todo List
          {!user && <Text className="login-tip">(Tap to login ↑)</Text>}
        </View>
      </View>
    </View>
  );
};

export default IndexPage;
