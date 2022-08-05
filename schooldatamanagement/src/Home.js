import {TextField} from '@mui/material';
import {Grid,Card,CardContent,Typography,Button} from '@mui/material'
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import { Link } from "react-router-dom"

export default function Home(){
  return(<Grid style={{padding:"80px 5px 0 5px"}} container spacing={2} columns={16}>
    <Grid item xs={8}>
      <h2>in home page</h2>
        <Card style={{maxWidth:512, margin:"0 auto",textAlign:"center",fontSize:'24px',color:'blueviolet'}}>SIGN IN</Card>
          <CardContent>
          {/* <Routes>
            {/* <Route path='./SignIn' element={<SignInPage/>}/>
            <Route path='./SignUp' element={<SignUpPage/>}/> */}
          {/*</Routes> */}
          </CardContent>
        </Grid>
    <Grid item xs={8}>
      <Card style={{maxWidth:512,margin:"0 auto",textAlign:"center",fontSize:'24px',color:'blueviolet'}}>SIGN UP</Card>
    </Grid>
  </Grid>)
}


export const Navbar =() =>{
  return(
  <nav>
  <Link to='/SignIn'>Sign In</Link>
  <Link to='/SignUp'>Sign Up</Link>
  </nav>
  )
  }
  