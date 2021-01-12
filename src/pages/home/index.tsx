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
  const [userInfo, login] = useUserInfo();

  const handleAdd = () => {
    navigateTo({ url: '../new/index' });
  };

  return (
    <View className="page-todos">
      <View className="user">
        <LoginButton login={login}>
          <Image className="avatar" src={userInfo ? userInfo.avatarUrl : logo} />
        </LoginButton>
        <View className="nickname">
          {userInfo ? userInfo.nickName + "'s" : 'My'} Todo List
          {!userInfo && <Text className="login-tip">(Tap to login ↑)</Text>}
        </View>
      </View>
    </View>
  );
};

export default IndexPage;
