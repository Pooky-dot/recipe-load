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
    if (!name.trim()) {
      errors.name = 'Name is required';
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  const handleSignUp = async () => {
  console.log('SignUp button pressed'); // 디버깅 로그 추가

  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    Alert.alert("Validation Error", Object.values(validationErrors).join('\n'));
    return;
  }
  setErrors({});

  const apiUrl = 'http://172.21.161.6:8080/api/signup';

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      }),
    });

    if (response.ok) {
      const result = await response.text();
      Alert.alert("Success", result);
    } else {
      const errorText = await response.text();
      Alert.alert("Sign Up Error", errorText);
    }
  } catch (error) {
    Alert.alert("Network Error", "Unable to connect to the server.");
    console.error(error);
  }
};


  return (
    <View style={styles.container}>
      <Text style={styles.header}>회원가입</Text>

      <InputField
        label="Name"
        placeholder="Enter Name"
        containerStyle={{ top: 140, left: 30 }}
        value={name}
        onChangeText={setName}
      />
      {errors.name && <Text style={[styles.errorText, { top: 220, left: 30 }]}>{errors.name}</Text>}

      <InputField
        label="Email"
        placeholder="Enter Email"
        containerStyle={{ top: 230, left: 30 }}
        value={email}
        onChangeText={setEmail}
      />
      {errors.email && <Text style={[styles.errorText, { top: 310, left: 30 }]}>{errors.email}</Text>}

      <InputField
        label="Password"
        placeholder="Enter Password"
        containerStyle={{ top: 320, left: 30 }}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      {errors.password && <Text style={[styles.errorText, { top: 400, left: 30 }]}>{errors.password}</Text>}

      <InputField
        label="Confirm Password"
        placeholder="Retype Password"
        containerStyle={{ top: 410, left: 30 }}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
      />
      {errors.confirmPassword && <Text style={[styles.errorText, { top: 490, left: 30 }]}>{errors.confirmPassword}</Text>}

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>
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
