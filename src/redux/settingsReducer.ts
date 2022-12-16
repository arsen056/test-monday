export type SettingsStateType = {
    min: number
    max: number
}

type ActionType = SetMinValueAT | SetMaxValueAT
type SetMinValueAT = {type: 'SET_MIN_VALUE', min: number}
type SetMaxValueAT = {type: 'SET_MAX_VALUE', max: number}

const initialState : SettingsStateType = {
    min: 0,
    max: 5,
}

export const settingsReducer = (state = initialState, action: ActionType): SettingsStateType => {
    switch (action.type) {
        case 'SET_MIN_VALUE' :
            return {...state, min: action.min}
        case 'SET_MAX_VALUE' :
            return {...state, max: action.max}
        default:
            return state
    }
}

export const setMinValueAC = (min: number): SetMinValueAT => ({type: 'SET_MIN_VALUE', min})
export const setMaxValueAC = (max: number): SetMaxValueAT => ({type: 'SET_MAX_VALUE', max})