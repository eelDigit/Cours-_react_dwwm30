import React from "react";

const AgePersonne = (props) => {

    let maintenant = new Date();
    let annee = maintenant.getFullYear();

  return (
    <>
     <p>Age : {props.age} - ({annee - props.age})   </p>
    </>
  );
};



// class AgePersonne extends React.Component {
   
//     render() { 
//         return (
//                 <>
//                   <p>Age : {this.props.age} </p>
//                 </>
//               );
//     }
// }
 



export default AgePersonne;
