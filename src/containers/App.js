import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { robots } from '../robots';
import Scroll from '../components/Scroll'
import './App.css';
import { setSearchField, requestRobots } from '../actions';

// listens to what needs to be sent
const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

// which props are actions that need to be dispatched
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {
   
    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobot = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        
        return isPending ?
            <h1 className='tc'>Loading</h1> :
            (
                <div className= 'tc'>
                    <h1 className = 'f1'>RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobot}/>
                    </Scroll>
                </div>
                    )

    }}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// App walkthrough
// We create aa class app with components such as contructor
// the consuctor creates a state, rob0ts & search field which only lives in App
// class App passes down props, such as onSearchChange to SearchBox
// everytime there is onChange in the Input, it refers to prop searchChange which activates function onSearch change which
// updates the state of the search field with the event/to what we type 
// with information from event of search box, we communicate with CardList
// tell Cardlist to filter only what includes the search field

// instead of passing robots = this.state.robots we pass filtered robots to pick one name

// does there need to be a state robots? as it never really changes. not really but this is good practice


    

// STATE object that can change and effect application
//  in this app State is what comes into search box
//  in this app state is which robot we choose
// 
//original code
//  const App = () => {
//     return(
//         <div className= 'tc'>
//             <h1>RoboFriends</h1>
//             <SearchBox/>
//             <CardList robots={robots}/>
//          </div>
//         )
//         }
//     export default App

// conversion to App extends. Also change top line to React, { Component }
// class App extends Component {
//     render() {
//     return(
//     <div className= 'tc'>
//         <h1>RoboFriends</h1>
//         <SearchBox/>
//         <CardList robots={robots}/>
//      </div>
//      )
//     }
// }

// add states to code using constructor
// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             robots: robots,
//             searchfields: ''
//         }
//     }
//     render() {
//         return(
//         <div className= 'tc'>
//             <h1>RoboFriends</h1>
//             <SearchBox/>
//             <CardList robots={robots}/>
//         </div>
//             )
//         }
// }

// link the input search box to this file and log clikck in console log
// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             robots: robots,
//             searchfield: ''
//         }
//     }
//     onSearchChange = (event) => {
//           console.log(event)
//     }
    
//     render() {
//         return(
//         <div className= 'tc'>
//             <h1>RoboFriends</h1>
//             <SearchBox searchChange={this.onSearchChange}/>
//             <CardList robots={this.state.robots}/>
//         </div>
//             )
//         }
// }

// right before we move const filteredRobots under return to call the robot we want from the card list
// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             robots: robots,
//             searchfield: ''
//         }
//     }
//     onSearchChange = (event) => {
//             this.setState({ searchfield: event.target.value })
//             const filteredRobots = this.state.robots.filter(robot => {
//             return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
//         })
//     }
    
//     render() {
//         return(
//         <div className= 'tc'>
//             <h1>RoboFriends</h1>
//             <SearchBox searchChange={this.onSearchChange}/>
//             <CardList robots={this.state.robots}/>
//         </div>
//             )
//         }
// }

// old statement
        // if (robots.length === 0) {
        //     return <h1 className='tc'>Loading</h1>
        // } else {
        // return(
        // <div className= 'tc'>
        //     <h1 className = 'f1'>RoboFriends</h1>
        //     <SearchBox searchChange={onSearchChange}/>
        //     <Scroll>
        //         <CardList robots={filteredRobot}/>
        //     </Scroll>
        // </div>
        //     )