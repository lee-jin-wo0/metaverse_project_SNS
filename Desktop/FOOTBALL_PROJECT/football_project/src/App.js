import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Table from './components/table';
import { fetchFixtures } from './lib/fetch-data';
import {data} from './lib/dummy-data';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Fixture from './components/fixture';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Footer from './components/footer';

function App() {

  const [fixtures, setFixtures] = useState(data);
  // const fetchData = async() => {
  //   const result = await fetchFixtures();
  //   setFixtures(result);
  // };
  // useEffect(() =>{
  //   fetchData();
  // }, []);

  console.log(fixtures);

  const refresh = () => window.location.reload(true);

  return (
    <div className='w-full md:w-[700px] lg:w-[800px] m-auto'>
    <NavBar/>
    <button onClick={refresh} className='btn btn-sm fixed bottom-3 right-2 z-40'>
      refresh
    </button>
    {fixtures.length > 0 ? (
      <div className='h-screen bg-white w-full text-center p-10'>
        <Box>
          <CircularProgress />
        </Box>
      </div>
    ) : (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Table data={fixtures}/>}></Route>
        <Route
          path="/fixture/:matchID"
          element={<Fixture data={fixtures}/>}
        ></Route>
      </Routes>
    </BrowserRouter>
    )}

    <Footer />
    </div>
  );
}

export default App;
