export const SET_LOG_IN = () => {
  return {
    type: 'SET_LOG_IN',
  };
};
export const SET_LOG_OUT = () => {
  return {
    type: 'SET_LOG_OUT',
  };
};
export const SET_USER_NAME = username => {
  return {
    type: 'SET_USER_NAME',
    payload: {username},
  };
};
export const SET_EMAIL = email => {
  return {
    type: 'SET_EMAIL',
    payload: {email},
  };
};
export const SET_USER_ID = id => {
  return {
    type: 'SET_USER_ID',
    payload: {id},
  };
};
