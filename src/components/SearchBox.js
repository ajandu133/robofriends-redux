import React from 'react';

const SearchBox = ({ searchChange }) => {
    return(
        <div className='pa2'>
            <input
             className='pa3 ba b--green bg-lightest-blue'
             type='search' 
             placeholder='search robots' 
             onChange={searchChange}/>
        </div>
    )
}

export default SearchBox

// every time the search box is modified i.e onChange, call the {searchChange} function
// {searchChange} is a prop of App
//{searchChange} prop is the this.onSearchChange function in APP
// triggers console.log

// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             robots: robots,
//             searchfields: ''
//         }
//     }
//     onSearchChange(event) {
//         console.log(event.target.value)
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

