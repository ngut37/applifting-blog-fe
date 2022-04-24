import { MessageObject } from '../../types';

export const loginMessages = Object.freeze<MessageObject>({
  // TITLE
  'login.title': 'Log In',

  // LABELS
  'login.input.name.label': 'Name',
  'login.input.password.label': 'Password',

  // PLACEHOLDERS
  'login.input.name.placeholder': 'your name',
  'login.input.password.placeholder': 'your password',

  // ERRORS
  'login.input.name.error.min': 'Password too short',
  'login.input.name.error.max': 'Name too long',
  'login.input.name.error.required': 'Name is required',
  'login.input.password.error.min': 'Password too short',
  'login.input.password.error.max': 'Password too long',
  'login.input.password.error.required': 'Password is required',

  // BUTTONS
  'login.input.button': 'Log in',

  // ERRORS
  'login.error': 'Incorrect credentials',
});
