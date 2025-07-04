function twoSum(nums, target) {
    const numMap = {}; // stores number -> index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (complement in numMap) {
            return [numMap[complement], i];
        }

        numMap[nums[i]] = i;
    }
}
const nums = [2, 7, 11, 15];
const target = 9;

const result = twoSum(nums, target);
console.log(result); 
