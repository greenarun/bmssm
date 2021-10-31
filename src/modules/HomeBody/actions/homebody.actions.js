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
} from './Types';

// POST data actions
const postTripDetails = (data) => ({
    type: POST_TRIP_DETAILS,
    payload: data,
}
);

const postTripDetailsSuccess = (data) => ({
    type: POST_TRIP_DETAILS_SUCCESS,
    payload: { data },
});

const postTripDetailsFailure = (error) => ({
    type: POST_TRIP_DETAILS_FAILURE,
    payload: { error },
});

// get data actions
const getOriginDetails = (data) => ({
    type: GET_ORIGIN_DETAILS,
    payload: data,
}
);

const getOriginDetailsSuccess = (data) => ({
    type: GET_ORIGIN_DETAILS_SUCCESS,
    payload: { data },
});

const getOriginDetailsFailure = (error) => ({
    type: GET_ORIGIN_DETAILS_FAILURE,
    payload: { error },
});

const getDestinationDetails = (data) => ({
    type: GET_DESTINATION_DETAILS,
    payload: data,
}
);

const getDestinationDetailsSuccess = (data) => ({
    type: GET_DESTINATION_DETAILS_SUCCESS,
    payload: { data },
});

const getDestinationDetailsFailure = (error) => ({
    type: GET_DESTINATION_DETAILS_FAILURE,
    payload: { error },
});


export default {
    postTripDetails,
    postTripDetailsSuccess,
    postTripDetailsFailure,

    getOriginDetails,
    getOriginDetailsSuccess,
    getOriginDetailsFailure,

    getDestinationDetails,
    getDestinationDetailsSuccess,
    getDestinationDetailsFailure

};