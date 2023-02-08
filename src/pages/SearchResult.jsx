import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api.js';
import makeData from '../utils/makeData.js';
import Header from './parts/Header';
import HeroHome from './parts/HeroHome';
import Table from './parts/Table';


function SearchResult() {




  const [startups, setstartups] = useState([]);

  const allStartups = async () => {
    
    const res = await api.get("/get_all_company");

    // const userData = await api.get<{}>("/auth/user");
    console.log(!!res.data);
    
    // localStorage.setItem("@Auth:access_token", res.data.access_token);
    // localStorage.setItem("@Auth:user", JSON.stringify('user'));
    return res;
};


  const data = React.useMemo(() => makeData(20), [])
  useEffect(() => {
    // call api or anything
     allStartups().then((response) => {
      console.log(response.data);
      setstartups(response.data)
      
      
    }).catch((e) => {
      throw e;
      

      this.setMessage('Something went wrong');
    });;
    
 });
  function renderCards() {
    let items = [];
    startups.forEach(element => {
      items.push(<div className='flex flex-col  bg-gray-100 rounded shadow px-3 py-4'>
      <div className='flex flex-col justify-center items-center'>
        <div className='bg-blue-200 p-3 rounded-full w-12 h-12 font-bold text-blue-500'>ST</div>
      </div>
      <div className='text-md font-bold text-gray-500'>{element.name}</div>
      <div className='text-md text-gray-400'>CEO: <span>{element.ceo}</span></div>
      <div className='text-md text-gray-400'>CTO: <span>Name</span></div>
      <div className='text-md text-gray-400'>Address: <span>Name</span></div>
      <div className='flex flex-col justify-center items-center'>
        <Link to={"/startup/1"} className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Donate</Link>
      </div>
    </div>)
    });
    
    return items;
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <section className="relative">
          <div className=" bg-gray-100 flex  mt-16 md:mt-20">
            <div className="container mx-auto bg-blue-50 rounded-lg p-14">
              <form>
              <h1 className="text-center font-bold text-blue-600 text-4xl">Donate to your favourite startups</h1>
				
                <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
                  <input className="text-base text-gray-400 flex-grow outline-none px-2 " type="text" placeholder="Search your domain name" />
                  <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">

                    <button className="bg-blue-500 text-white text-base rounded-lg px-4 py-2 font-thin">Search</button>
                  </div>
                </div>
              </form>


            </div>

          </div>
          <div className="container mx-auto p-14">
            <div className="grid grid-cols-4 gap-4">
              {renderCards()}
            </div>
          </div>

        </section>

      </main>



      {/*  Site footer */}


    </div>
  );
}

export default SearchResult;
