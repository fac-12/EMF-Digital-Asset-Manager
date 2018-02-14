import React from "react";


export default () => {
   const onChange = e => {
     onSearchTerm(e.currentTarget.value);
   };
   return (
     <div>
      <input
        type = "text"
        value= {"searchTerm"}
        onChange={onChange}
        placeholder="enter search term..."
      />



     </div>
   )
}
