// @flow

import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import TripReducer from "../modules/Booking/reducers/dashboard.reducer"

export default combineReducers({
  form: formReducer,
  TripDashboard: TripReducer,
});
