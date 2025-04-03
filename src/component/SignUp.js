import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const InputField = ({ label, placeholder, containerStyle, value, onChangeText }) => (
  <View style={[styles.inputContainer, containerStyle]}>
    <Text style={styles.labelText}>{label}</Text>
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      placeholderTextColor="#D9D9D9"
      value={value}
      onChangeText={onChangeText}
    />
  </View>
);

const SignUp = () => (
  <View style={styles.container}>
    <Text style={styles.header}>회원가입</Text>

    {/* 입력 필드들 */}
    <InputField label="Name" placeholder="Enter Name" containerStyle={{ top: 140, left: 30 }} />
    <InputField label="Email" placeholder="Enter Email" containerStyle={{ top: 230, left: 30 }} />
    <InputField label="Password" placeholder="Enter Password" containerStyle={{ top: 320, left: 30 }} />
    <InputField label="Confirm Password" placeholder="Retype Password" containerStyle={{ top: 410, left: 30 }} />

    {/* Terms & Condition */}
    <View style={styles.termsContainer}>
      <View style={styles.checkbox} />
      <Text style={styles.termsText}>Accept terms & Condition</Text>
    </View>

    {/* Sign Up 버튼 */}
    <TouchableOpacity style={styles.signUpButton}>
      <Text style={styles.signUpText}>Sign Up</Text>
      <View style={styles.signUpIconWrapper}>
        <View style={styles.hiddenIcon} />
      </View>
    </TouchableOpacity>

    {/* "Or Sign in With" 텍스트 및 구분선 */}
    <Text style={styles.orText}>Or Sign in With</Text>
    <View style={[styles.line, { left: 90 }]} />
    <View style={[styles.line, { left: 235 }]} />

    {/* 소셜 로그인 버튼들 */}
    <View style={styles.socialButtonsContainer}>
      <View style={styles.socialButton}>
        <View style={styles.colorBlockContainer}>
          <View style={[styles.colorBlock, { backgroundColor: '#FFC107', width: 20, height: 20, top: 2, left: 2 }]} />
          <View style={[styles.colorBlock, { backgroundColor: '#FF3D00', width: 15.66, height: 7.76, top: 2, left: 3.15 }]} />
          <View style={[styles.colorBlock, { backgroundColor: '#4CAF50', width: 15.61, height: 7.97, top: 14.03, left: 3.10 }]} />
          <View style={[styles.colorBlock, { backgroundColor: '#1976D2', width: 10, height: 9.41, top: 10, left: 12 }]} />
        </View>
      </View>
      <View style={styles.socialButton}>
        <View style={styles.socialIconPlaceholder}>
          <View style={[styles.innerIcon, { backgroundColor: '#035B81', width: 20, height: 20 }]} />
        </View>
      </View>
    </View>

    {/* 이미 회원인 경우 */}
    <View style={styles.signInContainer}>
      <Text style={styles.alreadyMemberText}>Already a member? </Text>
      <Text style={styles.signInText}>Sign In</Text>
    </View>
  </View>
);

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
  signUpIconWrapper: {
    width: 20,
    height: 20,
  },
  hiddenIcon: {
    width: 20,
    height: 20,
    opacity: 0,
    backgroundColor: 'white',
  },
  orText: {
    position: 'absolute',
    top: 664,
    left: 147,
    color: '#D9D9D9',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'center',
  },
  line: {
    position: 'absolute',
    top: 673,
    width: 50,
    height: 0,
    backgroundColor: '#D9D9D9',
    borderWidth: 1,
    borderColor: '#D9D9D9',
  },
  socialButtonsContainer: {
    position: 'absolute',
    top: 701,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  socialButton: {
    width: 44,
    height: 44,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#696969',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorBlockContainer: {
    width: 24,
    height: 24,
    overflow: 'hidden',
  },
  colorBlock: {
    position: 'absolute',
  },
  socialIconPlaceholder: {
    width: 24,
    height: 24,
    opacity: 0.58,
  },
  innerIcon: {
    position: 'absolute',
  },
  signInContainer: {
    position: 'absolute',
    top: 765,
    left: 113,
    flexDirection: 'row',
    alignItems: 'center',
  },
  alreadyMemberText: {
    color: 'black',
    fontSize: 11,
    fontWeight: '500',
  },
  signInText: {
    color: '#FF9C00',
    fontSize: 11,
    fontWeight: '500',
  },
});

export default SignUp;
