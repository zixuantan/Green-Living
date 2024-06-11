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

const logoIcon = require('../utils/default.png');

const validationSchema = yup
  .object()
  .shape({
    name: yup.string().required('Name is required'),
    email: yup.string().required('Email is required'),
    phoneNumber: yup.string().required('Phone number is required'),
    password: yup.string().required('Password is required')
  })
  .strict(); // adding a strict here to ensure all the fields are validated properly / not coerced

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
  }
});

const initialValues = {
  name: '',
  email: '',
  phoneNumber: '',
  password: ''
};

const SignUp = ({ navigation }) => {
  const onSubmit = async (values) => {
    const { name, email, phoneNumber, password } = values;
    try {
      console.log(values);
      navigation.replace('Main');
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
        <Image style={styles.image} source={logoIcon} />
        <Text style={{ width: '80%', fontSize: 20 }}>Name</Text>
        <TextInput
          style={[
            styles.input,
            formik.touched.name && formik.errors.name && styles.errorInput
          ]}
          value={formik.values.username}
          onChangeText={formik.handleChange('name')}
        />
        {formik.touched.name && formik.errors.name && (
          <Text style={{ color: 'red' }}>{formik.errors.name}</Text>
        )}
        <Text style={{ width: '80%', fontSize: 20 }}>Email</Text>
        <TextInput
          style={[
            styles.input,
            formik.touched.email && formik.errors.email && styles.errorInput
          ]}
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
        />
        {formik.touched.email && formik.errors.email && (
          <Text style={{ color: 'red' }}>{formik.errors.email}</Text>
        )}
        <Text style={{ width: '80%', fontSize: 20 }}>Phone Number</Text>
        <TextInput
          style={[
            styles.input,
            formik.touched.phoneNumber &&
              formik.errors.phoneNumber &&
              styles.errorInput
          ]}
          value={formik.values.phoneNumber}
          onChangeText={formik.handleChange('phoneNumber')}
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber && (
          <Text style={{ color: 'red' }}>{formik.errors.phoneNumber}</Text>
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
        <Pressable onPress={formik.handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUp;
