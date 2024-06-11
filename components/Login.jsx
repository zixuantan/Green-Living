import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Image
} from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { loginUser } from '../services/LoginService';

const logoIcon = require('../utils/default.png');

const validationSchema = yup
  .object()
  .shape({
    username: yup.string().required('Email/Phone Number is required'),
    password: yup.string().required('Password is required')
  })
  .strict();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A4F59D'
  },
  input: {
    width: '80%',
    marginTop: 6,
    marginHorizontal: 6,
    borderRadius: 5,
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f0f0f0'
  },
  errorInput: {
    borderColor: 'red'
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '90%',
    marginTop: 20
  },
  button: {
    backgroundColor: '#d3d3d3',
    padding: 10,
    borderRadius: 10,
    marginTop: 30,
    width: '40%',
    alignItems: 'center',
    marginBottom: 30
  },
  buttonText: {
    color: 'black',
    fontSize: 16
  },
  linkText: {
    color: 'blue',
    marginTop: 10,
    marginBottom: 7,
    textDecorationLine: 'underline'
  },
  signUpText: {
    marginTop: 3,
    fontSize: 22
  },
  signUpLink: {
    color: 'blue'
  }
});

const initialValues = {
  username: '',
  password: ''
};

const Login = ({ navigation }) => {
  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      loginUser(username, password, (err, result) => {
        if (err) {
          console.error('Login failed:', err);
          return;
        }
        console.log('Login success:', result);
        navigation.replace('Main');
      });
    } catch (e) {
      console.log('An error occurred:', e);
    }
  };

  const create = () => {
    navigation.navigate('SignUp');
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Image style={styles.image} source={logoIcon} />
        <Text style={{ width: '80%', fontSize: 20 }}>Email/Phone Number</Text>
        <TextInput
          style={[
            styles.input,
            formik.touched.username &&
              formik.errors.username &&
              styles.errorInput
          ]}
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
        />
        {formik.touched.username && formik.errors.username && (
          <Text style={{ color: 'red' }}>{formik.errors.username}</Text>
        )}
        <Text style={{ width: '80%', fontSize: 20 }}>Password</Text>
        <TextInput
          style={[
            styles.input,
            formik.touched.password &&
              formik.errors.password &&
              styles.errorInput
          ]}
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          secureTextEntry
        />
        {formik.touched.password && formik.errors.password && (
          <Text style={{ color: 'red' }}>{formik.errors.password}</Text>
        )}
        <Text style={styles.linkText}>Forgot password?</Text>
        <Pressable onPress={formik.handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Let's go!</Text>
        </Pressable>
        <Text style={styles.signUpText}> No account yet?</Text>
        <Text style={styles.signUpText}>
          Click{' '}
          <Text
            onPress={create}
            style={{ color: 'blue', textDecorationLine: 'underline' }}
          >
            here
          </Text>{' '}
          to sign up!
        </Text>
      </View>
    </View>
  );
};

export default Login;
