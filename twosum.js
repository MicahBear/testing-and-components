//Two Sum - 06-21-23
function twoSum(nums, target) {
    let map = {};
      for (let i = 0; i < nums.length; i++) {
        let other= target - nums[i];
        if (map[other] !== undefined) {
          console.log([map[other], i], 'test');
        }
        map[nums[i]] = i;
      }
    }
  module.exports = twoSum;