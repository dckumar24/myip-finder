import React, {useEffect, useState} from 'react';
import './App.css';
import Dashboard from './Dashboard';
import loader from './asset/loading.gif';

  
function App() {
  const [toDisplay,setToDisplay]=useState(true);
  const [myIp,setMyIp]=useState(null);
  const [name, setName] = useState('');

  useEffect(()=>{
    const loggedIn=localStorage.getItem('MYIP');
    if(loggedIn){
      const {name,ip}=JSON.parse(loggedIn);
      fetch('https://api.ipgeolocation.io/ipgeo?apiKey=a155bf40dee249f28b966a7e169d368c&ip='+ip)
      .then((response)=>response.json())
      .then((data)=>{setMyIp(data);setToDisplay(true); setName(name) ;console.log(ip)});
    }
  },[]);  

  const loginHandler=(e)=>{
    e.preventDefault();
setToDisplay(false);

    fetch('https://api.ipgeolocation.io/ipgeo?apiKey=a155bf40dee249f28b966a7e169d368c')
    .then((response)=>response.json())
    .then((data)=>{setMyIp(data);setToDisplay(true);
    localStorage.setItem('MYIP',JSON.stringify({name:name,ip:data.ip}))
    });

    // const clearData=setInterval(()=>{
    //   if(toDisplay===true){
    //     setName('');
    //     setMyIp(null);
    //     clearInterval(clearData);
    //   }
    // },5000)
  }
const inputHandler=(e)=>{
    setName(e.target.value);
};
 
  return (
    <div className="App">
      {myIp!==null?<h2 className="note">Hello {name}😎</h2>:null}
      
      (<div className="container">
     {myIp===null?(<div className="login-card">
     <form onSubmit={loginHandler}>
       Name<br/>
       <input onChange={inputHandler} value={name} placeholder="Enter the name"></input>
       <br/>
       <button className="login_button" type="submit" disabled={!(name&&name.length>5)}>Find My IP</button>
       </form>
     </div>):null}
     
     {myIp!==null?<div className="data-card">
      <Dashboard detail={myIp} name={name}></Dashboard>
     </div>:toDisplay?null:<img width="100px" src={loader} alt="loading"/>}
     </div>

     <footer className="foot">Build with ⌨ and 💛 by DC</footer>
    </div>
  );
}

export default App;
