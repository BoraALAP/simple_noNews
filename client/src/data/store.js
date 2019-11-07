import React from 'react'

export const initialState = {
  category: 'world',
  sign: false,
  userId: '',
  darkMode: false
}

export const appReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_CATEGORY' :
      return {...state, category: action.value}
    case 'RESET_CATEGORY' :
      return {...state, category: 'world'}
    case 'SIGN_IN' :
      return {...state, sign: true, userId: action.id}
    case 'SIGN_OUT' :
      return {...state, sign: false, userId: ''}
      case 'DARK_MODE' :
        return {...state, darkMode:!state.darkMode}
    default:
      return state
  }
}

export const Context = React.createContext()