import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {settingsReducer} from "./settingsReducer";
import {counterModeReducer} from "./CounterModeReducer";

const rootReducer = combineReducers({counter: counterReducer, settings: settingsReducer, counterMode: counterModeReducer})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);