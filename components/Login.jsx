import React from 'react';
import { Link, useNavigate } from 'react-router-native';
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

const validationSchema = yup.object().shape({
  username: yup.string().required('Email/Phone Number is required'),
  password: yup.string().required('Password is required')
});

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

const Login = () => {
  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      console.log(values);
    } catch (e) {
      console.log(e);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Image style={styles.image} source={require('../utils/default.png')} />
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
          <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
            here{' '}
          </Text>
          to sign up!
        </Text>
      </View>
    </View>
  );
};

export default Login;
