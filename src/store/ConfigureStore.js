import configUseReducer from '../store/ConfigureUseReducer';
import countReducer from '../reducers/Count';
import animeReducer from '../reducers/AnimeCharacter';
const { combineReducers } = configUseReducer
const { count, countInitState } = countReducer;
const { animeCharacter, weaponCharacter, animeInitState } = animeReducer;

const initialState = { 
    ...countInitState,
    ...animeInitState
}

const rootReducer = combineReducers({
    count,
    animeCharacter,
    weaponCharacter
})

export default {rootReducer, initialState};