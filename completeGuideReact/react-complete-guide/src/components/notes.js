import { prependOnceListener } from "cluster";

// NOTES

// CLASS VS. FUNCTIONAL BASED COMPONENTS

// CLASS BASED
// class XY extends Component
// Access to State
// Lifecycle Hooks
// this.state.XY & this.props.XY
// use if you need to manage State or access to Lifecycle Hooks,
// and you don't want to use React Hooks

// FUNCTIONAL
// const XY = props => {...}
// Access to State (useState())
// Lifecycle Hooks NOT SUPPORTED
// props.XY
// Use in all other Cases




// COMPONENT LIFECYCLE
// only available in class based components
// Methods 
/*
constructor()
getDerivedStateFromProps()
getSnapshotBeforeUpdate()
componentDidCatch()
componentWillUnmount()
shouldComponentUpdate()
componentDidUpate()
componentDidMount()
render()
*/

// LIFECYCLE HOOKS AND REACT HOOKS ARE NOT THE SAME


// COMPONENT LIFECYCLE - CREATION

// constructor(props) must call super(props)
// set up state in constructor, don't cause side-effects

// getDerivedStateFromProps(props, state) 
// sync state. cause side effects

// render()
// prepare & structure your JSX code

// Render Child Components

// componentDidMount()
// DO cause side effects, don't update state





// COMPONENT LIFECYCLE - UPDATE

// getDerivedStateFromProps(props, state)
// sync state to props. do not cause side effects

// shouldComponentUpdate(nextProps, nextState)
// may cancel updating process. Decide whether to continue or not

// render() // prepare & Structure JSX Code

// Update Child Component Props

// getSnapshotBeforeUpdate(prevProps, prevState) 
// last-minute DOM ops

// componentDidUpdate()
// do cause side effects , don't update state


