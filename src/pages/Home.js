import React, { useEffect } from 'react';
import configUseReducer from '../store/ConfigureUseReducer';
const { connect } = configUseReducer

const HomePage = (props) => {
    useEffect(() => {
        console.log(props)
    }, [])

    return (
        <>
        <div>Home Page</div>
        <div>Count: { props.count }</div>
        <button onClick={() => props.dispatchIncrement('')}>+</button>
        <button onClick={() => props.dispatchDecrement('')}>-</button>
        <button onClick={() => props.dispatchReset('')}>Reset</button>
        <br/>
        <div>Anime Character: { props.animeCharacter }</div>
        <button onClick={() => props.dispatch({type: 'naruto', payload: ''})}>Naruto</button>
        <button onClick={() => props.dispatch({type: 'sasuke', payload: ''})}>Sasuke</button>
        <button onClick={() => props.dispatch({type: 'resetCharacter', payload: ''})}>Reset</button>
        <br/>
        <div>Weapon Character: { props.weaponCharacter }</div>
        <button onClick={() => props.dispatch({type: 'kunai', payload: ''})}>Kunai</button>
        <button onClick={() => props.dispatch({type: 'shuriken', payload: ''})}>Shuriken</button>
        <button onClick={() => props.dispatch({type: 'resetWeapon', payload: ''})}>Reset</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.count.value,
        animeCharacter: state.animeCharacter.name,
        weaponCharacter: state.weaponCharacter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchIncrement: (payload) => dispatch({type: 'increment', payload}),
        dispatchDecrement: (payload) => dispatch({type: 'decrement', payload}),
        dispatchReset: (payload) => dispatch({type: 'reset', payload})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);