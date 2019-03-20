import App from "./App";

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


// import React from 'react';
// import ContactCard from './ContactCard';

// function ContactCard() {
//     return (
//         <div className="contacts">
//             <ContactCard />
//             <ContactCard />
//             <ContactCard />
//             <ContactCard />
//         </div>




//         <div className="contact-card">
//             <img src="http://placekitten.com/300/200"/>
//             <h3>Mr. Whiskerson</h3>
//             <p>Phone: (212) 555-1234</p>
//             <p>Email: mr.whiskaz@catnap.meow</p>
//         </div>
//     )
// }

// export default ContactCard;


// JOKES APP

// JOKE.JS
// import React from 'react';

// function Joke(props) {
//    if (props.question == undefined) {
//        return (
//            <h3>{props.answer}</h3>
//        )
//    }
//    else {
//         return (
//             <div>
//                 <h5>{props.question}</h5>
//                 <h3>{props.answer}</h3>
//             </div> 
//         )
//    }
// }

// export default Joke;

// APP.JS

// import React from 'react';
// import Joke from './Joke';

// function App() {
//     return (
//         <div className="container">
//             <h1 style={{backgroundColor: 'lightsalmon', margin: '0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Jokes!</h1>
//             <div style={{backgroundColor: 'lightgreen'}}>
//                 <Joke
//                     question="What did the janitor say when he jumped out of the closet??"
//                     answer="Supplies!!"
//                 />
//             </div>
//             <div style={{backgroundColor: 'lightblue'}}>
//             <Joke 
//                 question="What do you call an elephant that doesn't matter??"
//                 answer="An irrelephant"
//             />
//             </div>
//             <div style={{backgroundColor: 'pink', fontSize: '15px'}}>
//                 <Joke
//                     answer="I don’t play soccer because I enjoy the sport. I’m just doing it for kicks."
//                 />
//             </div>
//             <div style={{backgroundColor: 'wheat'}}>
//                 <Joke
//                     question="What did the grape do when it got stepped on?? "
//                     answer="It let out a little wine.."
//                 />
//             </div>
//             <div style={{backgroundColor: 'lightgrey'}}>
//                 <Joke
//                     question="Why do you never see elephants hiding in trees?"
//                     answer="..because they are good at it!"
//                 />
//             </div>
//          </div>
//     )
// }
// export default App;




// MAPPING DATA WITH PROPS

// PRODUCT.JS
// import React from 'react';

// function Product(props) {
//     return (
//         <div>
//             <h3>{props.name}</h3>
//             <h3>{props.price}</h3>
//             <h3>{props.description}</h3>
//         </div>
//     )
// }

// export default Product;

// APP.JS

// import React from "react"
// import productsData from "./vschoolProducts"
// import Product from "./Product"

// function App() {
    
//   let myProducts = productsData.map(product => {
//       return (
//           <Product 
//           key={product.id}
//           name={product.name}
//           price={product.price}
//           description={product.description}
//           />
//       )
//   })
    
    
//   return (
//     <div>
//         {myProducts}
//     </div>
//   )
// }

// export default App



// CLASS BASED COMPONENTS

// class App extends React.component {

//     yourMethod() {
        
//     }

//     render()
//         // PUT DISPLAY LOGIC HERE IF NECESSARY.
//         return (
//             <div>
//                 <h1>{this.props.whatever}</h1>
//             </div>
//         )
//     }
// }