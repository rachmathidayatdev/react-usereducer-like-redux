import React, { useEffect } from 'react';
import configUseReducer from '../../store/ConfigureUseReducer';
const { connect } = configUseReducer

const UseReducer = (props) => {
    useEffect(() => {
        console.log(props)
    }, [])

    return (
        <>
            <div>UseReducer Page</div>
            <div>Count: { props.count }</div>
            <button onClick={() => props.dispatchDecrement('')}>-</button>
            <button onClick={() => props.dispatchIncrement('')}>+</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.count.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchIncrement: (payload) => dispatch({type: 'increment', payload}),
        dispatchDecrement: (payload) => dispatch({type: 'decrement', payload})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UseReducer);