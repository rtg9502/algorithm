const trucks = [10,10,10,10,10,10,10,10];
const weight = 100;
const bridgeLen = 100;
let time = 0;
const bridge = Array.from({length: bridgeLen}, () => 0);

while(trucks.length){
    time++;
    bridge.shift();
    const sum = bridge.reduce((a,c)=>a+c,0) + trucks[0];
    const pushValue = sum <= weight ? trucks.shift() : 0;
    bridge.push(pushValue);
} 

return time + bridgeLen
