import * as React from 'react';
import { View, Text, Image } from 'remax/wechat';
import useUserInfo from '@/hooks/useUserInfo';
import LoginButton from '@/components/LoginButton';
import styles from './index.css';


export default () => {
  const [userInfo, login] = useUserInfo();
  return (
    <View className={styles.app}>
      <View className="user">
        <LoginButton login={login}>
          <Image className="avatar" src={userInfo ? userInfo.avatarUrl : ''} />
        </LoginButton>
        <View className="nickname">
          {userInfo ? userInfo.nickName + "'s" : 'My'} Todo List
          {!userInfo && <Text className="login-tip">(Tap to login ↑)</Text>}
        </View>
      </View>
    </View>
  );
};
