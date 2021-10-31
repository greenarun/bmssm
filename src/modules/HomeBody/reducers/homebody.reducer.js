import { createReducer } from 'reduxsauce';

import {
    POST_TRIP_DETAILS,
    POST_TRIP_DETAILS_SUCCESS,
    POST_TRIP_DETAILS_FAILURE,

    GET_ORIGIN_DETAILS,
    GET_ORIGIN_DETAILS_SUCCESS,
    GET_ORIGIN_DETAILS_FAILURE,

    GET_DESTINATION_DETAILS,
    GET_DESTINATION_DETAILS_SUCCESS,
    GET_DESTINATION_DETAILS_FAILURE,

} from '../actions/Types';

export const INITIAL_STATE = {
    tripData: {},
    tripDataLoading: false,
    tripDataError: null,

    originData: {},
    originDataLoading: false,
    originDataError: null,

    destinationData: {},
    destinationDataLoading: false,
    destinationDataError: null,

};

//  widget data reducer functions


export const postTripDetails = (state = INITIAL_STATE, { payload }) => ({
    ...state,
    tripDataLoading: true,
});
export const postTripDetailsSuccess = (state = INITIAL_STATE, { payload }) => ({
    ...state,
    tripData: payload.data,
    tripDataLoading: false,
    tripDataError: null,
});
export const postTripDetailsFailure = (state = INITIAL_STATE, { payload }) => ({
    ...state,
    tripDataError: payload.error,
    tripDataLoading: false,
});


export const getOriginDetails = (state = INITIAL_STATE, { payload }) => ({
    ...state,
    originDataLoading: true,
});
export const getOriginDetailsSuccess = (state = INITIAL_STATE, { payload }) => ({
    ...state,
    originData: payload.data,
    originDataLoading: false,
    originDataError: null,
});
export const getOriginDetailsFailure = (state = INITIAL_STATE, { payload }) => ({
    ...state,
    originDataError: payload.error,
    originDataLoading: false,
});



export const getDestinationDetails = (state = INITIAL_STATE, { payload }) => ({
    ...state,
    destinationDataLoading: true,
});
export const getDestinationDetailsSuccess = (state = INITIAL_STATE, { payload }) => ({
    ...state,
    destinationData: payload.data,
    destinationDataLoading: false,
    destinationDataError: null,
});
export const getDestinationDetailsFailure = (state = INITIAL_STATE, { payload }) => ({
    ...state,
    destinationDataError: payload.error,
    destinationDataLoading: false,
});


const ACTION_HANDLERS = {
    [POST_TRIP_DETAILS]: postTripDetails,
    [POST_TRIP_DETAILS_SUCCESS]: postTripDetailsSuccess,
    [POST_TRIP_DETAILS_FAILURE]: postTripDetailsFailure,

    [GET_ORIGIN_DETAILS]: getOriginDetails,
    [GET_ORIGIN_DETAILS_SUCCESS]: getOriginDetailsSuccess,
    [GET_ORIGIN_DETAILS_FAILURE]: getOriginDetailsFailure,

    [GET_DESTINATION_DETAILS]: getDestinationDetails,
    [GET_DESTINATION_DETAILS_SUCCESS]: getDestinationDetailsSuccess,
    [GET_DESTINATION_DETAILS_FAILURE]: getDestinationDetailsFailure,


};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);