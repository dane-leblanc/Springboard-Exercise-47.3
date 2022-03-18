function findFloor(arr, num) {
  let upper = arr.length - 1;
  let lower = 0;
  let mid;
  while (upper >= lower) {
    mid = Math.floor((upper + lower) / 2);
    if (
      arr[mid] === num ||
      (arr[mid] < num && mid === arr.length - 1) ||
      (arr[mid] < num && arr[mid + 1] > num)
    ) {
      return arr[mid];
    } else if (arr[mid] > num) {
      upper = mid - 1;
    } else {
      lower = mid + 1;
    }
  }
  return -1;
}

let nums = [1, 2, 8, 10, 10, 12, 19];

console.log(findFloor(nums, 30));

module.exports = findFloor;
