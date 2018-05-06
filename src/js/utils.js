export const getPreviousAll = element => {
  const previousAllFound = [];
  const getPrevious = element => {
    if (element !== null) {
      previousAllFound.push(element);
      const previousFound = element.previousElementSibling;
      if (previousFound !== null) {
        getPrevious(previousFound);
      }
    }
  };
  getPrevious(element.previousElementSibling);
  return previousAllFound;
};

export const getNextAll = element => {
  const target = element;
  const nextAllFound = [];
  const getAll = element => {
    if (element !== null) {
      nextAllFound.push(element);
      const nextFound = element.nextElementSibling;
      if (nextFound !== null) {
        getAll(nextFound);
      }
    }
  };
  getAll(element.nextElementSibling);
  return nextAllFound;
};

export const toHHMMSS = (time = 0) => {
  var sec_num = parseInt(time, 10); // don't forget the second param
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - hours * 3600) / 60);
  var seconds = sec_num - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return hours + ":" + minutes + ":" + seconds;
};
