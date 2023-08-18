import * as React from 'react';
// import Paper from '@mui/material/Paper';
import { Paper, FormControl, InputLabel, OutlinedInput, Button } from '@mui/material';

const styles = {
  paper : {
    width: "20rem", padding: "1rem"
  },
  input: {
    marginBottom: "1rem"
  },
  button: {
    width: "100%"
  }
}

function LoginForm() {
  return (
    <Paper elevation={3} style={styles.paper}>
      <h2>Login Form</h2>
      <form>
        <FormControl variant="outlined" style={styles.input}>
          <InputLabel>Username</InputLabel>
          <OutlinedInput type="text"/>
        </FormControl>
        <FormControl variant="outlined" style={styles.input}>
          <InputLabel>Email</InputLabel>
          <OutlinedInput type="email"/>
        </FormControl>
        <FormControl variant="outlined" style={styles.input}>
          <InputLabel>Password</InputLabel>
          <OutlinedInput type="password"/>
        </FormControl>
        <FormControl variant="outlined" style={styles.input}>
          <InputLabel>Confirm Password</InputLabel>
          <OutlinedInput type="password"/>
        </FormControl>
        <div>
        <Button type="submit" variant="contained" color="secondary">
          Register
        </Button>
        </div>
      </form>
    </Paper>
  )
}

export default LoginForm