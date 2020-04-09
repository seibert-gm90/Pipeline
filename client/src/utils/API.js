import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getAssistantProgress: function() {
    return axios.get("/api/pipeline/assistant/progress");
  },
  getBrokerProgress: function(breed) {
    return axios.get("/api/pipeline/broker/progress" );
  },
};
 