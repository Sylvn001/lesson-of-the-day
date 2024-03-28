Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

# [SOLUTION] IN JS

```js
function twoSum(nums, target) {
  hasher = {};
  let index = 0;
  for (const element of nums) {
    if (hasher[element] != null) {
      return [hasher[element], index];
    }
    hasher[target - element] = index;
    index++;
  }
}

let nums = [2, 7, 11, 15];
let target = 9;

console.log(twoSum(nums, target));

twoSum(list, target);
console.log(twoSum(list, target));
```

### Explanation

Don't use brute force, this is a O(N²) solution.

Hashmap solution is O(N) soluition.

You can use a hashmap to calculate the arithmetic complement of two numbers. The hashmap contains the complement index and the actual index. The output will be [0,1] because 0 is the position of 2, and 1 the position of 7
