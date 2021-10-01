import React from 'react'

//css
import classes from "./LandingPage.module.css";

//assets
import arrow from "../Assets/arrow.gif";

export default function LandingPage() {



    return (
        <div className={classes.root}>

            <div className={classes.title}>
            <h1 className={classes.title}><span>hi there!</span><span> i'm matthew! </span></h1>
            </div>

            <div className={classes.text}>
            <h3 className={classes.text}>scroll down to learn more about me...</h3>
            </div>

            <div>
              <a href="#aboutme">
            <img src={arrow} alt="arrow" className={classes.arrow} />
            </a>
            </div>
        </div>
    )
}
