// TODO: Refactor this file into src/store/slices/filtersSlice.ts using createSlice.
//       - Replace manual switch/case with Immer-compatible reducers inside createSlice
//       - Export the reducer as default and named action creators
//       - Delete actionTypes.ts and actions.ts once done

import { SET_FILTER, CLEAR_FILTERS } from './actionTypes'
import type { Reducer } from 'redux'
import type { FilterAction } from './actions'

export interface FiltersState {
  category: string | null
}

const initialState: FiltersState = {
  category: null,
}

export const filtersReducer: Reducer<FiltersState, FilterAction> = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return { category: action.payload }
    case CLEAR_FILTERS:
      return { category: null }
    default:
      return state
  }
}

