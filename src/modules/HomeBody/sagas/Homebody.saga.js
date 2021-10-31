import { takeLatest, call, put } from "redux-saga/effects";

import Actions from "../actions/dashboard.actions";
import TripSubmissionService from "../../../externalServices/TripSubmission.service";

import {
  POST_TRIP_DETAILS,
  GET_ORIGIN_DETAILS,
  GET_DESTINATION_DETAILS,
} from "../actions/Types";

export default () => {
  //get dashboard widget data sagas,


  function* postTripDetails({ payload }) {
    try {
      const response = yield call(TripSubmissionService.postTripDetails, payload);
      yield put(Actions.postTripDetailsSuccess(response));
    } catch (error) {
      yield put(Actions.postTripDetailsFailure(error));
    }
  }
  function* watchPostTripDetails() {
    yield takeLatest(POST_TRIP_DETAILS, postTripDetails);
  }


  function* getOriginDetails({ payload }) {
    try {
      const response = yield call(TripSubmissionService.getOriginDetails, payload);
      yield put(Actions.getOriginDetailsSuccess(response));
    } catch (error) {
      yield put(Actions.getOriginDetailsFailure(error));
    }
  }
  function* watchGetOriginDetails() {
    yield takeLatest(GET_ORIGIN_DETAILS, getOriginDetails);
  }


  function* getDestinationDetails({ payload }) {
    try {
      const response = yield call(TripSubmissionService.getDestinationDetails, payload);
      yield put(Actions.getDestinationDetailsSuccess(response));
    } catch (error) {
      yield put(Actions.getDestinationDetailsFailure(error));
    }
  }
  function* watchGetDestinationDetails() {
    yield takeLatest(GET_DESTINATION_DETAILS, getDestinationDetails);
  }


  return {
    watchPostTripDetails,
    watchGetOriginDetails,
    watchGetDestinationDetails,
  };
};
