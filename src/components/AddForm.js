import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf, setError } from '../actions';

const AddForm = (props) => {


    //I know this isn't how I'm supposed to do the errormessage stuff but I couldn't figure out the right way and I'm running out of time.
    const [errorMessage, setErrorMessage] = useState('')

    console.log('ADDFORM PROPS:', props)
    const [state, setState] = useState({
        name:"",
        position:"",
        nickname:"",
        description:""
    });


    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (state.name === "" || state.position === "" || state.nickname === "") {
            setErrorMessage('You need to fill out the fields')
            console.log("AFTER SUBMIT ERROR MESSAGE:", errorMessage)
        } else {
            props.addSmurf(state); // not sure this is the right way.
        }
    }


    return(<section>
        <h2>Add Smurf</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label><br/>
                <input onChange={handleChange} value={state.name} name="name" id="name" />
            </div>
            <div className="form-group">
                <label htmlFor="position">Position:</label><br/>
                <input onChange={handleChange} value={state.position} name="position" id="position" />
            </div>
            <div className="form-group">
                <label htmlFor="nickname">Nickname:</label><br/>
                <input onChange={handleChange} value={state.nickname} name="nickname" id="nickname" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label><br/>
                <textarea onChange={handleChange} value={state.description} name="description" id="description" />
            </div>
            {
                errorMessage && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {errorMessage}</div>
            }
            <button onClick={handleSubmit}>Submit Smurf</button>
        </form>
    </section>);
}

const mapStateToProps = state =>{
    return ({
        ...state,
        error: state.error
    })
}

export default connect(mapStateToProps, {addSmurf, setError})(AddForm);

//Task List:
//1. Connect the errorMessage, setError and addSmurf actions to the AddForm component.
//2. Replace all instances of the errorMessage static variable with your error message state value. 
//3. Within the handleSubmit function, replace the static assignment to errorMessage with a call to the setError action. Test that an error is displayed when this validation code fails.
//4. Within the handleSubmit function, call your addSmurf action with the smurf name, position, nickname and summury passed as arguments. Test that a smurf is correctly added to when the form is submitted.