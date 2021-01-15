import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  Canvas,
  navigateTo,
  createSelectorQuery,
} from 'remax/wechat';
import { usePageEvent } from 'remax/macro';
import classNames from 'classnames'
import lottie from 'lottie-miniprogram'
import './index.less';

type ISex = 'boy' | 'girl'

const HomePage = () => {
  const [sex, setSex] = useState<ISex>('boy')

  usePageEvent('onReady', () => {
    createSelectorQuery().select('#edifier').node(res => {
      const canvas = res.node
      const context = canvas.getContext('2d')
      canvas.width = 300
      canvas.height = 300
      lottie.setup(canvas)
      lottie.loadAnimation({
        loop: true,
        autoplay: true,
        animationData: require('../../assets/lotties/man.js'),
        rendererSettings: {
          context,
        }
      })
    }).exec()
  })

  const chooseSex = (sex: ISex) => {
    setSex(sex)
  }

  return (
    <View className="home">
      <View className="title">您是？</View>
      <Image className="planet planet1" src="/imgs/planet1.png"></Image>
      <Image className="planet planet2" src="/imgs/planet2.png"></Image>
      <Image className="planet planet3" src="/imgs/planet3.png"></Image>
      <Image className="planet planetBig" src="/imgs/planet.png"></Image>
      <Image
        className={classNames(
          'sexCard',
          {'active': sex === 'boy'},
          {'unactive': sex !== 'boy'},
        )}
        src="/imgs/card_boy.png"
        onTap={() => chooseSex('boy')}
      ></Image>
      <Image
        className={classNames(
          'sexCard',
          {'active': sex === 'girl'},
          {'unactive': sex !== 'girl'},
        )}
        src="/imgs/card_girl.png"
        onTap={() => chooseSex('girl')}
      ></Image>
      <Canvas id="edifier" type="2d"></Canvas>
    </View>
  );
};

export default HomePage;
