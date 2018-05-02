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
