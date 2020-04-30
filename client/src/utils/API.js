import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getCases: function() {
    return axios.get("/api/cases");
  },
  newCase: function(caseData){
    return axios.post("/api/cases", caseData)
  }
};
 