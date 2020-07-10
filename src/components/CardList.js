import React from 'react';
import Card from './Card'
// import { robots } from '../robots';

const CardList = ({ robots }) => {
     return(   
        robots.map((user, i) => {
            return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
        })
    );
} 


export default CardList;

// loop created
// const CardList = ({ robots }) => {
//     const cardArray = robots.map((user, i) => {
//         return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
// })
//     return (
//         <div>
//           {cardArray}
//         </div>
//     );
// } 

// original
// const CardList = ({ robots }) => {
    //     return (
    //         <div>
    //           <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
    //           <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
    //           <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
    //         </div>
    //     );
    //     } 
    
// apply card & extra id from cards 1 & 2. I need them for all cards though.
    // { robots } => {
    //     <Card id={robots[0].id} />
    //     <Card id={robots[1].id} />
    // }
// Use map function to create a new array applying Card & extrating from each object
    // { robots } => {
    //     robots.map((value, i) => {
    //         return (
    //             <Card id={robots[i].id} />
    //         )
    //     }
    // }
// This entire array is to be returned. This is the modded card list. 
    // const CardList = ({ robots }) => {
    //     return (
    //          robots.map((value, i) => {
    //             return (<Card id={robots[i].id} />)
    //         }
    //     )
    // )
// }