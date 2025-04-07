import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const InputField = ({ label, placeholder, containerStyle, value, onChangeText, secureTextEntry }) => (
  <View style={[styles.inputContainer, containerStyle]}>
    <Text style={styles.labelText}>{label}</Text>
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      placeholderTextColor="#D9D9D9"
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  </View>
);

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};

    // 이름 검사: 빈 값인지 체크
    if (!name.trim()) {
      errors.name = '이름을 입력해주세요.';
    }

    // 이메일 검사: 기본 정규식 사용
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      errors.email = '이메일 형식이 유효하지 않습니다.';
    }

    // 비밀번호 검사: 최소 6자 이상
    if (password.length < 6) {
      errors.password = '비밀번호는 최소 6자 이상이어야 합니다.';
    }

    // 비밀번호 확인: 두 입력값이 동일한지
    if (password !== confirmPassword) {
      errors.confirmPassword = '비밀번호가 일치하지 않습니다.';
    }

    return errors;
  };

  const handleSignUp = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Alert를 통해 에러 메시지들을 보여줄 수도 있습니다.
      Alert.alert("Validation Error", Object.values(validationErrors).join('\n'));
    } else {
      setErrors({});
      // 모든 검증이 통과된 경우 회원가입 API 호출 등 다음 프로세스 진행
      Alert.alert("Success", "회원가입이 완료되었습니다!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>회원가입</Text>

      {/* Name Input */}
      <InputField
        label="Name"
        placeholder="Enter Name"
        containerStyle={{ top: 140, left: 30 }}
        value={name}
        onChangeText={setName}
      />
      {errors.name && <Text style={[styles.errorText, { top: 220, left: 30 }]}>{errors.name}</Text>}

      {/* Email Input */}
      <InputField
        label="Email"
        placeholder="Enter Email"
        containerStyle={{ top: 230, left: 30 }}
        value={email}
        onChangeText={setEmail}
      />
      {errors.email && <Text style={[styles.errorText, { top: 310, left: 30 }]}>{errors.email}</Text>}

      {/* Password Input */}
      <InputField
        label="Password"
        placeholder="Enter Password"
        containerStyle={{ top: 320, left: 30 }}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      {errors.password && <Text style={[styles.errorText, { top: 400, left: 30 }]}>{errors.password}</Text>}

      {/* Confirm Password Input */}
      <InputField
        label="Confirm Password"
        placeholder="Retype Password"
        containerStyle={{ top: 410, left: 30 }}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
      />
      {errors.confirmPassword && <Text style={[styles.errorText, { top: 490, left: 30 }]}>{errors.confirmPassword}</Text>}

      {/* Terms & Condition */}
      <View style={styles.termsContainer}>
        <View style={styles.checkbox} />
        <Text style={styles.termsText}>Accept terms & Condition</Text>
      </View>

      {/* Sign Up 버튼 */}
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>

      {/* 나머지 소셜 로그인 및 회원가입 관련 UI는 그대로 유지 */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 812,
    backgroundColor: 'white',
    borderRadius: 30,
  },
  header: {
    position: 'absolute',
    top: 84,
    left: 30,
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
  },
  inputContainer: {
    width: 315,
    height: 81,
    position: 'absolute',
  },
  labelText: {
    position: 'absolute',
    top: 0,
    color: '#121212',
    fontSize: 14,
    fontWeight: '400',
  },
  textInput: {
    position: 'absolute',
    top: 26,
    width: 315,
    height: 55,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#D9D9D9',
    paddingLeft: 20,
    fontSize: 11,
    color: '#121212',
  },
  termsContainer: {
    position: 'absolute',
    top: 547,
    left: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 17,
    height: 17,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FF9C00',
  },
  termsText: {
    marginLeft: 15,
    color: '#FF9C00',
    fontSize: 11,
    fontWeight: '400',
  },
  signUpButton: {
    position: 'absolute',
    top: 590,
    alignSelf: 'center',
    paddingHorizontal: 120,
    paddingVertical: 18,
    backgroundColor: '#129575',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  errorText: {
    position: 'absolute',
    color: 'red',
    fontSize: 10,
  },
});

export default SignUp;
