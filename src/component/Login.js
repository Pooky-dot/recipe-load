import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const rice = require('../../assets/rice.png');
const cheese = require('../../assets/cheese.png');
const egg = require('../../assets/egg.png');
const orange = require('../../assets/orange.png');
const pizza = require('../../assets/pizza.png');
const zzigae = require('../../assets/zzigae.png');
const logo = require('../../assets/logo.png')

const Login = () => {
  return (
    <View style={styles.container}>
      {/* 중앙 텍스트 */}
      <Text style={styles.mainText}>Recipe Load</Text>

    
  

      {/* 버튼들 */}
      <TouchableOpacity style={styles.buttonSecondary}>
        <Text numberOfLines={1} style={styles.buttonSecondaryText}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonPrimary}>
        <Text numberOfLines={1} style={styles.buttonPrimaryText}>
          Create New Account
        </Text>
      </TouchableOpacity>

      {/* 이미지 */}
      <Image source={rice} style={styles.riceImage} />
      <Image source={cheese} style={styles.cheeseImage} />
      <Image source={egg} style={styles.eggImage} />
      <Image source={pizza} style={styles.pizzaIamge} />
      <Image source={orange} style={styles.orangeImage} />
      <Image source={zzigae} style={styles.zzigaeIamge} />
      
      
    
      

      {/* 원형 요소들 */}
      <View style={styles.circle1} />
      <View style={styles.circle2} />
      <View style={styles.circle3} />
      <View style={styles.circle4} />
      <View style={styles.circle5} />
      <View style={styles.circle6} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#70B9BE',
    overflow: 'hidden',
  },
  rotatedBox1: {
    width: 516.4,
    height: 605.62,
    position: 'absolute',
    left: 401.98,
    top: 138,
    transform: [{ rotate: '75deg' }],
    borderWidth: 1,
    borderColor: '#3DA0A7',
  },
  rotatedBox2: {
    width: 72,
    height: 64.06,
    position: 'absolute',
    left: -12.32,
    top: 121.3,
    transform: [{ rotate: '-129deg' }],
    borderWidth: 1,
    borderColor: '#3DA0A7',
  },
  rotatedBox3: {
    width: 290,
    height: 246,
    position: 'absolute',
    left: 391.89,
    top: -66,
    transform: [{ rotate: '88deg' }],
    borderWidth: 1,
    borderColor: '#3DA0A7',
  },
  mainText: {
    width: 343,
    position: 'absolute',
    left: 20,
    top: 538,
    textAlign: 'center',
    color: 'white',
    fontSize: 28,
    fontFamily: 'Sofia Pro',
    fontWeight: '800',
    lineHeight: 36.4,
  },
  
  buttonSecondary: {
    width: 327,
    paddingHorizontal: 20, // 패딩 값을 줄여 텍스트가 들어갈 공간 확보
    paddingVertical: 16,
    position: 'absolute',
    left: 24,
    top: 634,
    backgroundColor: '#042628',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSecondaryText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontFamily: 'Sofia Pro',
    fontWeight: '700',
    lineHeight: 21.6,
  },
  buttonPrimary: {
    width: 327,
    paddingHorizontal: 20, // 패딩 값을 줄여 텍스트가 들어갈 공간 확보
    paddingVertical: 16,
    position: 'absolute',
    left: 24,
    top: 688,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPrimaryText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontFamily: 'Sofia Pro',
    fontWeight: '700',
    lineHeight: 21.6,
  },
  circle1: {
    width: 8,
    height: 8,
    position: 'absolute',
    left: 92,
    top: 345,
    backgroundColor: '#FFF1CE',
    borderRadius: 4,
  },
  circle2: {
    width: 8,
    height: 8,
    position: 'absolute',
    left: 250,
    top: 355,
    backgroundColor: '#FFF1CE',
    borderRadius: 4,
  },
  circle3: {
    width: 8,
    height: 8,
    position: 'absolute',
    left: 337,
    top: 321,
    backgroundColor: '#FFF1CE',
    borderRadius: 4,
  },
  circle4: {
    width: 7,
    height: 7,
    position: 'absolute',
    left: 265,
    top: 163,
    backgroundColor: '#FFF1CE',
    borderRadius: 3.5,
  },
  circle5: {
    width: 7,
    height: 7,
    position: 'absolute',
    left: 88,
    top: 264,
    backgroundColor: '#FFF1CE',
    borderRadius: 3.5,
  },
  circle6: {
    width: 6,
    height: 6,
    position: 'absolute',
    left: 190,
    top: 205,
    backgroundColor: '#FFF1CE',
    borderRadius: 3,
  },

  riceImage: {
    width: 130,  // 원하는 크기로 조정
    height: 100,
    position: 'absolute',
    left: 30,
    top: 150,
  },
  cheeseImage:{
    width: 130,
    height: 100,
    position: 'absolute',
    left: 230,
    top: 200
  },
  eggImage:{
    width: 130,
    height: 100,
    position: 'absolute',
    left: 120,
    top: 250
  },
  orangeImage:{
    width: 130,
    height: 100,
    position: 'absolute',
    left: 20,
    top: 400
  },
  pizzaIamge:{
    width: 130,
    height: 100,
    position: 'absolute',
    left: 250,
    top: 380    
  },
  zzigaeIamge:{
    width: 130,
    height: 100,
    position: 'absolute',
    left: 140,
    top: 350
  },


});

export default Login;
