const animeInitState = {
    animeCharacter: {
        name: ""
    },
    weaponCharacter: []
}

const animeCharacter = (state = animeInitState.animeCharacter, action) => {
    switch(action.type) {
        case 'naruto':
            return {name: "Naruto"};
        case 'sasuke':
            return {name: "Sasuke"};
        case 'resetCharacter':
            return ''
        default:
            return state;
    }
}

const weaponCharacter = (state = animeInitState.weaponCharacter, action) => {
    switch(action.type) {
        case 'kunai':
            return ["Kunai"];
        case 'shuriken':
            return ["Shuriken"];
        case 'resetWeapon':
            return ''
        default:
            return state;
    }
}

export default { 
    animeCharacter,
    weaponCharacter, 
    animeInitState 
}