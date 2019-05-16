const chai = require('chai');
const expect = chai.expect;

const mockData = require('../data/mock-activity');
const PhysicalActivity = require('../src/PhysicalActivity');
const User = require('../src/User')
const userFakeData = require('../data/mock-users');
const mockUser = new User(userFakeData[0]);
const activityInfo = mockData.filter(user => {
  return user.userID === mockUser.person.id
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

  it('should return number of steps based on day from stepsByDay', function() { 
    expect(physicalActivity.stepsByDay('13/05/2019')).to.equal(2925);
  });

  it('should return number of miles walked based on day from milesWalked', function() { 
    expect(physicalActivity.milesWalked('11/05/2019')).to.equal('3.86')
  });

  it('should return number of minutes active based on day from activeMins', function() { 
    expect(physicalActivity.activeMins('08/05/2019')).to.equal(179)
  });

  it('should return weekly avg active minutes based on day from weeklyActiveMins', function() { 
    expect(physicalActivity.weeklyActiveMins('12/05/2019')).to.equal('176.43')
  });

  it('should inform is step goal reached based on day from stepGoalReached', function() { 
    expect(physicalActivity.stepGoalReached('12/05/2019')).to.equal('You reached your step goal!')
    expect(physicalActivity.stepGoalReached('13/05/2019')).to.equal('You did not reach your step goal.')
  });

  it('should return list of dates step goal was reached from dailyStepGoalReached', function() { 
    expect(physicalActivity.daysStepGoalReached()).to.equal('These are the dates you reached your step goal: 10/05/2019,12/05/2019,15/05/2019,16/05/2019,18/05/2019,19/05/2019')
  });

  it('should return max number of stairs climbed from weeklyActiveMins', function() { 
    expect(physicalActivity.climbingRecord()).to.equal(48)
  });

  it('should return weekly physical activity info', function(){
    expect(physicalActivity.weeklyInfo('14/05/2019')).to.be.an('array');
    expect(physicalActivity.weeklyInfo('14/05/2019')[6].date).to.equal('08/05/2019');
  });
});