import {GET_JWT, GET_USER_PROFILE, USER_LOGOUT, UPDATE_USER_PROFILE} from '../actions/constants'

const userReducer = (state = [], {type, payload}) => {
    switch (type) {
      case GET_USER_PROFILE:
        return {
          ...state,
          profile: payload
        };
      case USER_LOGOUT:
        return {
          ...state,
          profile: undefined,
        };
      case GET_JWT:
        return {
          ...state,
          jwt: payload,
        };
      case UPDATE_USER_PROFILE:
        return {
          ...state,
          profile: payload
        };
      default:
        return state
    }
}

export default userReducer;
