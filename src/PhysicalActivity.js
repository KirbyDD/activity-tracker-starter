class PhysicalActivity {
  constructor(user, info) {
    this.user = user;
    this.info = info;
  }

  stepsByDay(day) {
    let steps = this.info.activityData.filter(el => el.date === day)[0].numSteps;
    return steps;
  }

  milesWalked(day) {
    let steps = this.info.activityData.filter(el => el.date === day)[0].numSteps;
    let miles = this.user.person.strideLength * steps / 5280;
    return miles.toFixed(2)
  }

  activeMins(day) {
    let mins = this.info.activityData.filter(el => el.date === day)[0].minutesActive;
    return mins
  }

  weeklyActiveMins(day) {
    let activity = this.info.activityData
    let workArray = activity.map(el => el.date)
    let index = workArray.indexOf(day)
    let data = activity.slice(index - 6, index + 1).map(el => el.minutesActive)
    let avg = data.reduce((acc, curr) => acc + curr) / data.length
    return avg.toFixed(2)
  }

  stepGoalReached(day) {
    let steps = this.info.activityData.filter(el => el.date === day)[0].numSteps;
    if (steps < this.user.person.dailyStepGoal) {
      return `You did not reach your step goal.`
    } else {
      return `You reached your step goal!`
    }
  }

  daysStepGoalReached() {
    let information = this.info.activityData.filter(el => el.numSteps > this.user.person.dailyStepGoal)
    let dates = information.map(el => el.date);
    return `These are the dates you reached your step goal: ${dates}`
  }

  climbingRecord() {
    let information = this.info.activityData.map(el => el.flightsOfStairs)
    return Math.max(...information)
  }
  
  weeklyInfo(date) {
    let reversed = this.info.activityData.map(el => el).reverse()
    let dataByDay = reversed.filter(el => el.date === date)[0];
    let index = reversed.indexOf(dataByDay)
    let data = reversed.slice(index, index + 7);
    return data;
  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = PhysicalActivity;
}