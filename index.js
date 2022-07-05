const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// new variable totalBatteries = sum of all battery amounts in batteryBatches array. Use reduce for this.

const totalBatteries = batteryBatches.reduce((previousValue, currentValue) => previousValue + currentValue
)