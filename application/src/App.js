import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      notes:[]
    }
  }

  API_URL="http://localhost:5038/";
  componentDidMount() {
    this.refreshNotes();
  }
 

  async refreshNotes() {
    fetch(this.API_URL+"maxonapptwo/MaxonApp/GetNotes").then(response=>response.json())
    .then(data=>{
      this.setState({notes:data});
    })
   }

   async deleteClick(id) {
    var clear = document.getElementById("clear");
    clear.textContent = " ";
    this.refreshNotes();
   }
   
   

render() {

  const{notes}=this.state;
  return (
    <div className="App" id="main">
      <h2>Current ToDo List</h2>

{notes.map(note=>
  <p id = "text">
       <b id="clear"> { note.description} </b>
       <button onClick={()=>this.deleteClick(notes.description)}>Delete Notes</button>
       
       

     </p>
  )}
     
       

    </div>
  );
}
}


export default App;
