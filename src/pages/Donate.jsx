import React from 'react';
import { useParams } from 'react-router-dom';
import makeData from '../utils/makeData.js';
import TextInput from './components/TextInput.jsx';
import Header from './parts/Header';
import HeroHome from './parts/HeroHome';
import Table from './parts/Table';


function Donate() {


  let { id } = useParams();

  const data = React.useMemo(() => makeData(20), [])


  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="flex-grow">
        <section className="relative">
        <div className="container mx-auto p-14">

          <div className=" bg-gray-50  flex flex-col items-center justify-center  mt-16 md:mt-20">
           <div className='text-blue-600 text-8xl'> $6942000</div>
           <div className='text-gray-500 font-bold text-ms'> Raised so far</div>
           <TextInput type="number" labelTitle={"Amout to donate"} updateType="amount" placeholder={"eeee"} updateFormValue={()=>{}}></TextInput>
           <div className='textext-md'> Donate now to Startup</div>

            {id}
            

          </div>
         </div>

        </section>

      </main>



      {/*  Site footer */}


    </div>
  );
}

export default Donate;