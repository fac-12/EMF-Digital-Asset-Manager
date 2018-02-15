import React from "react";

import pdf from "../images/pdf.svg";
import mp4 from "../images/video-player.svg";
import zip from "../images/zip.svg";
import picture from "../images/picture.svg";
import webm from "../images/video-player.svg";
import link from "../images/link.svg";
import back from "../images/left-arrow.svg";

export default file => {
  switch (file.filetype ? file.filetype : file) {

               case "video/mp4": {
                   return (<img className="img-container"  src={mp4}  alt={`${file.filetype}`} />);
               }
      case "application/pdf": {
                   return (<img className="img-container"  src={pdf}   alt={`${file.filetype}`} />);
               }
      case "video/webm": {
                   return (  <img className="img-container" src={webm}  alt={`${file.filetype}`}  />);
               }
      case "application/zip": {
                   return (  <img className="img-container"  src={zip}   alt={`${file.filetype}`} />);
               }
      case "image/jpeg": {
                   return (  <img className="img-container"  src={picture}  alt={`${file.filetype}`} />);
               }
      case "back-btn": {
                 return (
                   <img className="back-btn" src={back} alt="back button to dashboard" /> );
               }

      case  null: {
           return (  <img className="img-container"  src={link}  alt={`${file.filetype}`} />);
               }

      case  "": {
                   return (  <img className="img-container"  src={link}  alt={`${file.filetype}`} />);
               }
               default: {
                   return <div>No asset</div>;
               }
           }
       }
