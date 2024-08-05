import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>

        <Grid container>
          <Grid item xs={ 12 }>
            <TextField
            label="Fullname"
            type="text"
            placeholder="Type your fullname"
            fullWidth
            />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
            label="Email address"
            type="email"
            placeholder="example@gmail.com"
            fullWidth
            />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
            label="Password"
            type="password"
            placeholder="Type your password"
            fullWidth
            />
          </Grid>

          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>

            <Grid item xs={ 12 } sm={ 12 }>
              <Button variant="contained" fullWidth>
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
