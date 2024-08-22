import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import { Google } from '@mui/icons-material'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { authStatus, checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';

export const LoginPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth )
  const dispatch = useDispatch();

  const isAuthenticating = useMemo( () => status === authStatus.checking, [status]);

  const { email, password, onInputChange, formState } = useForm({
    email: '',
    password: '',
  });

  const onSubmit = ( event ) => {
    event.preventDefault();
    dispatch( startLoginWithEmailPassword( formState ) );
  }

  const onGoogleSignIn = () => {
    dispatch( startGoogleSignIn() );
  }

  return (
    <AuthLayout title="Login">
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
            label="Email address"
            type="email"
            placeholder="example@gmail.com"
            fullWidth
            name="email"
            value={ email }
            onChange={ onInputChange }
            />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
            label="Password"
            type="password"
            placeholder="Password"
            fullWidth
            name="password"
            value={ password }
            onChange={ onInputChange }
            />
          </Grid>

          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>

            <Grid item xs={ 12 } sm={ 6 }>
              <Button 
                type="submit"
                variant="contained"
                fullWidth
                disabled={ isAuthenticating }
                >
                Login
              </Button>
            </Grid>

            <Grid item xs={ 12 } sm={ 6 }>
              <Button 
                type="submit"
                variant="contained"
                fullWidth
                sx={{ display: "flex", justifyContent: "center", gap: 1 }}
                onClick={ onGoogleSignIn }
                disabled={ isAuthenticating }
                >                
                <Google />
                <Typography>Google</Typography>
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
              Don't have an account?
            </Typography>
            <Link
              component={ RouterLink }
              color="inherit"
              to="/auth/register"
            >
              Register here
            </Link>
          </Grid>

        </Grid>

      </form>
    </AuthLayout>
  )
}
