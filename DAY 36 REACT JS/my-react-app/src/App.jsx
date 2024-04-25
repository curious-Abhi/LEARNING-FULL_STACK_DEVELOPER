// import { Fragment } from "react";
// import Add from "./components/Add";
// import Greetings from "./components/Greetings";

// function App(){
//   return (
//     <Fragment>
//         <Add/>
//         <Greetings/>
//   </Fragment>
//   )
  
 
// }

// function App(){
//   return(
//     <>
//         <Add/>
//         <Greetings/>
//     </>
//   )
// }

//{Expression in JSX}


// function App(){
//   const MyName="Curious Abhi";
//   const multiply=(a,b)=>a*b;
//   const specialClass="not-simple-class";

//   return(
//     <>
//     <h1>{MyName}</h1>
//     <p>2*2:{2*2}</p>
//     <p>My Friend List:{["Raju","Sohan","Amit"]}</p>
//     <p>4*4:{multiply(4,4)}</p>
//     <p className="{specialClass}">This is a special class</p>
//     </>
//   );
// }

//Lists 

/*

function App(){
  const userinfo=[
  {
    username: "Aniket Kumar",
    email:"anik483@gmail.com",
    location:"Pakistan"
  },
  {
    username: "Ani Kumar",
    email:"anr553@gmail.com",
    location:"Iran"
  },
  {
    username: "Raju Kumar",
    email:"raju483@gmail.com",
    location:"Pakistan"
  }
  ]

  return(
    <>
    {userinfo.map((user)=>(
      <ul key={Math.random*10}>
        <li>{user.username}</li>
        <li>{user.email}</li>
        <li>{user.location}</li>

      </ul>
    ))}
    
    </>
  )
}

*/

//*******************************    PROPS    **********************************************/

/*
const User=(props)=>{
  return(
 <section>
  <img src={props.img} alt={props.name} />
  <h1>Name:{props.name}</h1>
  <h1>Hobbies:{props.hobbies}</h1>

 </section>
  );
}*/
// can also be done by importing 
/*
import User from "./components/user";
 
function App(){
return(
    <>
     <User
      img="https://avatars.githubusercontent.com/u/139208472?v=4"
      name="Abhishek kumar"
      hobbies={["coding","sleeping","writing"]}
      age={18}
     >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quae aliquid laboriosam eum ex architecto quo exercitationem recusandae! Nesciunt nobis quis facilis saepe ea sit, officiis obcaecati veritatis voluptatibus ipsum!</p>

      <h1>Hello i  am children</h1>
     </User>
    </>
  );
}

*/


/***********************************************CONDITIONAL RENDERENING **********************************************/
/*
const ValidPassword=()=> <h1>Valid Password</h1>
const InvalidPassword=()=> <h1>Invalid Password</h1>

const Password=({isValid})=>{
    if(isValid){
      return <ValidPassword/>
    }
    return <InvalidPassword/>
}

function App(){
  return(
       //<Password isValid={true}/>  
       <Password isValid={false}/>  
  );
}

*/


// one more example 

/*
const Cart=()=>{
  const items=["Wireless Earbuds" ,"Power Bank","New SSD" , "Hoodies","shoe"]
  return(
    <>
    <h1>CART</h1>
    {items.length>0 && <h2>You have {items.length} items in your cart</h2>}
    <ul>
      <h4>Products</h4>
      {items.map(item =>(
        <li key={Math.random()}>{item}</li>
      ))}
      
    </ul>
    </>
  )
}

function App(){
  return(
   <>
     <Cart/>
   </>
  );
}


*/


/******************************************  TERNARY OPERATOR  ***************************************** */
  



/*
const ValidPassword=()=> <h1>Valid Password</h1>
const InvalidPassword=()=> <h1>Invalid Password</h1>


const Password=({isValid})=>{

  return isValid? <ValidPassword/>:<InvalidPassword/>;
};

function App(){
  return(
       //<Password isValid={true}/>  
       <Password isValid={false}/>  
  );
}

*/


/***********************************  STYLES       *************************************** */
//                                All  APPLYING STYLING 


/*
function App(){
  return (

    <>

    <h1  style={{color:"red" ,backgroundColor:"teal"}}>   Hello My name is Abhishek Kumar</h1>
    </>
  );
}

*/


// ANOTHER WAY OF STYLING

/*
function App(){

  const s={
    color:"white",
    backgroundColor:"crimson",
    padding:"10px"
  }
  return (
    <>
     <h1 style={{color:s.color  , backgroundColor:s.backgroundColor  , padding:s.padding}}>this is another way of styling </h1>
    </>
  )
}

*/

//   Now by separate css files   

// this is done by importing

/*

import './index.css'

function App(){
  return (

    <>
      <h1>this styling is done by importing external css file </h1>
    </>
  )
}

*/

// NOW BY REACT BOOTSTRAP 


 export default App;