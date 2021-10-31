import { GET, POST, PUT, DELETE, GETMAP } from "./RESTService";

// import { DOWNLOAD_REPORT } from "../externalServices/RESTService";

const urlFactory = {
  getTripDetails: () => "posts",
  postTripDetails: () => "posts",
  getOriginDetails: () => "mapbox.places/",
  getDestinationDetails: () => "mapbox.places/",

  // editSpokeComments: () => "pm/dashboard/sd/comment",
  // deleteSpokeComments: () => "pm/dashboard/sd/comment",
};

const TripSubmissionService = {
  getTripDetails: async (programId, spokeLeid) => {
    const endpoint = urlFactory.getTripDetails();
    const urlParams = {
      programId,
      spokeLeid,
    };
    const headers = null;
    return GET(endpoint, urlParams, headers);
  },

  postTripDetails: async payload => {
    const endpoint = urlFactory.postTripDetails();
    console.log("==============>", payload)
    const body = {
      ...payload,
    };
    const urlParams = null;
    const headers = null;
    return POST(endpoint, body, urlParams, headers);
  },

  getOriginDetails: async (coords) => {
    const endpoint = urlFactory.getOriginDetails() + coords[0] + "," + coords[1] + ".json"
    const headers = null;
    return GETMAP(endpoint, headers);
  },

  getDestinationDetails: async (coords) => {
    const endpoint = urlFactory.getDestinationDetails() + coords[0] + "," + coords[1] + ".json"
    const headers = null;
    return GETMAP(endpoint, headers);
  },
  // editSpokeComments: async (payload) => {
  //   const endpoint = urlFactory.editSpokeComments();
  //   const body = {
  //     ...payload
  //   };
  //   const urlParams = null;
  //   const headers = null;
  //   return PUT(endpoint, body, urlParams, headers);
  // },
  // deleteSpokeComments: async (payload) => {
  //   const endpoint = urlFactory.deleteSpokeComments();
  //   const body = {
  //     ...payload
  //   };
  //   const urlParams = null;
  //   const headers = null;
  //   return DELETE(endpoint, body, urlParams, headers);
  // },
};

export default TripSubmissionService;
