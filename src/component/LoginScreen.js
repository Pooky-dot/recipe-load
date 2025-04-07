import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* 상단 인삿말 */}
      <Text style={styles.helloText}>Hello,</Text>
      <Text style={styles.welcomeText}>Welcome Back!</Text>

      {/* Forgot Password */}
      <Text style={styles.forgotText}>Forgot Password?</Text>

      {/* 왼쪽 아이콘 박스 */}
      <View style={styles.iconBox1} />

      {/* 아이콘 내부 구성 (첫 번째 아이콘 그룹) */}
      <View style={styles.iconGroup}>
        <View style={styles.innerIcon1} />
        <View style={styles.innerIcon2} />
        <View style={styles.innerIcon3} />
        <View style={styles.innerIcon4} />
      </View>

      {/* 오른쪽 아이콘 박스 */}
      <View style={styles.iconBox2} />
      <View style={styles.iconOverlay}>
        <View style={styles.innerIconBlue} />
      </View>
      <View style={styles.iconOverlayTransparent} />

      {/* Sign up 텍스트 */}
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>
          Don’t have an account?{' '}
          <Text style={styles.signupLink}>Sign up</Text>
        </Text>
      </View>

      {/* 구분선 (오른쪽, 왼쪽) */}
      <View style={styles.lineRight} />
      <View style={styles.lineLeft} />
      <Text style={styles.orText}>Or Sign in With</Text>

      {/* Email 입력 영역 */}
      <View style={styles.inputEmail}>
        <View style={styles.inputField} />
        <Text style={styles.placeholderText}>Enter Email</Text>
        <Text style={styles.labelText}>Email</Text>
      </View>

      {/* Password 입력 영역 */}
      <View style={styles.inputPassword}>
        <View style={styles.inputField} />
        <Text style={styles.placeholderText}>Enter Password</Text>
        <Text style={styles.labelText}>Enter Password</Text>
      </View>

      {/* Sign In 버튼 */}
      <View style={styles.signInButton}>
        <Text style={styles.signInText}>Sign In</Text>
        <View style={styles.buttonIcon}>
          <View style={styles.buttonIconOverlay} />
        </View>
      </View>

      {/* 하단 다크모드 핸들 (드래그 막대) */}
      <View style={styles.darkModeIndicator}>
        <View style={styles.darkModeHandle} />
      </View>

      {/* 상단 상태바 (시간, 배터리 아이콘 등) */}
      <View style={styles.topBar}>
        <View style={styles.batteryContainer}>
          <View style={styles.batteryIcon} />
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>19:27</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 812,
    backgroundColor: '#fff',
    borderRadius: 30,
    overflow: 'hidden',
    position: 'relative',
  },
  helloText: {
    position: 'absolute',
    left: 30,
    top: 94,
    color: '#000',
    fontSize: 30, // text-3xl
    fontWeight: '600',
    fontFamily: 'Poppins',
  },
  welcomeText: {
    position: 'absolute',
    left: 30,
    top: 139,
    color: '#121212',
    fontSize: 20, // text-xl (대략)
    fontWeight: '400',
    fontFamily: 'Poppins',
  },
  forgotText: {
    position: 'absolute',
    left: 40,
    top: 438,
    textAlign: 'center',
    color: '#ff9b00',
    fontSize: 11,
    fontWeight: '400',
    fontFamily: 'Poppins',
  },
  iconBox1: {
    position: 'absolute',
    left: 131,
    top: 597,
    width: 44, // w-11
    height: 44, // h-11
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: 'rgba(105,105,105,0.10)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 3,
  },
  iconGroup: {
    position: 'absolute',
    left: 141,
    top: 607,
    width: 24, // w-6
    height: 24, // h-6
    overflow: 'hidden',
  },
  innerIcon1: {
    position: 'absolute',
    left: 2,
    top: 2,
    width: 20, // w-5 ~20px
    height: 20,
    backgroundColor: '#ffc107',
  },
  innerIcon2: {
    position: 'absolute',
    left: 3.15,
    top: 2,
    width: 15.66,
    height: 7.76,
    backgroundColor: '#ff3d00',
  },
  innerIcon3: {
    position: 'absolute',
    left: 3.10,
    top: 14.03,
    width: 15.61,
    height: 14, // h-2 대신 근사치 사용
    backgroundColor: '#4caf50',
  },
  innerIcon4: {
    position: 'absolute',
    left: 12,
    top: 10,
    width: 10, // 2.5의 근사치
    height: 9.41,
    backgroundColor: '#1976d2',
  },
  iconBox2: {
    position: 'absolute',
    left: 200,
    top: 597,
    width: 44,
    height: 44,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: 'rgba(105,105,105,0.10)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 3,
  },
  iconOverlay: {
    position: 'absolute',
    left: 210,
    top: 607,
    width: 24,
    height: 24,
    opacity: 0.6,
  },
  innerIconBlue: {
    position: 'absolute',
    left: 2,
    top: 2,
    width: 20,
    height: 20,
    backgroundColor: '#035b81',
  },
  iconOverlayTransparent: {
    position: 'absolute',
    left: 210,
    top: 607,
    width: 24,
    height: 24,
    opacity: 0,
  },
  signupContainer: {
    position: 'absolute',
    left: 99,
    top: 696,
    alignItems: 'center',
  },
  signupText: {
    fontSize: 11,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#000',
  },
  signupLink: {
    color: '#ff9b00',
    fontSize: 11,
    fontWeight: '500',
    fontFamily: 'Poppins',
  },
  lineRight: {
    position: 'absolute',
    left: 235,
    top: 569,
    width: 50,
    height: 1, // h-0 대신 1px 선 사용
    backgroundColor: '#d9d9d9',
  },
  lineLeft: {
    position: 'absolute',
    left: 90,
    top: 569,
    width: 50,
    height: 1,
    backgroundColor: '#d9d9d9',
  },
  orText: {
    position: 'absolute',
    left: 147,
    top: 560,
    textAlign: 'center',
    color: '#d9d9d9',
    fontSize: 11,
    fontWeight: '500',
    fontFamily: 'Poppins',
  },
  inputEmail: {
    position: 'absolute',
    left: 30,
    top: 226,
    width: 315,
    height: 81,
  },
  inputField: {
    position: 'absolute',
    left: 0,
    top: 26,
    width: 315,
    height: 55,
    borderWidth: 1.5,
    borderColor: '#d9d9d9',
    borderRadius: 10,
  },
  placeholderText: {
    position: 'absolute',
    left: 20,
    top: 45,
    color: '#d9d9d9',
    fontSize: 11,
    fontWeight: '400',
    fontFamily: 'Poppins',
  },
  labelText: {
    position: 'absolute',
    left: 0,
    top: 0,
    color: '#121212',
    fontSize: 14, // text-sm 근사치
    fontWeight: '400',
    fontFamily: 'Poppins',
  },
  inputPassword: {
    position: 'absolute',
    left: 30,
    top: 337,
    width: 315,
    height: 81,
  },
  signInButton: {
    position: 'absolute',
    left: 30,
    top: 480,
    paddingHorizontal: 85,
    paddingVertical: 18,
    backgroundColor: '#119475',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  signInText: {
    width: 114,
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Poppins',
  },
  buttonIcon: {
    width: 20,
    height: 20,
    position: 'relative',
  },
  buttonIconOverlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 20,
    height: 20,
    opacity: 0,
    backgroundColor: '#fff',
  },
  darkModeIndicator: {
    position: 'absolute',
    left: 0,
    top: 778,
    width: 375,
    height: 34,
    overflow: 'hidden',
  },
  darkModeHandle: {
    position: 'absolute',
    left: 120,
    top: 21,
    width: 135,
    height: 5,
    backgroundColor: '#121212',
    borderRadius: 100,
  },
  topBar: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 375,
    height: 44, // h-11 (대략 44px)
  },
  batteryContainer: {
    position: 'absolute',
    left: 293.5,
    top: 16.6,
    width: 68,
    height: 13,
    overflow: 'hidden',
  },
  batteryIcon: {
    position: 'absolute',
    left: 44.5,
    top: 2.48,
    width: 18,
    height: 7.67,
    backgroundColor: '#303030',
    borderRadius: 4,
  },
  timeContainer: {
    position: 'absolute',
    left: 0,
    top: 12,
    width: 180,
    height: 22,
  },
  timeText: {
    position: 'absolute',
    left: 29.5,
    top: 2,
    color: '#303030',
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'SF_Pro_Display',
  },
});

export default LoginScreen;
