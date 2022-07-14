<script lang="ts">
  import { Link, Router } from "svelte-routing";
  import Logo from "./assets/images/svelte-logo.svg";
  import { msalConfig } from './auth-config'
  
  let loggingIn = false;

  async function handleSignIn() {
    const handleResponse = (response) => {
        console.log(response);
        
        if (response !== null) {
            console.log(`User: ${response.account.username} has logged in.`)            
        } else {
            //selectAccount();
            console.log("TODO")
        }
    }

    //Note MSAL is import via CDN through Single-SPA
    if(!msal) return ;

    //Note MSAL is import via CDN through Single-SPA
    const msalInstance = new msal.PublicClientApplication(msalConfig);
    msalInstance.loginPopup({
        scopes: ["openid", "profile","User.Read"]
    })
      .then(handleResponse)
      .catch(error => {
          console.error(error);
      });
  }
</script>

 <Router url="">
  <div id="login-page">
    <div id="login-form">
      <div id="left">
        <img id="logo" src={Logo} alt="logo" />
      </div>

      <div id="right">
        <div id="top">
          <h1>It's Dangerous out there...use this template.</h1>        
        </div>
        <div id="links">
          <span><Link to="/home">Home</Link></span>
          <span><Link to="/profile">Profile</Link></span>
        </div>
        <div id="bottom">
          <button on:click={handleSignIn}>Sign In</button>
        </div>
      </div>

    </div>
  </div>
</Router>


<style>
  #links {
    margin: 15px;
  }
  #login-page {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;    
  }

  #login-form {
      display: flex;
      width: 50%;
      height: 500px;
  }
  #left {
    flex: 1;
    display: flex;
    justify-content: center;
    padding: 40px;
    background-color: blue;
  }

  #right {
    flex: 1;
    display: flex;
    padding: 40px;
    height: 100%;
    flex-direction: column;
    align-items: center;
    border-left: none;    
  }
  #logo {
    width: 100%;
  }
  
  #top {
      flex: 3;
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  h1 {
    font-weight: 100;
  }
  #bottom {
    flex: 2;
  }      
</style>

