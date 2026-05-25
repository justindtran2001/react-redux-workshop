import { SET_LOADING, SET_MODAL_OPEN } from './actionTypes'

export function setLoading(payload: boolean) {
  return { type: SET_LOADING, payload } as const
}

export function setModalOpen(payload: boolean) {
  return { type: SET_MODAL_OPEN, payload } as const
}

export type UiAction =
  | ReturnType<typeof setLoading>
  | ReturnType<typeof setModalOpen>
