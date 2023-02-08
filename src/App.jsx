import Landing from './pages/Landing';
import React from 'react';
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import SearchResult from './pages/SearchResult';
import Donate from './pages/Donate';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route  path="/" element={<Landing />} />
        <Route  path="/search-result" element={<SearchResult />} />
        <Route  path="/startup/:id" element={<Donate />} />
        {/* <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} /> */}
      </Routes>
    </>
  );
}

export default App
