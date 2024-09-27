import React from "react";
import { connect } from 'react-redux';

import { getDog } from "../actions/actions";

const Dog = (props) => {
    
    if(props.error){
        return (
            <div className="error">
                <h2>ERROR: {props.error}</h2>
                <img src={props.image} alt="grumpy cat" />
            </div>
        )
    }
    if(props.isFetching){
        return <h2>FETCHING DOG!</h2>
    }
    
    const clickHandler =() =>{
        console.log(props);
        props.dispatch(getDog());
    }


    return (
        <div className="dog">
            <img src={props.image} alt="random dog" />
            <button onClick={clickHandler}>see another dog!</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        image: state.image,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps)(Dog);