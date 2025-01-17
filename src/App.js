import React, { useEffect } from "react";
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { connect } from "react-redux";
import { fetchSmurfs } from "./actions";


const App = (props)=> {

  useEffect( () =>{
    props.fetchSmurfs();
  }, [])



  return (
    <div className="App">
      <Header />

      <main>
        <SmurfList/>
        <AddForm/>
      </main>
    </div>
  );
}

const mapStateToProps = state =>{
  return state;
}

export default connect(mapStateToProps, {fetchSmurfs})(App);
//not sure that should be an empty object

//Task List:
//1. Connect the fetchSmurfs actions to the App component. X
//2. Call the fetchSmurfs action when the component mounts.