import React, { Component } from "react";

import Personne from "./Personne";





function App() {
    return (
        <>
          <Personne nom= "Joe" age="58" sex="Homme"/>
          <Personne nom= "Jacques" age= "45" sex="Homme"/>
          <Personne nom= "Rose" age="22" sex= "Femme" /> 
        </>
    )
}

// ---------------------------------------------------
// class App extends Component {
//     render() {
//         return (

//             <>
//                 <h1>salut</h1>
//                 <p>les amis</p>
//                 <p>les amis</p>
//             </>
//         )
//     }
// }


export default App;



