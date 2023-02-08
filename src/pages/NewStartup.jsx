import {useState, useRef} from 'react'
import {Link, useNavigate} from 'react-router-dom'

import React from 'react'
import TextInput from './components/TextInput'
import Header from './parts/Header'
import api from '../services/api'

function NewStartup(){

    let navigate = useNavigate();

    const INITIAL_LOGIN_OBJ = {
        name : "",
        ceo : "",
        cto:"",
        address:"",
        email:"",
        website:"",
        following:0,
        donation:0,
        

    }

    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ)

    const submitForm = (e) =>{
        e.preventDefault()
        setErrorMessage("")

        if(loginObj.name.trim() === "")return setErrorMessage("Name of startup required!")
        if(loginObj.ceo.trim() === "")return setErrorMessage("CEO of startup required!")
        if(loginObj.cto.trim() === "")return setErrorMessage("CTO of startup required!")
        if(loginObj.address.trim() === "")return setErrorMessage("ADDRESS of startup required!")
        if(loginObj.email.trim() === "")return setErrorMessage("EMAIL of startup required!")
        if(loginObj.website.trim() === "")return setErrorMessage("WEBSITE of startup required!")
        
        else{
            setLoading(true)
            createStartup(loginObj).then((response) => {

               console.log(response.data);
                setLoading(false)
                setLoading(false)
                setLoading(false)
                setLoading(false)
                setLoading(false)
          
              }).catch((e) => {
                throw e;
                setLoading(false)
          
                this.setMessage('Something went wrong');
              });
            setLoading(false)
            
        }
    }

    const createStartup = async (obj) => {
        obj.jwt  = localStorage.getItem('token');
        const res = await api.post("/add_company", obj);
  
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
                    <h2 className='text-2xl font-semibold mb-2 text-center'>Create new startup</h2>
                    <form onSubmit={(e) => submitForm(e)}>

                        <div className="mb-4">

                            <TextInput type="text" placeholder={"NAME"} defaultValue={loginObj.name} updateType="name"  labelTitle="Name of startup" updateFormValue={updateFormValue}/>
                            <TextInput type="text" placeholder={"CTO"} defaultValue={loginObj.cto} updateType="cto"  labelTitle="CTO of startup" updateFormValue={updateFormValue}/>
                            <TextInput type="text" placeholder={"ADDRESS"} defaultValue={loginObj.address} updateType="address"  labelTitle="ADDRESS of startup" updateFormValue={updateFormValue}/>
                            <TextInput type="text" placeholder={"EMAIL"} defaultValue={loginObj.email} updateType="email"  labelTitle="EMAIL of startup" updateFormValue={updateFormValue}/>
                            <TextInput type="text" placeholder={"WEBSITE"} defaultValue={loginObj.website} updateType="website"  labelTitle="WEBSITE of startup" updateFormValue={updateFormValue}/>
                            
                            
                            

                            

                        </div>

                        

                        <button type="submit" className={"btn mt-2 w-full btn-primary" + (loading ? " loading" : "")}>Create</button>

                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default NewStartup