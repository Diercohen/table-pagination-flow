export const debounce = (callback: any, duration: number) => {
  let intervalId = 0;
  return (...args: any[]) => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    intervalId = setTimeout(() => {
      callback(...args);
    }, duration);
  };
};
