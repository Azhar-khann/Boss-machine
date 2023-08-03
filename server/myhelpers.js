function getMinionWork(WorkArray,id){
    const minionWork = WorkArray.filter((work) => {
      if (work.minionId === id) {
        return true; // Include the minion in the minionWork array
      } else {
        return false; // Exclude the minion from the minionWork array
      }
    });
    return minionWork
  
}

module.exports = getMinionWork
