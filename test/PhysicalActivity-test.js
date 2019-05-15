const chai = require('chai');
const expect = chai.expect;

const mockData = require('../data/mock-activity');
const PhysicalActivity = require('../src/PhysicalActivity');
const mockuserData = require('../data/mock-users');
const mockUser = mockuserData[0];
const activityInfo = mockData.filter(user => {
  return user.userID === mockUser.id
})[0]

describe('PhysicalActivity', function() {
   
  let physicalActivity;
  beforeEach(function() {
    physicalActivity = new PhysicalActivity(mockUser, activityInfo);
  });

  it('should be a function', function() {

    expect(PhysicalActivity).to.be.a('function');
  });

  it('should make an instance of PhysicalActivity', function() {
    
    expect(physicalActivity).to.be.an.instanceOf(PhysicalActivity);
  });

  it('should return steps of the user for the letest week', function() {
    
    expect(physicalActivity.weeklySteps('12/05/2019')).to.be.an('array');
  });

  it('should return steps of the user for the letest week', function () {

    expect(physicalActivity.weeklyMinutes('12/05/2019')).to.be.an('array');
  });

  it('should return flight of stairs climbed by the user for the letest week', function () {

    expect(physicalActivity.weeklyStairs('12/05/2019')).to.be.an('array');
  });
});