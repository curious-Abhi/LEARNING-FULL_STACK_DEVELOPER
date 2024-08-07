// import { Fragment } from "react";
// import Add from "./components/Add";
// import Greetings from "./components/Greetings";

//import { useState } from "react";

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

// NOW BY REACT BOOTSTRAP Or TAILWIND CSS

/*************************************************   EVENT  *************************************** */

/*
const Button =()=>{

  const clickhandler=(a,b)=>{
   // alert(" you clicked me ");
   console.log(a+b);
  };
    return <button onClick={()=>clickhandler(2,2)}>Click</button>
}


function App(){
  return (
    <Button/>
  );
}
*/

/*
const Copy =()=>{

  const copyHandler=()=>{
    alert("stop stealing my content")
    console.log("stop stealing my content")
};
 return (
  <>
  
  <p  onCopy={copyHandler}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid reiciendis at repellendus facilis maxime, cum distinctio tempora, temporibus ratione ipsum sequi ea corporis accusantium ad dicta a esse nesciunt magnam.</p>
  </>
 );
};

function App(){
  return (
    <>
      <Copy/>
    </>
  );
};
*/

/*
const Move=()=>{
  const Movehandler=()=>{
    //console.log("you hovered me")
    alert("idk")
  }
  return (
   <>
   <p onMouseMove={Movehandler}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quidem explicabo, earum architecto odio ut quibusdam molestias corporis itaque aspernatur deleniti autem iure officia ipsam inventore ducimus sed corrupti. Id.</p>
   </>

  );
}
function App(){
  return (
  <>
     <Move/>
  
  </>

  );
}

*/
/****************************    STATE  , HOOKS , USESTATE******************************** */

/*

import { useState } from "react";


const Counter=()=>{
  const [count,setCount]=useState(0);

  const increment=()=>{
    setCount(count+1);
  };
  const decrement=()=>{
    setCount(count-1);
  }
  return(
    <>
      <h1>COUNTER PROGRAM</h1>
     <h1>{count}</h1>
     <button onClick={increment}>+</button>
     <button onClick={decrement}>-</button>
    </>
  );
}

function App(){

  return (
    <>
  <Counter/>

    </>
  );
};

*/

/*

import { useState } from "react";

const Name = () => {
  const [Username, Setusername] = useState("unknown");
  const nchange=()=>{
     Setusername("abhishek");
  }
  return (
    <>
      <h1>{Username}</h1>
      <button onClick={nchange}>change name</button>
    </>
  );
};

function App() {
  return (
    <>
      <Name />
    </>
  );
}

*/

/***********************************  ARRAY STATE   *****************************************/

/*
import { useState } from "react";

function App(){

  const [friends,setFriends]=useState(["Ani","Abhi"])
  const addNew=()=>{
    setFriends([...friends,"Aniket"])
  }

  const removeOne=()=>
    setFriends(friends.filter(f=>(f!=="Ani")))

  const updateOne=()=>
     setFriends(friends.map(f=>(f==="Abhi"? "kumar":f)))


  return (
   <>
    {friends.map(f=>(
      <li key={Math.random()}>{f}</li>
    ))} 


     <button onClick={addNew}>Add one</button>
     <button onClick={removeOne}>Remove one </button>
     <button onClick={updateOne}>Update one</button>
     
   </>

  );
}
*/

/*

import { useState } from "react";


function App(){

  const [movie,setMovie]=useState({
    title:"Animal",
    ratings:7
  });

  const handler=()=>{
    // const copyMovie={
    //   ...movie,
    //   ratings:5
    // };
    // setMovie(copyMovie);
    setMovie({...movie,ratings:5})
  };
  return (
    <>
    <h1>{movie.title}</h1>
    <h1>{movie.ratings}</h1>
    <button onClick={handler}>change ratings</button>
    
    </>
  );
}

*/

/*
function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Animal", ratings: 7 },
    { id: 2, title: "Krrish 3", ratings: 9.2 },
  ]);

  const handler=()=>{
    setMovies(movies.map(m=>(m.id===1?{...movies,title:"Joker"}:m)));
  }
  return (
    <>
      {movies.map((movie) => (
        <li key={Math.random()}>{movie.title}</li>
      ))}

      <button onClick={handler}>change name</button>
    </>
  );
}

*/

/*********************************************FORMS****************************************/

/*
import { useState } from "react";
function App() {
  const [username, setUsername] = useState("");
   const handleChange=(event)=>{
    setUsername(event.target.value)
   }
    const handleSubmit=(event)=>{
      event.preventDefault()
      alert(`you typed :${username}`)
      setUsername("");
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>form demo</p>
        <input type="text" value={username} onChange={handleChange} />
        <button>submit</button>
      </form>
    </>
  );
}

*/

/***************************************USE EFFECT() *************************************/

import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  //1.render for the {first time}

  useEffect(() => {
    console.log("Hello World");
    document.title=`increment(${value})`
  });

  return (
    <>
      <h1 key={value}>{value}</h1>
      <button onClick={() => setValue(value + 1)}>click me</button>
    </>
  );
}
export default App;
