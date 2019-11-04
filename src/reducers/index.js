import users from './addingmarks';
import logged from './isLogged';
import { combineReducers } from 'redux';

const allUser = combineReducers({
  users: users,
  logged: logged
});

export default allUser;
