import React from "react";
import Login from "./Login";
import { Helmet } from "react-helmet-async";
function Home() {


  return (
    <>
      <Helmet>
        <title>Brainy Bunch</title>
      </Helmet>
      <div style={{backgroundColor:"#E5E7EB"}}>
     <Login />  
      </div>
   
    </> 
  );
}




export default Home;
