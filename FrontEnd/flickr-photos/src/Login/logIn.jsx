/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import background from './background.jpg';
import icon from './flickrlogo.png';

// Styles Added to The inputs
const CssTextField = withStyles({
  root: {
    // margin: 10,
    minWidth: 305,
    justifyContent: 'center',
    alignSelf: 'center',
  },
})(TextField);
// the card styles
const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: "center",
    marginTop: 150,
    padding: 10,
    minWidth: 360,
    maxWidth: 360,
    height: 420,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 16,
    padding: 20,
    color: 'black',
  },
  pos: {
    alignSelf: 'center',
  },
});

const schema = yup.object().shape({
  password: yup.string().min(12).required(),
  // age: yup.number().integer().positive().required(),
  email: yup.string().email().required(),
});

export default function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const classes = useStyles();
  // the use of the use state and set state functions
  // to save the changes made in each of this inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //   const history = useHistory();
  // const [passwordError, setpasswordError] = useState('');

  // validatePassword = () => {
  //   let passwordError = "";

  // };
  const submitForm = () => {
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      width: '100vw',
      minHeight: '100vh',
      backgroundRepeat: 'no-repeat',
    // background image stylings
    }}
    >
      <Card className={classes.root}>
        <img src={icon} style={{ width: '25%', justifyContent: 'center', alignSelf: 'center' }} alt="icon" />
        <Typography className={classes.title} style={{ marginTop: '-25px', fontSize: '1.25rem' }} color="textSecondary" gutterBottom>
          Log in to Flickr
        </Typography>
        <form onSubmit={handleSubmit(submitForm)}>
          <CssTextField variant="outlined" {...register('email')} name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} label="Email Address" />
          <p style={{ color: 'red', fontSize: '12px', transition: '10s' }}>{errors.email && 'Required'}</p>
          <CssTextField variant="outlined" {...register('password')} name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" />
          <p style={{ color: 'red', fontSize: '12px', transition: '10s' }}>{errors.password && 'Required Must be 12 Characters'}</p>
          <Button
            variant="contained"
            style={{
              minWidth: 290,
              color: 'white',
              backgroundColor: '#128fdc',
              paddingTop: '8px',
              marginTop: '8px',
              font: 'inherit',
            }}
            disableElevation
            type="submit"
          >
            sign in
          </Button>
        </form>
        <Link to="/forgotpassword" style={{ marginTop: '12px', fontSize: '14px' }}>Forgot Password?</Link>
        <div style={{
          fontSize: '0.875rem', position: 'relative', alignSelf: 'center',
        }}
        >
          <p style={{ marginTop: '15px' }}>
            Not a Flickr member? Sign up here.
          </p>
        </div>

      </Card>
    </div>
  );
}
