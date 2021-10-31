// @flow
import { all, fork } from "redux-saga/effects";
import DashboardSaga from "../modules/Booking/sagas/Dashboard.saga";

export default function* root() {
  const createdDashboardSaga = DashboardSaga();

  yield all([
    fork(createdDashboardSaga.watchPostTripDetails),
    fork(createdDashboardSaga.watchGetOriginDetails),
    fork(createdDashboardSaga.watchGetDestinationDetails),
  ]);
}
