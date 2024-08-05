import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form>

        <Grid container>
          <Grid item xs={ 12 }>
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
            placeholder="Password"
            fullWidth
            />
          </Grid>

          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>

            <Grid item xs={ 12 } sm={ 6 }>
              <Button variant="contained" fullWidth>
                Login
              </Button>
            </Grid>

            <Grid item xs={ 12 } sm={ 6 }>
              <Button variant="contained" fullWidth sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
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
