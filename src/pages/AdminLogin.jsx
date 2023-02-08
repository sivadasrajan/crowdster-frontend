import {useState, useRef} from 'react'
import {Link, useNavigate} from 'react-router-dom'

import React from 'react'
import TextInput from './components/TextInput'
import Header from './parts/Header'
import api from '../services/api'

function AdminLogin(){

    let navigate = useNavigate();

    const INITIAL_LOGIN_OBJ = {
        password : "",
        username : ""
    }

    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ)

    var self  = this;
    const submitForm = (e) =>{
        e.preventDefault()
        setErrorMessage("")
        if(loginObj.username.trim() === "")return setErrorMessage("Username required! (use any value)")
        if(loginObj.password.trim() === "")return setErrorMessage("Password is required! (use any value)")
        else{
            setLoading(true)
            Login(loginObj.username, loginObj.password).then((response) => {
                console.log(response.data);
                if(response.data.token)
                 localStorage.setItem("token",response.data.token);
                   navigate('/startup/create');
                //else
                  //self.setMessage(response.data.message)
          
                setLoading(false)
          
              }).catch((e) => {
                throw e;
                setLoading(false)
          
                this.setMessage('Something went wrong');
              });
            setLoading(false)
            
        }
    }

    const Login = async (email,password) => {
    
        const res = await api.post("/token", {
          'username': email,
          'password': password,
        });
  
        // const userData = await api.get<{}>("/auth/user");
        console.log(!!res);
        
        // localStorage.setItem("@Auth:access_token", res.data.access_token);
        // localStorage.setItem("@Auth:user", JSON.stringify('user'));
        return res;
    };

    const updateFormValue = ({updateType, value}) => {
        setErrorMessage("")
        setLoginObj({...loginObj, [updateType] : value})
    }

    return(
        <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />
            <div className="card mx-auto w-full max-w-5xl  shadow-xl">
                <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
                
                <div className='py-24 px-10'>
                    <h2 className='text-2xl font-semibold mb-2 text-center'>Login</h2>
                    <form onSubmit={(e) => submitForm(e)}>

                        <div className="mb-4">

                            <TextInput type="text" placeholder={"Username"} defaultValue={loginObj.username} updateType="username"  labelTitle="Username" updateFormValue={updateFormValue}/>

                            <TextInput defaultValue={loginObj.password}  placeholder={"Password"} type="password" updateType="password"  labelTitle="Password" updateFormValue={updateFormValue}/>

                        </div>

                        

                        <button type="submit" className={"btn mt-2 w-full btn-primary" + (loading ? " loading" : "")}>Login</button>

                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AdminLogin