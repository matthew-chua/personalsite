import React from "react";

//css
import classes from "./NavBar.module.css";

//assets
import resume from "../Assets/Resume PDF.pdf";
// import MenuIcon from '@material-ui/icons/Menu';

export default function NavBar(props) {
  return (
    <div className={classes.root}>
      <ul className={classes.wrapper}>
        <li className={classes.link} activeClassName={classes.activeLink} onClick={() => props.changeTab(1)}>
          home
        </li>
        <li className={classes.link} activeClassName={classes.activeLink} onClick={() => props.changeTab(2)}>
          projects
        </li>
        <li className={classes.link}>
          <a className={classes.resumeLink} target="_blank" rel="noreferrer noopener" href={resume}>
            resume
          </a>
        </li>
      </ul>
    </div>
  );
}
