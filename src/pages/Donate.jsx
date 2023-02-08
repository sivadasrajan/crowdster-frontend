import { object } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api.js';
import makeData from '../utils/makeData.js';
import TextInput from './components/TextInput.jsx';
import Header from './parts/Header';
import HeroHome from './parts/HeroHome';
import Table from './parts/Table';


function Donate() {


  let { id } = useParams();

  const data = React.useMemo(() => makeData(20), [])


  const [startup, setstartup] = useState({
    name : "",
    ceo : "",
    cto:"",
    address:"",
    email:"",
    website:"",
    following:0,
    donation:10,
    

});
  const allStartup = async () => {
    
    const res = await api.get("/get_company/"+id);

    // const userData = await api.get<{}>("/auth/user");
    console.log(!!res.data);
    
    // localStorage.setItem("@Auth:access_token", res.data.access_token);
    // localStorage.setItem("@Auth:user", JSON.stringify('user'));
    return res;
};

useEffect(() => {
  // call api or anything
   allStartup().then((response) => {
    console.log(response.data);
    setstartup(response.data)
    
    
  }).catch((e) => {
    throw e;
    

    this.setMessage('Something went wrong');
  });;
  
});



  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="flex-grow">
        <section className="relative">
        <div className="container mx-auto p-14">

          <div className=" bg-gray-50  flex flex-col items-center justify-center  mt-16 md:mt-20">
           <div className='text-blue-600 text-8xl'> {'₹ '+startup.donation}</div>
           <div className='text-gray-500 font-bold text-ms'> Raised so far</div>
           <div className="w-80">

           <TextInput type="number" labelTitle={""} updateType="amount" placeholder={"Enter the amount to donate "} updateFormValue={()=>{}}></TextInput>
           </div>
           <button className="btn mt-2 btn-primary">Pay now !</button>
           <div className='textext-md text-lg'> Donate now to <span className="text-blue-500 font-bold">{startup.name}</span></div>
             

          </div>
         </div>

        </section>

      </main>



      {/*  Site footer */}


    </div>
  );
}

export default Donate;