// React Notes and Coding Exercises from https://scrimba.com/g/glearnreact 


// *** JSX ***

// Exercise 1, Render an unordered list with 3 li elements

// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(<ul>
//                     <li>cat</li>
//                     <li>dog</li>
//                     <li>fish</li>
//                 </ul>,
//                 document.querySelector('#root'));


// *** FUNCTIONAL COMPONENTS ***

// function MyApp() {
//     return  (
//         <ul>
//             <li>cat</li>
//             <li>dog</li>
//             <li>fish</li>
//         </ul>
//     )
// }

// ReactDOM.render(
//     <MyApp />,
//     document.querySelector('#root')
// )


// import React from 'react';
// import ReactDOM from 'react-dom';
// import MyInfo from './components/MyInfo';


// ReactDOM.render(
//   <MyInfo />,
//   document.querySelector('#root')
//   );

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'));