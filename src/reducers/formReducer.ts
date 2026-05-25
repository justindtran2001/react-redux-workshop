export type FormState = {
  description: string
  amount: string
  category: string
  error: string
}

export type FormAction =
  | { type: 'SET_FIELD'; field: 'description' | 'amount' | 'category'; value: string }
  | { type: 'RESET' }
  | { type: 'SET_ERROR'; error: string }
  | { type: 'LOAD_FORM'; payload: FormState }

export const initialFormState: FormState = {
  description: '',
  amount: '',
  category: '',
  error: '',
}

export function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value, error: '' }
    case 'RESET':
      return initialFormState
    case 'SET_ERROR':
      return { ...state, error: action.error }
    case 'LOAD_FORM':
      return action.payload
    default:
      return state
  }
}
