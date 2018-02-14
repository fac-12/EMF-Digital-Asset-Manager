import React from "react";

import pdf from "../images/pdf.svg";
import mp4 from "../images/video-player.svg";
import zip from "../images/zip.svg";
import picture from "../images/picture.svg";
import webm from "../images/video-player.svg";
import link from "../images/link.svg";

export  default (file)=> {
   switch (file.filetype) {

               case "video/mp4": {
                   return (<img className="img-container"  src={mp4}  />);
               }
      case "application/pdf": {
                   return (<img className="img-container"  src={pdf}  />);
               }
      case "video/webm": {
                   return (  <img className="img-container" src={webm}  />);
               }
      case "application/zip": {
                   return (  <img className="img-container"  src={zip}  />);
               }
      case "image/jpeg": {
                   return (  <img className="img-container"  src={picture}  />);
               }

      case  null: {
           return (  <img className="img-container"  src={link}  />);
               }

      case  "": {
                   return (  <img className="img-container"  src={link}  />);
               }
               default: {
                   return <div>No asset</div>;
               }
           }
       }
