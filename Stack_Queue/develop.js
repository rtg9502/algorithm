function remain(a,b) {
    return Math.ceil((100-a)/b)
}
const answer = [];
const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];
const remains = progresses.map((r,i) => {
    return remain(r,speeds[i])
})

let idx = -1;

remains.reduce((acc,cur) => {
    if(acc<cur) {
        idx++;
        answer.push(1);
    }else {
        answer[idx]++;
    }
    return Math.max(acc,cur);
},-1)

console.log(answer)
return answer