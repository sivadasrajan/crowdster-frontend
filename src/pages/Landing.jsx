import React from 'react';
import Header from './parts/Header';
import HeroHome from './parts/HeroHome';


function Landing() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <HeroHome></HeroHome>
        {/*  Page sections */}
     
      </main>

      

      {/*  Site footer */}
      

    </div>
  );
}

export default Landing;