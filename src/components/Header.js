import React,{useState} from "react";
import { ReactDOM } from "react";
import { Fragment } from "react";
import classes from "./Header.module.css"
import juneboxImage from "../../src/june-box-drawing.avif"

function Header(){
    useState();
    const clickHandler=()=>{
        console.log("clicked!!!");
    }
return(
<Fragment>
<header>
    
<nav>
<img className={classes.logo} src = {juneboxImage}  alt = "logo"></img>
<div className = {classes.row}>
    

<ul className={classes.mainnav}>
<li>
    <button onClick={clickHandler}>
    <a href ="http://localhost:61220/Playlist">Playlist</a>
    </button>
</li>
<li><a href ="#">Github</a></li>
<li><a href ="#">Resume</a></li>
<li><a href ="#">LinkedIn</a></li>



</ul>


</div>


</nav>


<div className="herotextbox" alt = "herotextbox">
<h1>JuneBox</h1>
<h4>Music Playlist</h4>
</div>
</header>




</Fragment>

);


}

export default Header;