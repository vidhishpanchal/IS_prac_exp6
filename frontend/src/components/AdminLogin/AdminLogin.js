import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { adminLogin } from "../../actions/adminActions";
import { useDispatch, useSelector  } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import "./adminlogin.css"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button";

const styles = makeStyles({
  login: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginDiv: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '5px 5px 25px 5px gray',
    padding: '30px',
    borderRadius: '30px',
    margin: '30px auto',
  },
  // @media only screen and (maxWidth: '600px') {
  //   loginDiv: {
  //     width: '70%',
  //   }
  // }
  logo: {
    width: '100px',
  },
  loginButton: {
    width: '170px',
    display: 'flex !important',
    justifyContent: 'center !important',
    alignItems: 'center !important',
    margin: '5px auto !important',
    borderRadius: '999px !important',
  }
})

const Login = () => {
  const classes = styles()
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const admin = useSelector((state)=> state.admin.adminDetails.data)

  const onSubmit = async (e) => {
      e.preventDefault();
      dispatch(adminLogin(email, password))
  };

  useEffect(()=> {
    if(admin && admin.isAdmin===true) {
      history.push("/admin/access")
    }
  },[admin])
  // const classes = useStyles();
  
  return (
    
    <div className={classes.login}>
      <div className={classes.loginDiv}>
        <div>
        <div style={{display:"flex"}}>
          <img src={"https://www.kindpng.com/picc/m/699-6997452_administrator-network-icons-system-avatar-computer-transparent-admin.png"} alt="logo" className="logo" />
          <h1 style={{marginLeft:"5%"}}>Welcome, Admin!</h1>
          </div>
          <hr />
          <p>
            Not an admin? Visit our{" "}
            <a href="https://localhost:3000/">website!</a>
          </p>
        </div>
        <div className="signin">
          <h1>Sign In</h1>
          <form onSubmit={onSubmit}>
            <div>
              <TextField
              variant="outlined"
                margin="normal"
                required
                fullWidth
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div>
              <TextField
              variant="outlined"
                margin="normal"
                required
                fullWidth
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <div>
              <Button  variant="contained"
              color="primary" onClick={onSubmit} className="loginButton">Sign In</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;