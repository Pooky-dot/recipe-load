import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 로그인 버튼 클릭 핸들러: 백엔드 로그인 API 호출
  const handleLogin = async () => {
    try {
      const response = await fetch('http://172.30.1.41:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        // 실패 시 응답 텍스트(또는 JSON)를 받아서 에러 처리
        const errorText = await response.text();
        Alert.alert('로그인 실패', errorText);
        return;
      }

      // 성공 시 응답 JSON 파싱
      const data = await response.json();
      // 예시 응답: { token: "JWT_TOKEN", email: "test@example.com", username: "testuser" }
      // 토큰 저장
      await AsyncStorage.setItem('authToken', data.token);
      
      Alert.alert('로그인 성공', '환영합니다!');
      // 이후 홈 화면 등으로 이동하는 로직 추가 가능 (예: React Navigation)

    } catch (error) {
      console.error('로그인 중 오류 발생:', error);
      Alert.alert('오류', '로그인 중 문제가 발생했습니다.');
    }
  };

  return (
    <View style={styles.container}>
      {/* 상단 인삿말 */}
      <Text style={styles.helloText}>Hello,</Text>
      <Text style={styles.welcomeText}>Welcome Back!</Text>

      {/* Email 입력 영역 */}
      <View style={styles.inputEmail}>
        <Text style={styles.labelText}>Email</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Enter Email"
          placeholderTextColor="#d9d9d9"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Password 입력 영역 */}
      <View style={styles.inputPassword}>
        <Text style={styles.labelText}>Password</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Enter Password"
          placeholderTextColor="#d9d9d9"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>

      {/* 로그인 버튼 */}
      <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
        <Text style={styles.signInText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingTop: 100,
  },
  helloText: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 10,
    color: '#000',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 40,
    color: '#121212',
  },
  inputEmail: {
    marginBottom: 20,
  },
  inputPassword: {
    marginBottom: 20,
  },
  labelText: {
    fontSize: 14,
    color: '#121212',
    marginBottom: 5,
  },
  inputField: {
    height: 55,
    borderWidth: 1.5,
    borderColor: '#d9d9d9',
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 14,
    color: '#121212',
  },
  signInButton: {
    backgroundColor: '#119475',
    paddingVertical: 18,
    borderRadius: 10,
    alignItems: 'center',
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LoginScreen;
