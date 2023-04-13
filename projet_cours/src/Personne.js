import React, { Component } from "react";
import AgePersonne from "./AgePersonne";


// function Personne(props){
//     return(
//         <>
//             <h1> {props.nom} </h1>
//             <p>Age : {props.age} </p>
//             <p>Sex : {props.sex} </p>
//         </>
//     )
// }

// ---------------------------------------
//  const Personne = (props) =>{
//     return(
//         <>
//             <h1> {props.nom} </h1>
//             <p>Age : {props.age} </p>
//             <p>Sex : {props.sex} </p>
//         </>
//     )
// }


class Personne extends Component {

    // constructor(props){
    //     super(props);
    // }


    render() {
        return (
            <>
           
                <h1> {this.props.nom} </h1>
                {/* <p>Age : {this.props.age} </p> */}

                <AgePersonne age = {this.props.age} />


                <p>Sex : {this.props.sex} </p>
            </>

        );
    }
}





export default Personne;


