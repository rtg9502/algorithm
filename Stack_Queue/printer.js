const priorities = [2, 1, 3, 2, 3, 4, 3];
const location = 2;
const sorted = [...priorities].sort((a, b) => b - a);
let searchIdx = 0;
let answer = 1;

for(let v of sorted) {
    let findIdx = priorities.indexOf(v, searchIdx);
    findIdx = (findIdx < 0) ? priorities.indexOf(v, 0) : findIdx;

    if(findIdx === location) return answer;

    searchIdx = findIdx + 1;
    answer++;
}

return answer;
