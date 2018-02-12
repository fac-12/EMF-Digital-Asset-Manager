// import React from "react";
// import { Link } from "react-router-dom";

// export default ({ assets, end, subTags }) =>
//   Object.values(assets)
//     .slice(0, end)
//     .map(asset => (
//       <li key={asset.id}>
//         <Link to={`/Dashboard/${asset.id}`}>
//           <section className="card">
//             <img src="" />
//             <div>
//               <span>{asset.name}</span>
//               <img src="" />
//             </div>
//             <br />
//             {asset.tags.length
//               ? asset.tags.map(tag => <span key={tag}> {tag} </span>)
//               : null}
//           </section>
//         </Link>
//       </li>
//     ));
