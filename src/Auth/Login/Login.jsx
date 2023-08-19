import './login.css'
import { Avatar, Button, Checkbox, CssBaseline, FormControlLabel, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { MdLockOutline } from 'react-icons/md'
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import {auth,provider} from "./config";
import { signInWithPopup } from 'firebase/auth'
import HomePage from '../../Pages/Home/HomePage'
import { ContextFunction } from '../../Context/Context'


const Login = () => {
  const [value, setValue] = useState("");
  // const [role,setRole]=useState("");
  const { role, setRole } = useContext(ContextFunction)

  const navigate=useNavigate();

  const handleChange=(e)=>{
    // console.log(e.target.value);
    setRole(e.target.value);
    console.log(role);
  }
  const handleClick=()=>{
    signInWithPopup(auth,provider).then((data)=>{
      setValue(data.user.email)
      localStorage.setItem("email",data.user.email)
      localStorage.setItem("role",role);
    })
  }

  useEffect(()=>{
    setValue(localStorage.getItem('email'))
  },[])

  return (
    value? navigate("/")
    :
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#1976d2' }}>
          <MdLockOutline />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <div style={{display:"flex",marginTop:"2rem"}}>
          <div style={{marginRight:"2rem"}}>
            <input type="radio" name ="role" value="Seller" onChange={handleChange}/>Seller
          </div>
          <div>
            <input type="radio" name="role" value="Buyer" onChange={handleChange}/>Buyer
          </div>
        </div>
        <Button
            onClick={handleClick}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In With Google
          </Button>
      </Box>
      {/* <CopyRight sx={{ mt: 8, mb: 4 }} /> */}
    </Container>
  )
}

export default Login