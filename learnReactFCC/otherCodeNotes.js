// Various Exercise Code



// import React from 'react';
// import ListItems from './ListItems';

// function App() {
//     return(
//         <div>
//             <h1>My ToDo List</h1>
//             <ListItems />
//         </div>
//     )
// }

// export default App;

// import React from 'react';

// function ListItems() {
//     return(
//         <div>
//             <section>
//                 <input type="checkbox"/> <span>Feed the Cat</span>
//             </section>
//             <section>
//                 <input type="checkbox"/> <span>Mow the Lawn</span>
//             </section>  
//             <section>
//                 <input type="checkbox"/> <span>Wash the Dishes</span>
//             </section>                    
//         </div>
//     )
// }

// export default ListItems;


// function App() {
//     const firstName = "Bob";
//     const lastName = "Ziroll";

//     return (
//         <h1>Hello {`${firstName} ${lastName}`}!</h1> // curly braces signify JavaScript
//     )
// }


// function App() {
//     const date = new Date();
//     const hours = date.getHours()
//     let timeofDay;

//     if (hours < 12) {
//         timeOfDay = "morning";
//     }
//     else if (hours >= 12 && hours < 17) {
//         timeOfDay = 'afternoon';
//     }
//     else {
//         timeofDay = 'night;'
//     }

//     const styles = {
//         color: '#FF8C00',
//         backgroundColor: '#FF2D00',
//         fontSize: "200px"
//     }

//     return (
//         <h1 style={styles}>Good {timeOfDay}!</h1>
//     )
// }