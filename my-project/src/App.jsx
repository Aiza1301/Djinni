import React from "react";
import { Header } from "./components";
import { Route, Routes } from "react-router-dom";
import Candidat from "./pages/Candidates";


function App() {


  return (
    <>
    <Header/>
         <main className="main">
           <Routes>
            <Route path="/developers/" element={<Candidat/>}/>
           </Routes>
         </main>
    </>
  )
}

export default App

