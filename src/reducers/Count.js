const countInitState = {
    count: {
        value: 0
    }
}

const count = (state = countInitState.count, action) => {
    switch(action.type) {
        case 'increment':
            return {value: state.value + 1};
        case 'decrement':
            return {value: state.value - 1};
        case 'reset':
            return {value: 0}
        default:
            return state;
    }
}

export default { 
    count, 
    countInitState 
}