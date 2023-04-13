import React from "react";

import Personne from "./Personne";
import Title from "./Title";
import Horloge from "./Horloge";



// function App() {
//     return (
//         <>

//           <Horloge />
//           <Title />
//           <Personne nom= "Joe" age="58" sex="Homme"/>
//           <Personne nom= "Jacques" age= "45" sex="Homme"/>
//           <Personne nom= "Rose" age="22" sex= "Femme" /> 
//         </>
//     )
// }

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


// [autre methode ]______________________________________


class App extends React.Component {
  state = {
      personnes: [
       {nom: "Joe", age:"58", sex:"Homme" },
       {nom: "Jacques", age:"45", sex:"Homme" },
       {nom: "Rose", age:"22", sex:"Femme" }
       ]

    } 


//  bonjour() {
//   console.log(this);
// }
 bonjour = (e) => {
  // alert("Salut les amis !")
  console.log(e.target);

}



 
  render() { 
    return (

            <>
            <Horloge />
            <Title />
            <Personne  
            nom= {this.state.personnes[0].nom} 
            age= {this.state.personnes[0].age}  
            sex= {this.state.personnes[0].sex}
            />
             <Personne {...this.state.personnes[1]} />
             <Personne {...this.state.personnes[2]} />

              <button onClick={ () => alert("salut") } > Anniv </button>
              <button onClick={ this.bonjour } > Bonjour </button>

            </>

    );
  }
}


export default App;



