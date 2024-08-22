import { useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';
import { authStatus } from '../../store/auth/authSlice';

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [ (value) => value.includes('@') , 'Invalid email'],
  password: [ (value) => value.length >= 6 , 'Password must be at least 6 characters'],
  displayName: [ (value) => value.length >= 1 , 'Invalid name'],
}

export const RegisterPage = () => {

  const { 
    displayName,
    email,
    password, 
    onInputChange, 
    formState,
    displayNameValid,
    emailValid,
    passwordValid,
    isFormValid,
    onResetForm
  } = useForm(formData, formValidations);

  const { status, errorMessage } = useSelector( state => state.auth );
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const isAuthenticating = useMemo( () => status === authStatus.checking, [status]);


  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted( true );

    if ( !isFormValid ) return;

    dispatch( startCreatingUserWithEmailPassword( formState ) );
    onResetForm();
  }

  return (
    <AuthLayout title="Register">
      <form 
        onSubmit={ onSubmit }
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container>
          {
            !!errorMessage && (
              <Grid item xs={ 12 }>
                <Alert severity='error'>
                  { errorMessage }
                </Alert>
              </Grid>
            ) 
          }
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
            label="Fullname"
            type="text"
            placeholder="Type your fullname"
            fullWidth
            name="displayName"
            value={ displayName }
            onChange={ onInputChange }
            error={ !!displayNameValid && formSubmitted }
            helperText={ formSubmitted && displayNameValid }
            />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
            label="Email address"
            type="email"
            placeholder="example@gmail.com"
            fullWidth
            name="email"
            value={ email }
            onChange={ onInputChange }
            error={ !!emailValid && formSubmitted }
            helperText={ formSubmitted && emailValid }
            />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
            label="Password"
            type="password"
            placeholder="Type your password"
            fullWidth
            name="password"
            value={ password }
            onChange={ onInputChange }
            error={ !!passwordValid && formSubmitted }
            helperText={ formSubmitted && passwordValid }
            />
          </Grid>

          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>

            <Grid item xs={ 12 } sm={ 12 }>
              <Button 
                type='submit'
                variant="contained"
                fullWidth
                disabled={ isAuthenticating }
                >
                Register
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="end"
            gap={1}
          >
            <Typography>
              Already have an account? 
            </Typography>
            <Link
              component={ RouterLink }
              color="inherit"
              to="/auth/login"
            >
              Login here
            </Link>
          </Grid>

        </Grid>

      </form>
    </AuthLayout>
  )
}
