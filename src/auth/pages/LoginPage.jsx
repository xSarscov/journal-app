import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { authStatus, checkingAuthentication, startGoogleSignIn } from '../../store/auth';
import { useMemo } from 'react';

export const LoginPage = () => {

  const { status } = useSelector( state => state.auth )
  const dispatch = useDispatch();

  const isAuthenticating = useMemo( () => status === authStatus.checking, [status]);

  const { email, password, onInputChange } = useForm({
    email: 'example@gmail.com',
    password: '123456',
  });

  const onSubmit = ( event ) => {
    event.preventDefault();

    dispatch( checkingAuthentication() );
  }

  const onGoogleSignIn = () => {
    console.log('Sign in w Google');
    dispatch( startGoogleSignIn() );
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={ onSubmit }>

        <Grid container>
          <Grid item xs={ 12 }>
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
