let timerArr = process.argv.slice(2);
timerArr.forEach((time) => {
  if (time < 0 || isNaN(time)) {
    // skip
  } else {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000);
  }
});
