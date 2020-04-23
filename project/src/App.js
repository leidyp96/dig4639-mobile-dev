import React from 'react';
import './App.css';




class Contacts extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      contacts:[],
      profile: {}
    
    }; 
}
  componentDidMount() {
  this.showContacts();
  this.showProfile();
 }

 showContacts() {
  window.fetch("http://plato.mrl.ai:8080/contacts", {
    headers: { API: "pulido" }
  })
    .then((res) => res.json())
    .then((data) => {
      this.setState({ contacts: data.contacts });
      console.log(data)
    });
  } 
  
  addContact = (event) => {
    event.preventDefault();
    fetch('http://plato.mrl.ai:8080/contacts/add', {
      method:'POST',
      body:JSON.stringify({
        name:this.refs.name.value,
        number:this.refs.number.value}),
      headers:{"Content-type": "application/json",API: "pulido"}
    })
    .then (res => {return res.json()})
    .then(() =>{
      this.showContacts();
      this.showProfile();
    })
    this.refs.name.value = "";
    this.refs.number.value = "";
  }

  removeContact = (index) => {
    fetch('http://plato.mrl.ai:8080/contacts/remove', {
      method: 'POST',
      body: JSON.stringify({position:index}),
      headers:{"Content-type": "application/json",API: "pulido"}
    })
    .then (res => {return res.json()})
    .then(() =>{
      this.showContacts();
      this.showProfile();
    })
  }

  showProfile() {
    window.fetch("http://plato.mrl.ai:8080/profile", {
      headers: { API: "pulido" }
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ profile: data });
        console.log(data)
      });
    }
  

  render() {
    return (
      <div className="container">
        <h2>My Contacts</h2>
        <div>
          <div className="allContacts">
            <h3>All Contacts</h3>
            {this.state.contacts.map((value, index) => {
            return (
             <div>
               <p>Name: {value.name}</p>
               <p>Number: {value.number}</p>
               <button type="submit" onClick={() => this.removeContact(index)}
               id={index} className="buttonRemove">Remove Contact</button>
             </div>)})}
          </div>
        </div>
        <div className="addContacts">
          <h3>Add New Contact</h3>
          <form onSubmit={this.addContact}>
            <input type="text" placeholder="Name" ref="name" className="input"></input><br></br>
            <input type="text" placeholder="Number" ref="number" className="input"></input><br></br>
            <button className="buttonCreate" type="submit">Create Contact</button>
          </form>
         </div>
         <div className="profile">
           <h3>Profile</h3>
            <p>{this.state.profile.name}</p>
            <p>{this.state.profile.count}</p>
         </div>
      </div>
    );
  }
}

  
export default Contacts;
