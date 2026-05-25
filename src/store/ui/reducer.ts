// TODO: Refactor this file into src/store/slices/uiSlice.ts using createSlice.
//       Similar pattern to expensesSlice. The loading flag is already handled
//       by the expenses thunk, so this slice only needs modalOpen.

import { SET_LOADING, SET_MODAL_OPEN } from './actionTypes'
import type { Reducer } from 'redux'
import type { UiAction } from './actions'

export interface UiState {
  loading: boolean
  modalOpen: boolean
}

const initialState: UiState = {
  loading: false,
  modalOpen: false,
}

export const uiReducer: Reducer<UiState, UiAction> = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload }
    case SET_MODAL_OPEN:
      return { ...state, modalOpen: action.payload }
    default:
      return state
  }
}
