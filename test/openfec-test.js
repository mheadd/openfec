const expect = require('expect.js');
const openfec = require('../index');

const API_KEY = 'DEMO_KEY';

describe('OpenFEC Client Library', () => {

  describe("#Initiatize", () => {
    it("Throw an error if API key not passed in call to initialize", (done) => {
      openfec.candidate.details({candidate_id: "H2LA05084"})
        .catch((error) => {
          expect(error.message).to.eql('API Key must be set');
        });
      done();
    })
  });

  describe('#GetCandidates', () => {
    it("Makes an API call to the Candidates endpoint", (done) => {
      openfec.init(API_KEY);
      openfec.candidate.details({candidate_id: "H2LA05084"})
      .then((response) => {
        expect(response).to.be.an('object');
        expect(response).to.not.be.empty();
      });
      done();
    });
  });

  describe('#GetCommitteess', () => {
    it("Makes an API call to the Committees endpoint", (done) => {
      openfec.init(API_KEY);
      openfec.committee.listAll({committee_type: ['H'], per_page: 3})
      .then((response) => {
        expect(response).to.be.an('object');
        expect(response.results).to.have.length(3);
      });
      done();
    });
  });

  describe('#GetReports', () => {
    it("Makes an API call to the Reports endpoint", (done) => {
      openfec.init(API_KEY);
      openfec.reports.list({committee_id: "C00431445", year: ['2015']})
      .then((response) => {
        expect(response).to.be.an('object');
        expect(response).to.not.be.empty();
      });
      done();
    });
  });

  describe('#GetSchedules', () => {
    it("Makes an API call to the Schdules endpoint", (done) => {
      openfec.init(API_KEY);
      openfec.schedules.searcByState({state: "NY", per_page: 3})
      .then((response) => {
        expect(response).to.be.an('object');
        expect(response.results).to.have.length(3);
      });
      done();
    });
  });

});
