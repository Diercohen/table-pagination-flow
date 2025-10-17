export const debounce = (callback: any, duration: number) => {
  let intervalId = 0;
  return (...args: any[]) => {
    if (intervalId) {
      return clearTimeout(intervalId);
    }
    intervalId = setTimeout(() => {
      callback(...args);
    }, duration);
  };
};
