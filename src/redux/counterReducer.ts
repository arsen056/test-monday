type IncrementAT = {type: 'INCREMENT'}
type ResetAT = {type: 'RESET'}
type SetSettingsAT = {type: 'SET_SETTINGS', min: number, max: number, current: number}

type ActionType = IncrementAT | ResetAT | SetSettingsAT

export type CounterStateType = {
    min: number
    max: number
    current: number
}

const initialState: CounterStateType = {
    min: 0,
    max: 5,
    current: 0,
}

export const counterReducer = (state= initialState , action: ActionType): CounterStateType => {
    switch (action.type) {
        case "INCREMENT":
            return {...state, current: state.current + 1};
        case "RESET":
            return {...state, current: state.min};
        case "SET_SETTINGS":
            return {...state, min: action.min, max: action.max, current: action.current};
        default:
            return state;
    }
}

export const incrementAC = (): IncrementAT => ({type: 'INCREMENT'})

export const resetAC = (): ResetAT => ({type: 'RESET'})
export const setSettingsAC = (min: number, max: number, current: number): SetSettingsAT => ({type: 'SET_SETTINGS', min, max, current})