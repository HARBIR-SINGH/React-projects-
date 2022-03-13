import React from 'react';
import './App.css';
import Person from './Person';
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';
import PageOne from './page1';
import PageTwo from './PageTwo';
import PageThree from './PageThree';

export default class App extends React.Component {


  // state = {
  //   item: "harbir",
  //   users: ""
  // }

  // bindToState = (event) => {
  //   this.setState({
  //     [ event.target.name ] : event.target.value
  //   })
  // }

  // newName = () =>{
  //   this.setState({
  //     item : this.state.item,
  //   })
  //   console.log(this.state.item);
  // }
//   value= "";
// state = {
//   todos: [],
// }
// addButton = (event) => {
//   const x = this.state.list;
//   x.push(this.value);
//   this.value ="";
//   this.setState({list: x});

// }
// Text = (event) => {
//   this.value= event.target.value;
//   this.setState({});
// }

constructor(props)
{
  super(props);
this.state = {
  string : "",
  list : [],
}
}
componentDidMount(){
let url = 'https://jsonplaceholder.typicode.com/posts';
axios.get(url)
.then(response => {
  this.setState({
    list : response.data
  });
})
.catch(err => {
  console.log('error');
})
}

// search = (event) => {
//    this.setState({

//    });
// }
Text = (event) => {
  this.setState({
   string : event.target.value,
  });
}
// shouldComponentUpdate(nextProps : NewProp, nextState: Newstate){
// if(this.props.list !== nextProps.list){
//   return true;
// }else {
//   return false;
// }
// }
  render(){
    // const list = this.state.todos;
   
    console.log('data',this.state.list);
   
    let filteredPost = this.state.list.filter((item, index) =>item.title.match(this.state.string)  !== null);
    console.log( 'search',filteredPost);
   return (
    
    <>
  <Link to="/one"> <h3>One</h3></Link>
  <Link to="/two"> <h3>Two</h3></Link>
  <Link to="/three"> <h3>Three</h3></Link>
    <Routes>
      <Route  exact path="/one" element={ < PageOne />} />
      <Route path="/two" element= { <PageTwo />} />
      <Route path="/three" element= { <PageThree />} />
            </Routes>
          
    <Person name= "get data with axios" />

    <div>
      {/* <input value={this.value} onChange={this.Text} placeholder="enter todo" /> */}
      {/* <button onClick={this.addButton}>Add Todo</button> */}
      <input value={this.state.string} onChange={ (event) =>{this.Text(event)}} placeholder="Search" />
      {/* <button onClick={this.search}>Search</button> */}
    </div>
    <ol>
      {
       filteredPost.map(function(value, i)
        {
          return <li key={i}>{ value.title}</li>
        })
      }
    </ol>


      {/* <h1>{this.state.item}</h1><br></br> 
           Enter your name <input type='text' value={this.state.item} name='item' onChange={(event)=> this.bindToState(event)} />
       <input type='submit' value='add' name='button' onClick={ ()=> this.newName()} />  */}
      
    </>
  );
 } 
} 


