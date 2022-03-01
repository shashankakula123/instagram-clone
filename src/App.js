
import { useEffect, useState } from 'react';
import './App.css';
import Post from './Post';
import {db} from './fire.js';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Button,Input} from '@material-ui/core';

function getModalStyle(){
  const top=10;
  const left=10 ;

  return{
    top:`${top}%`,
    left:`${left}%`,
    transform:`translate{~${top}%,~${left}%,}`
  };
}

const useStyles=makeStyles((theme)=>({
  paper:{
    position:'absolute',
    width:400,
    backgroundColor:theme.palette.background.paper,
    border:'2px solid #000',
    boxShadow:theme.shadows[5],
    padding:theme.spacing(2,3,4),

  },
}));

function App() {
  const classes=useStyles();
  const [posts,setPosts]=useState([]);
const [open,setOpen]=useState(false);
const [modalStyle]=useState(getModalStyle);
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [username,setUsername]=useState("");
useEffect(()=>{
db.collection('posts').onSnapshot((snapshot)=>{
  setPosts(snapshot.docs.map(doc=>({
    id:doc.id,
    post:doc.data()
  })));
})
},[])

const signup=()=>{
  return(<></>)
}




  return (
    <div className="app">


<Modal
open={open}
onClose={()=>setOpen(false)}
>

  <div style={modalStyle} className={classes.paper} > 
  <form className='app__form'>
<center>
<img className="app__headerimage" src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' alt='instagram' />
<br/>
<Input 
type="text"
placeholder="username"
value={username}
style={{width:'400px'}}
onChange={(e)=>setUsername(e.target.value)}
/>
<br/>
<Input 
type="text"
placeholder="email"


style={{width:'400px'}}
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>
<br/>
<Input  
type="password"
placeholder="password"


style={{width:'400px'}}
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>
<br/>
<Button onClick={signup}>SignUp</Button>
</center>
</form>
  </div>



</Modal>

<div className='app__header'>
  <img className="app__headerimage " src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' alt='instagram' />

</div>
<Button onClick={()=>setOpen(true)}>Sign Up</Button>
{
  posts.map(({id,post})=>{
    return(<Post key={id}  username={post.username} imageUrl={post.imageUrl} caption={post.caption}/>);
  })
}
    </div>
  );
}

export default App;
