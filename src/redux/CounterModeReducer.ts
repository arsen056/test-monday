type ActionType = SetErrorAT | SetMessageAT

type SetErrorAT = {
    type: 'SET_ERROR'
    value: boolean
}

type SetMessageAT = {
    type: 'SET_MESSAGE'
    value: boolean
}

export type counterModeReducerType = {
    isError: boolean
    isMessage: boolean
}

const initialState: counterModeReducerType = {
    isError: false,
    isMessage: false
}

export const counterModeReducer = (state = initialState, action: ActionType): counterModeReducerType => {
    switch (action.type) {
        case 'SET_ERROR':
            return {...state, isError: action.value}
        case 'SET_MESSAGE':
            return {...state, isMessage: action.value}
        default:
            return state
    }
}

export const setErrorAC = (value: boolean): SetErrorAT => ({type: 'SET_ERROR', value})
export const setMessageAC = (value: boolean): SetMessageAT => ({type: 'SET_MESSAGE', value})
