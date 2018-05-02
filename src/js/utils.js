export const getPreviousAll = element => {
  const previousAllFound = [];
  const getPrevious = element => {
    const previousFound = element.previousElementSibling;
    if (previousFound !== null) {
      previousAllFound.push(element);
      getPrevious(previousFound);
    }
  };
  getPrevious(element);
  return previousAllFound;
};

export const getNextAll = element => {
  const nextAllFound = [];
  const getAll = element => {
    const nextFound = element.nextElementSibling;
    if (nextFound !== null) {
      nextAllFound.push(element);
      getAll(nextFound);
    }
  };
  getAll(element);
  return nextAllFound;
};
