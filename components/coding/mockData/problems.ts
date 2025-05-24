export type Problem = {
  id: string;
  title: string;
  difficulty: string;
  category: string;
  problemId: string;
  problemNo: number;
  videoId?: string;
  isNotParse: boolean;
  description: string[];
  image?: string;
  functionSignature: { javascript: string; python: string };
  examples: {
    input: string;
    output: string;
    explanation?: string;
  }[];
  constraints: string[];
  testCases: {
    input: number[][] | number[];
    expectedOutput: number[];
  };
};

export const problemsList = [
  {
    problemId: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: ["Array", "Hash Table"],
    videoId: "8-k1C6ehKuw",
    isNotParse: false,
    description: [
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
      "You can return the answer in any order.",
    ],
    image: "",
    functionSignature: {
      javascript: `// Must return your output
function twoSum(nums, target) {
  // Write your code here
}

// Don't touch this...
const nums = JSON.parse(process.argv[2]);
const target = JSON.parse(process.argv[3]);
const result = twoSum(nums, target);
console.log(result);
    `,
      python: `import sys
import json

# Must return your output
def twoSum(nums, target):
  # Write your code here

# Don't touch this...
if __name__ == "__main__":
  nums = json.loads(sys.argv[1])
  target = json.loads(sys.argv[2])
  result = twoSum(nums, target)
  print(result)`,
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0, 1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1, 2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0, 1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists.",
    ],
    testCases: [
      { input: [[2, 7, 11, 15], 9], expectedOutput: [0, 1] },
      { input: [[3, 2, 4], 6], expectedOutput: [1, 2] },
      { input: [[3, 3], 6], expectedOutput: [0, 1] },
    ],
  },
  {
    problemId: "median-of-two-sorted-array",
    title: "Median of Two Sorted Array",
    difficulty: "Hard",
    category: ["Array", "Binary Search", "Divide and Conquer"],
    videoId: "q6IEA26hvXc",
    isNotParse: false,
    description: [
      "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
      "The overall run time complexity should be O(log (m+n)).",
    ],
    image: "",
    functionSignature: {
      javascript: `// Must return your output
function findMedianSortedArrays(num1, num2) {
  // Write your code here
}

// Don't touch this...
const num1 = JSON.parse(process.argv[2]);
const num2 = JSON.parse(process.argv[3]);
const result = findMedianSortedArrays(num1, num2);
console.log(result);
    `,
      python: `import sys
import json

# Must return your output
def findMedianSortedArrays(num1, num2):
  # Write your code here

# Don't touch this...
if __name__ == "__main__":
  num1 = json.loads(sys.argv[1])
  num2 = json.loads(sys.argv[2])
  result = findMedianSortedArrays(num1, num2)
  print(result)`,
    },
    examples: [
      {
        input: "nums1 = [1,3], nums2 = [2]",
        output: "2",
        explanation: "merged array = [1,2,3] and median is 2.",
      },
      {
        input: "nums1 = [1,2], nums2 = [3,4]",
        output: "2.5",
        explanation:
          "merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.",
      },
    ],
    constraints: [
      "nums1.length == m",
      "nums2.length == n",
      "0 <= m <= 1000",
      "0 <= n <= 1000",
      "1 <= m + n <= 2000",
      "-106 <= nums1[i], nums2[i] <= 106",
    ],
    testCases: [
      { input: [[1, 3], [2]], expectedOutput: 2.0 },
      {
        input: [
          [1, 2],
          [3, 4],
        ],
        expectedOutput: 2.5,
      },
    ],
  },
  {
    problemId: "3sum",
    title: "3Sum",
    difficulty: "Medium",
    category: ["Array", "Two Pointers", "Sorting"],
    videoId: "jzZsG8n2R9A",
    isNotParse: false,
    description: [
      "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
      "Notice that the solution set must not contain duplicate triplets.",
    ],
    image: "",
    functionSignature: {
      javascript: `// Must return your output
function threeSum(nums) {
  // Write your code here
}

// Don't touch this...
const nums = JSON.parse(process.argv[2]);
const result = threeSum(nums);
console.log(result);
    `,
      python: `import sys
import json

# Must return your output
def threeSum(nums):
  # Write your code here

# Don't touch this...
if __name__ == "__main__":
  nums = json.loads(sys.argv[1])
  result = threeSum(nums)
  print(result)`,
    },
    examples: [
      {
        input: "nums = [-1,0,1,2,-1,-4]",
        output: "[[-1,-1,2],[-1,0,1]]",
        explanation: `nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.`,
      },
      {
        input: "nums = [0,1,1]",
        output: "[]",
        explanation: "The only possible triplet does not sum up to 0.",
      },
      {
        input: "nums = [0,0,0]",
        output: "[[0,0,0]]",
        explanation: "The only possible triplet sums up to 0.",
      },
    ],
    constraints: ["3 <= nums.length <= 3000", "-10^5 <= nums[i] <= 10^5"],
    testCases: [
      {
        input: [[-1, 0, 1, 2, -1, -4]],
        expectedOutput: [
          [-1, -1, 2],
          [-1, 0, 1],
        ],
      },
      {
        input: [[0, 1, 1]],
        expectedOutput: [],
      },
      { input: [[0, 0, 0]], expectedOutput: [[0, 0, 0]] },
    ],
  },
  {
    problemId: "remove-duplicates-from-sorted-array",
    title: "Remove Duplicates from Sorted Array",
    difficulty: "Easy",
    category: ["Array", "Two Pointers"],
    videoId: "dIzcHKy5FkI",
    isNotParse: false,
    description: [
      "Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.",
      "Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:",
      "Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.",
      "Return k.",
    ],
    image: "",
    functionSignature: {
      javascript: `// Must return your output
function removeDuplicates(nums) {
  // Write your code here
}

// Don't touch this...
const nums = JSON.parse(process.argv[2]);
const result = removeDuplicates(nums);
console.log(result);
    `,
      python: `import sys
import json

# Must return your output
def removeDuplicates(nums):
  # Write your code here

# Don't touch this...
if __name__ == "__main__":
  nums = json.loads(sys.argv[1])
  result = removeDuplicates(nums)
  print(result)`,
    },
    examples: [
      {
        input: "nums = [1,1,2]",
        output: "2",
        explanation: `Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).`,
      },
      {
        input: "nums = [0,0,1,1,1,2,2,3,3,4]",
        output: "5",
        explanation: `Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).`,
      },
    ],
    constraints: [
      "1 <= nums.length <= 3 * 104",
      "-100 <= nums[i] <= 100",
      "nums is sorted in non-decreasing order.",
    ],
    testCases: [
      {
        input: [[1, 1, 2]],
        expectedOutput: 2,
      },
      {
        input: [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]],
        expectedOutput: 5,
      },
    ],
  },
  {
    problemId: "next-permutation",
    title: "Next Permutation",
    difficulty: "Medium",
    category: ["Array", "Two Pointers"],
    videoId: "Vcgja9bbHcA",
    isNotParse: false,
    description: [
      "A permutation of an array of integers is an arrangement of its members into a sequence or linear order.",
      "For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].",
      "The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).",
      "For example, the next permutation of arr = [1,2,3] is [1,3,2].",
      "Similarly, the next permutation of arr = [2,3,1] is [3,1,2].",
      "While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.",
      "Given an array of integers nums, find the next permutation of nums.",
    ],
    image: "",
    functionSignature: {
      javascript: `// Must return your output
function nextPermutation(nums) {
  // Write your code here
}

// Don't touch this...
const nums = JSON.parse(process.argv[2]);
const result = nextPermutation(nums);
console.log(result);
    `,
      python: `import sys
import json

# Must return your output
def nextPermutation(nums):
  # Write your code here

# Don't touch this...
if __name__ == "__main__":
  nums = json.loads(sys.argv[1])
  result = nextPermutation(nums)
  print(result)`,
    },
    examples: [
      {
        input: "nums = [1,2,3]",
        output: "[1,3,2]",
      },
      {
        input: "nums = [3,2,1]",
        output: "[1,2,3]",
      },
      {
        input: "nums = [1,1,5]",
        output: "[1,5,1]",
      },
    ],
    constraints: ["1 <= nums.length <= 100", "0 <= nums[i] <= 100"],
    testCases: [
      {
        input: [[1, 2, 3]],
        expectedOutput: [1, 3, 2],
      },
      {
        input: [[3, 2, 1]],
        expectedOutput: [1, 2, 3],
      },
      {
        input: [[1, 1, 5]],
        expectedOutput: [1, 5, 1],
      },
    ],
  },
  {
    problemId: "search-insert-position",
    title: "Search Insert Position",
    difficulty: "Easy",
    category: ["Array", "Binary Search"],
    videoId: "K-RYzDZkzCI",
    isNotParse: false,
    description: [
      "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.",
      "You must write an algorithm with O(log n) runtime complexity.",
    ],
    image: "",
    functionSignature: {
      javascript: `// Must return your output
function searchInsert(nums, target) {
  // Write your code here
}

// Don't touch this...
const nums = JSON.parse(process.argv[2]);
const target = JSON.parse(process.argv[3]);
const result = searchInsert(nums, target);
console.log(result);
    `,
      python: `import sys
import json

# Must return your output
def searchInsert(nums, target):
  # Write your code here

# Don't touch this...
if __name__ == "__main__":
  nums = json.loads(sys.argv[1])
  target = json.loads(sys.argv[2])
  result = searchInsert(nums, target)
  print(result)`,
    },
    examples: [
      {
        input: "nums = [1,3,5,6], target = 5",
        output: "2",
      },
      {
        input: "nums = [1,3,5,6], target = 2",
        output: "1",
      },
      {
        input: "nums = [1,3,5,6], target = 7",
        output: "4",
      },
    ],
    constraints: [
      "1 <= nums.length <= 10^4",
      "-10^4 <= nums[i] <= 10^4",
      "nums contains distinct values sorted in ascending order.",
      "-104 <= target <= 104",
    ],
    testCases: [
      {
        input: [[1, 3, 5, 6], 5],
        expectedOutput: 2,
      },
      {
        input: [[1, 3, 5, 6], 2],
        expectedOutput: 1,
      },
      {
        input: [[1, 3, 5, 6], 7],
        expectedOutput: 4,
      },
    ],
  },
  {
    problemId: "plus-one",
    title: "Plus One",
    difficulty: "Easy",
    category: ["Array", "Math"],
    videoId: "jIaA8boiG1s",
    isNotParse: false,
    description: [
      "You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.",
      "Increment the large integer by one and return the resulting array of digits.",
    ],
    image: "",
    functionSignature: {
      javascript: `// Must return your output
function plusOne(digits) {
  // Write your code here
}

// Don't touch this...
const digits = JSON.parse(process.argv[2]);
const result = plusOne(digits);
console.log(result);
    `,
      python: `import sys
import json

# Must return your output
def plusOne(digits):
  # Write your code here

# Don't touch this...
if __name__ == "__main__":
  digits = json.loads(sys.argv[1])
  result = plusOne(digits)
  print(result)`,
    },
    examples: [
      {
        input: "digits = [1,2,3]",
        output: "[1,2,4]",
        explanation: `The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].`,
      },
      {
        input: "digits = [4,3,2,1]",
        output: "[4,3,2,2]",
        explanation: `The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].`,
      },
      {
        input: "digits = [9]",
        output: "[1,0]",
        explanation: `The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].`,
      },
    ],
    constraints: [
      "1 <= digits.length <= 100",
      "0 <= digits[i] <= 9",
      "digits does not contain any leading 0's.",
    ],
    testCases: [
      {
        input: [[1, 2, 3]],
        expectedOutput: [1, 2, 4],
      },
      {
        input: [[4, 3, 2, 1]],
        expectedOutput: [4, 3, 2, 2],
      },
      {
        input: [[9]],
        expectedOutput: [1, 0],
      },
    ],
  },
  {
    problemId: "roman-to-integer",
    title: "Roman to Integer",
    difficulty: "Easy",
    category: ["String", "Hash Table", "Math"],
    videoId: "CwhpILAlfjg",
    isNotParse: false,
    description: [
      "Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.",
      `
Symbol       Value
  I                    1
  V                   5
  X                  10
  L                  50
  C                 100
  D                 500
  M                1000`,
      "For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.",
      "Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:",
      "(i). I can be placed before V (5) and X (10) to make 4 and 9.",
      "(ii). X can be placed before L (50) and C (100) to make 40 and 90. ",
      "(iii). C can be placed before D (500) and M (1000) to make 400 and 900.",
      "Given a roman numeral, convert it to an integer.",
    ],
    image: "",
    functionSignature: {
      javascript: `// Must return your output
function romanToInt(s) {
  // Write your code here
}

// Don't touch this...
const s = JSON.parse(process.argv[2]);
const result = romanToInt(s);
console.log(result);
    `,
      python: `import sys
import json

# Must return your output
def romanToInt(s):
  # Write your code here

# Don't touch this...
if __name__ == "__main__":
  s = json.loads(sys.argv[1])
  result = romanToInt(s)
  print(result)`,
    },
    examples: [
      {
        input: 's = "III"',
        output: "3",
        explanation: `III = 3.`,
      },
      {
        input: 's = "LVIII"',
        output: "58",
        explanation: `L = 50, V= 5, III = 3.`,
      },
      {
        input: 's = "MCMXCIV"',
        output: "1994",
        explanation: `M = 1000, CM = 900, XC = 90 and IV = 4.`,
      },
    ],
    constraints: [
      "1 <= s.length <= 15",
      "s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').",
      "It is guaranteed that s is a valid roman numeral in the range [1, 3999].",
    ],
    testCases: [
      {
        input: ["III"],
        expectedOutput: 3,
      },
      {
        input: ["LVIII"],
        expectedOutput: 58,
      },
      {
        input: ["MCMXCIV"],
        expectedOutput: 1994,
      },
    ],
  },
  {
    problemId: "generate-parentheses",
    title: "Generate Parentheses",
    difficulty: "Medium",
    category: ["String", "Dynamic Programming", "Backtracking"],
    videoId: "n5wAxQmMKkI",
    isNotParse: true,
    description: [
      "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
    ],
    image: "",
    functionSignature: {
      javascript: `// Must return your output
function generateParenthesis(n) {
  // Write your code here
}

// Don't touch this...
const n = JSON.parse(process.argv[2]);
const result = generateParenthesis(n);
console.log(result);
    `,
      python: `import sys
import json

# Must return your output
def generateParenthesis(n):
  # Write your code here

# Don't touch this...
if __name__ == "__main__":
  n = json.loads(sys.argv[1])
  result = generateParenthesis(n)
  print(result)`,
    },
    examples: [
      {
        input: "n = 3",
        output: '["((()))","(()())","(())()","()(())","()()()"]',
      },
      {
        input: "n = 1",
        output: '["()"]',
      },
    ],
    constraints: ["1 <= n <= 8"],
    testCases: [
      {
        input: [3],
        expectedOutput: "[ '((()))', '(()())', '(())()', '()(())', '()()()' ]",
      },
      {
        input: [1],
        expectedOutput: "[ '()' ]",
      },
    ],
  },
  {
    problemId: "longest-common-prefix",
    title: "Longest Common Prefix",
    difficulty: "Easy",
    category: ["String", "Trie"],
    videoId: "0sWShKIJoo4",
    isNotParse: true,
    description: [
      "Write a function to find the longest common prefix string amongst an array of strings.",
      'If there is no common prefix, return an empty string "".',
    ],
    image: "",
    functionSignature: {
      javascript: `// Must return your output
function longestCommonPrefix(strs) {
  // Write your code here
}

// Don't touch this...
const strs = JSON.parse(process.argv[2]);
const result = longestCommonPrefix(strs);
console.log(result);
    `,
      python: `import sys
import json

# Must return your output
def longestCommonPrefix(strs):
  # Write your code here

# Don't touch this...
if __name__ == "__main__":
  strs = json.loads(sys.argv[1])
  result = longestCommonPrefix(strs)
  print(result)`,
    },
    examples: [
      {
        input: 'strs = ["flower","flow","flight"]',
        output: '"fl"',
      },
      {
        input: 'strs = ["dog","racecar","car"]',
        output: '""',
        explanation: "There is no common prefix among the input strings.",
      },
    ],
    constraints: [
      "1 <= strs.length <= 200",
      "0 <= strs[i].length <= 200",
      "strs[i] consists of only lowercase English letters if it is non-empty.",
    ],
    testCases: [
      {
        input: [["flower", "flow", "flight"]],
        expectedOutput: "fl",
      },
      {
        input: [["dog", "racecar", "car"]],
        expectedOutput: "",
      },
    ],
  },
  {
    problemId: "majority-element",
    title: "Majority Element",
    difficulty: "Easy",
    category: ["Array", "Hash Table", "Divide and Conquer"],
    videoId: "7pnhv842keE",
    isNotParse: false,
    description: [
      "Given an array nums of size n, return the majority element.",
      "The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.",
    ],
    image: "",
    functionSignature: {
      javascript: `// Must return your output
function majorityElement(nums) {
  // Write your code here
}

// Don't touch this...
const nums = JSON.parse(process.argv[2]);
const result = majorityElement(nums);
console.log(result);
    `,
      python: `import sys
import json

# Must return your output
def majorityElement(nums):
  # Write your code here

# Don't touch this...
if __name__ == "__main__":
  nums = json.loads(sys.argv[1])
  result = majorityElement(nums)
  print(result)`,
    },
    examples: [
      {
        input: "nums = [3,2,3]",
        output: "3",
      },
      {
        input: "nums = [2,2,1,1,1,2,2]",
        output: "2",
      },
    ],
    constraints: [
      "n == nums.length",
      "1 <= n <= 5 * 10^4",
      "-109 <= nums[i] <= 109",
    ],
    testCases: [
      {
        input: [[3, 2, 3]],
        expectedOutput: 3,
      },
      {
        input: [[2, 2, 1, 1, 1, 2, 2]],
        expectedOutput: 2,
      },
    ],
  },
  {
    problemId: "intersection-of-two-arrays",
    title: "Intersection of Two Arrays",
    difficulty: "Easy",
    category: ["Array", "Hash Table", "Two Pointer"],
    videoId: "fwUTXaMom6U",
    isNotParse: false,
    description: [
      "Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.",
      "Intersection -> The intersection of two arrays is defined as the set of elements that are present in both arrays.",
    ],
    image: "",
    functionSignature: {
      javascript: `// Must return your output
function intersection(nums1, nums2) {
  // Write your code here
}

// Don't touch this...
const nums1 = JSON.parse(process.argv[2]);
const nums2 = JSON.parse(process.argv[3]);
const result = intersection(nums1, nums2);
console.log(result);
    `,
      python: `import sys
import json

# Must return your output
def intersection(nums1, nums2):
  # Write your code here

# Don't touch this...
if __name__ == "__main__":
  nums1 = json.loads(sys.argv[1])
  nums2 = json.loads(sys.argv[2])
  result = intersection(nums1, nums2)
  print(result)`,
    },
    examples: [
      {
        input: "nums1 = [1,2,2,1], nums2 = [2,2]",
        output: "[2]",
      },
      {
        input: "nums1 = [4,9,5], nums2 = [9,4,9,8,4]",
        output: "[9,4]",
        explanation: "[4,9] is also accepted.",
      },
    ],
    constraints: [
      "1 <= nums1.length, nums2.length <= 1000",
      "0 <= nums1[i], nums2[i] <= 1000",
    ],
    testCases: [
      {
        input: [
          [1, 2, 2, 1],
          [2, 2],
        ],
        expectedOutput: [2],
      },
      {
        input: [
          [4, 9, 5],
          [9, 4, 9, 8, 4],
        ],
        expectedOutput: [9, 4],
      },
    ],
  },
  {
    problemId: "queue-reconstructon-by-height",
    title: "Queue Reconstrunction by Height",
    difficulty: "Medium",
    category: ["Array", "Binary Indexed Tree", "Segment Tree"],
    videoId: "khddrw6Bfyw",
    isNotParse: false,
    description: [
      "You are given an array of people, people, which are the attributes of some people in a queue (not necessarily in order). Each people[i] = [hi, ki] represents the ith person of height hi with exactly ki other people in front who have a height greater than or equal to hi.",
      "Reconstruct and return the queue that is represented by the input array people. The returned queue should be formatted as an array queue, where queue[j] = [hj, kj] is the attributes of the jth person in the queue (queue[0] is the person at the front of the queue).",
    ],
    image: "",
    functionSignature: {
      javascript: `// Must return your output
function reconstructQueue(people) {
  // Write your code here
}

// Don't touch this...
const people = JSON.parse(process.argv[2]);
const result = reconstructQueue(people);
console.log(result);
    `,
      python: `import sys
import json

# Must return your output
def reconstructQueue(people):
  # Write your code here

# Don't touch this...
if __name__ == "__main__":
  people = json.loads(sys.argv[1])
  result = reconstructQueue(people)
  print(result)`,
    },
    examples: [
      {
        input: "people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]",
        output: "[[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]",
        explanation: `Person 0 has height 5 with no other people taller or the same height in front.
Person 1 has height 7 with no other people taller or the same height in front.
Person 2 has height 5 with two persons taller or the same height in front, which is person 0 and 1.
Person 3 has height 6 with one person taller or the same height in front, which is person 1.
Person 4 has height 4 with four people taller or the same height in front, which are people 0, 1, 2, and 3.
Person 5 has height 7 with one person taller or the same height in front, which is person 1.
Hence [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]] is the reconstructed queue.`,
      },
      {
        input: "people = [[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]]",
        output: "[[4,0],[5,0],[2,2],[3,2],[1,4],[6,0]]",
      },
    ],
    constraints: [
      "1 <= people.length <= 2000",
      "0 <= hi <= 10^6",
      "0 <= ki < people.length",
      "It is guaranteed that the queue can be reconstructed.",
    ],
    testCases: [
      {
        input: [
          [
            [7, 0],
            [4, 4],
            [7, 1],
            [5, 0],
            [6, 1],
            [5, 2],
          ],
        ],
        expectedOutput: [
          [5, 0],
          [7, 0],
          [5, 2],
          [6, 1],
          [4, 4],
          [7, 1],
        ],
      },
      {
        input: [
          [
            [6, 0],
            [5, 0],
            [4, 0],
            [3, 2],
            [2, 2],
            [1, 4],
          ],
        ],
        expectedOutput: [
          [4, 0],
          [5, 0],
          [2, 2],
          [3, 2],
          [1, 4],
          [6, 0],
        ],
      },
    ],
  },
  {
    problemId: "transform-array-by-parity",
    title: "Transform Array by Parity",
    difficulty: "Easy",
    category: ["Array", "Sorting", "Counting"],
    videoId: "xSqvGaOYMPM",
    isNotParse: false,
    description: [
      "You are given an integer array nums. Transform nums by performing the following operations in the exact order specified:",
      "1. Replace each even number with 0.",
      "2. Replace each odd numbers with 1.",
      "3. Sort the modified array in non-decreasing order.",
      "Return the resulting array after performing these operations.",
    ],
    image: "",
    functionSignature: {
      javascript: `// Must return your output
function transformArray(nums) {
  // Write your code here
}

// Don't touch this...
const nums = JSON.parse(process.argv[2]);
const result = transformArray(nums);
console.log(result);
    `,
      python: `import sys
import json

# Must return your output
def transformArray(nums):
  # Write your code here

# Don't touch this...
if __name__ == "__main__":
  nums = json.loads(sys.argv[1])
  result = transformArray(nums)
  print(result)`,
    },
    examples: [
      {
        input: "nums = [4,3,2,1]",
        output: "[0,0,1,1]",
        explanation: `-> Replace the even numbers (4 and 2) with 0 and the odd numbers (3 and 1) with 1. Now, nums = [0, 1, 0, 1].
-> After sorting nums in non-descending order, nums = [0, 0, 1, 1].`,
      },
      {
        input: "nums = [1,5,1,4,2]",
        output: "[0,0,1,1,1]",
        explanation: `-> Replace the even numbers (4 and 2) with 0 and the odd numbers (1, 5 and 1) with 1. Now, nums = [1, 1, 1, 0, 0].
-> After sorting nums in non-descending order, nums = [0, 0, 1, 1, 1].`,
      },
    ],
    constraints: ["1 <= nums.length <= 100", "1 <= nums[i] <= 1000"],
    testCases: [
      {
        input: [[4, 3, 2, 1]],
        expectedOutput: [0, 0, 1, 1],
      },
      {
        input: [[1, 5, 1, 4, 2]],
        expectedOutput: [0, 0, 1, 1, 1],
      },
    ],
  },
  {
    problemId: "count-substring-that-satisfy-k-constraint-i",
    title: "Count Substrings That Satisfy K-Constraint I",
    difficulty: "Easy",
    category: ["String", "Sliding Window"],
    videoId: "",
    isNotParse: false,
    description: [
      "You are given a binary string s and an integer k.",
      "A binary string satisfies the k-constraint if either of the following conditions holds:",
      "-> The number of 0's in the string is at most k.",
      "-> The number of 1's in the string is at most k.",
      "Return an integer denoting the number of substrings of s that satisfy the k-constraint.",
    ],
    image: "",
    functionSignature: {
      javascript: `// Must return your output
function countKConstraintSubstrings(s, k) {
  // Write your code here
}

// Don't touch this...
const s = JSON.parse(process.argv[2]);
const k = JSON.parse(process.argv[3]);
const result = countKConstraintSubstrings(s, k);
console.log(result);
    `,
      python: `import sys
import json

# Must return your output
def countKConstraintSubstrings(s, k):
  # Write your code here

# Don't touch this...
if __name__ == "__main__":
  s = json.loads(sys.argv[1])
  k = json.loads(sys.argv[2])
  result = countKConstraintSubstrings(s, k)
  print(result)`,
    },
    examples: [
      {
        input: 's = "10101", k = 1',
        output: "12",
        explanation: `Every substring of s except the substrings "1010", "10101", and "0101" satisfies the k-constraint.`,
      },
      {
        input: 's = "1010101", k = 2',
        output: "25",
        explanation: `Every substring of s except the substrings with a length greater than 5 satisfies the k-constraint.`,
      },
      {
        input: 's = "11111", k = 1',
        output: "15",
        explanation: `All substrings of s satisfy the k-constraint.`,
      },
    ],
    constraints: [
      "1 <= s.length <= 50 ",
      "1 <= k <= s.length",
      "s[i] is either '0' or '1'.",
    ],
    testCases: [
      {
        input: ["10101", 1],
        expectedOutput: 12,
      },
      {
        input: ["1010101", 2],
        expectedOutput: 25,
      },
      {
        input: ["11111", 1],
        expectedOutput: 15,
      },
    ],
  },
  {
    problemId: "count-number-of-nice-subarrays",
    title: "Count Number of Nice Subarrays",
    difficulty: "Medium",
    category: ["Array", "Hash Table", "Math"],
    videoId: "4zNK0rhFfcA",
    isNotParse: false,
    description: [
      "Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.",
      "Return the number of nice sub-arrays.",
    ],
    image: "",
    functionSignature: {
      javascript: `// Must return your output
function numberOfSubarrays(nums, k) {
  // Write your code here
}

// Don't touch this...
const nums = JSON.parse(process.argv[2]);
const k = JSON.parse(process.argv[3]);
const result = numberOfSubarrays(nums, k);
console.log(result);
    `,
      python: `import sys
import json

# Must return your output
def numberOfSubarrays(nums, k):
  # Write your code here

# Don't touch this...
if __name__ == "__main__":
  nums = json.loads(sys.argv[1])
  k = json.loads(sys.argv[2])
  result = numberOfSubarrays(nums, k)
  print(result)`,
    },
    examples: [
      {
        input: "nums = [1,1,2,1,1], k = 3",
        output: "2",
        explanation: `The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].`,
      },
      {
        input: "nums = [2,4,6], k = 1",
        output: "0",
        explanation: `There are no odd numbers in the array.`,
      },
      {
        input: "nums = [2,2,2,1,2,2,1,2,2,2], k = 2",
        output: "16",
      },
    ],
    constraints: [
      "1 <= nums.length <= 50000",
      "1 <= nums[i] <= 10^5",
      "1 <= k <= nums.length",
    ],
    testCases: [
      {
        input: [[1, 1, 2, 1, 1], 3],
        expectedOutput: 2,
      },
      {
        input: [[2, 4, 6], 1],
        expectedOutput: 0,
      },
      {
        input: [[2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2],
        expectedOutput: 16,
      },
    ],
  },
  {
    problemId: "strictly-palindromic-number",
    title: "Strictly Palindromic Number",
    difficulty: "Medium",
    category: ["Math", "Two Pointers", "Brainteaser"],
    videoId: "",
    isNotParse: false,
    description: [
      "An integer n is strictly palindromic if, for every base b between 2 and n - 2 (inclusive), the string representation of the integer n in base b is palindromic.",
      "Given an integer n, return true if n is strictly palindromic and false otherwise.",
      "A string is palindromic if it reads the same forward and backward.",
    ],
    image: "",
    functionSignature: {
      javascript: `// Must return your output
function isStrictlyPalindromic(n) {
  // Write your code here
}

// Don't touch this...
const n = JSON.parse(process.argv[2]);
const result = isStrictlyPalindromic(n);
console.log(result);
    `,
      python: `import sys
import json

# Must return your output
def isStrictlyPalindromic(n):
  # Write your code here

# Don't touch this...
if __name__ == "__main__":
  n = json.loads(sys.argv[1])
  result = isStrictlyPalindromic(n)
  print(result)`,
    },
    examples: [
      {
        input: "n = 9",
        output: "false",
        explanation: `In base 2: 9 = 1001 (base 2), which is palindromic.
In base 3: 9 = 100 (base 3), which is not palindromic.
Therefore, 9 is not strictly palindromic so we return false.
Note that in bases 4, 5, 6, and 7, n = 9 is also not palindromic.`,
      },
      {
        input: "n = 4",
        output: "false",
        explanation: `We only consider base 2: 4 = 100 (base 2), which is not palindromic.
Therefore, we return false.`,
      },
    ],
    constraints: ["4 <= n <= 105"],
    testCases: [
      {
        input: [9],
        expectedOutput: false,
      },
      {
        input: [4],
        expectedOutput: false,
      },
    ],
  },
  {
    problemId: "count-pairs-whose-sum-is-less-than-target",
    title: "Count Pairs Whose Sum is Less than Target",
    difficulty: "Easy",
    category: ["Array", "Two Pointers", "Binary Search"],
    videoId: "",
    isNotParse: false,
    description: [
      "Given a 0-indexed integer array nums of length n and an integer target, return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.",
    ],
    image: "",
    functionSignature: {
      javascript: `// Must return your output
function countPairs(nums, target) {
  // Write your code here
}

// Don't touch this...
const nums = JSON.parse(process.argv[2]);
const target = JSON.parse(process.argv[3]);
const result = countPairs(nums, target);
console.log(result);
    `,
      python: `import sys
import json

# Must return your output
def countPairs(nums, target):
  # Write your code here

# Don't touch this...
if __name__ == "__main__":
  nums = json.loads(sys.argv[1])
  target = json.loads(sys.argv[2])
  result = countPairs(nums, target)
  print(result)`,
    },
    examples: [
      {
        input: "nums = [-1,1,2,3,1], target = 2",
        output: "3",
        explanation: `There are 3 pairs of indices that satisfy the conditions in the statement:
- (0, 1) since 0 < 1 and nums[0] + nums[1] = 0 < target
- (0, 2) since 0 < 2 and nums[0] + nums[2] = 1 < target 
- (0, 4) since 0 < 4 and nums[0] + nums[4] = 0 < target
Note that (0, 3) is not counted since nums[0] + nums[3] is not strictly less than the target.`,
      },
      {
        input: "nums = [-6,2,5,-2,-7,-1,3], target = -2",
        output: "10",
        explanation: `There are 10 pairs of indices that satisfy the conditions in the statement:
- (0, 1) since 0 < 1 and nums[0] + nums[1] = -4 < target
- (0, 3) since 0 < 3 and nums[0] + nums[3] = -8 < target
- (0, 4) since 0 < 4 and nums[0] + nums[4] = -13 < target
- (0, 5) since 0 < 5 and nums[0] + nums[5] = -7 < target
- (0, 6) since 0 < 6 and nums[0] + nums[6] = -3 < target
- (1, 4) since 1 < 4 and nums[1] + nums[4] = -5 < target
- (3, 4) since 3 < 4 and nums[3] + nums[4] = -9 < target
- (3, 5) since 3 < 5 and nums[3] + nums[5] = -3 < target
- (4, 5) since 4 < 5 and nums[4] + nums[5] = -8 < target
- (4, 6) since 4 < 6 and nums[4] + nums[6] = -4 < target`,
      },
    ],
    constraints: [
      "1 <= nums.length == n <= 50",
      "-50 <= nums[i], target <= 50",
    ],
    testCases: [
      {
        input: [[-1, 1, 2, 3, 1], 2],
        expectedOutput: 3,
      },
      {
        input: [[-6, 2, 5, -2, -7, -1, 3], -2],
        expectedOutput: 10,
      },
    ],
  },
  {
    problemId: "maximum-score-of-a-good-subarray",
    title: "Maximum Score of a Good Subarray",
    difficulty: "Hard",
    category: ["Array", "Two Pointers", "Binary Search"],
    videoId: "",
    isNotParse: false,
    description: [
      "You are given an array of integers nums (0-indexed) and an integer k.",
      "The score of a subarray (i, j) is defined as min(nums[i], nums[i+1], ..., nums[j]) * (j - i + 1). A good subarray is a subarray where i <= k <= j.",
      "Return the maximum possible score of a good subarray.",
    ],
    image: "",
    functionSignature: {
      javascript: `// Must return your output
function maximumScore(nums, k) {
  // Write your code here
}

// Don't touch this...
const nums = JSON.parse(process.argv[2]);
const k = JSON.parse(process.argv[3]);
const result = maximumScore(nums, k);
console.log(result);
    `,
      python: `import sys
import json

# Must return your output
def maximumScore(nums, k):
  # Write your code here

# Don't touch this...
if __name__ == "__main__":
  nums = json.loads(sys.argv[1])
  k = json.loads(sys.argv[2])
  result = maximumScore(nums, k)
  print(result)`,
    },
    examples: [
      {
        input: "nums = [1,4,3,7,4,5], k = 3",
        output: "15",
        explanation: `The optimal subarray is (1, 5) with a score of min(4,3,7,4,5) * (5-1+1) = 3 * 5 = 15.`,
      },
      {
        input: "nums = [5,5,4,5,4,1,1,1], k = 0",
        output: "20",
        explanation: `The optimal subarray is (0, 4) with a score of min(5,5,4,5,4) * (4-0+1) = 4 * 5 = 20.`,
      },
    ],
    constraints: [
      "1 <= nums.length <= 10^5",
      "1 <= nums[i] <= 2 * 10^4",
      "0 <= k < nums.length",
    ],
    testCases: [
      {
        input: [[1, 4, 3, 7, 4, 5], 3],
        expectedOutput: 15,
      },
      {
        input: [[5, 5, 4, 5, 4, 1, 1, 1], 0],
        expectedOutput: 20,
      },
    ],
  },
  {
    problemId: "left-and-right-sum-differences",
    title: "Left and Right Sum Differences",
    difficulty: "Easy",
    category: ["Array", "Prefix Sum"],
    videoId: "zdSKxK502bc",
    isNotParse: false,
    description: [
      "You are given a 0-indexed integer array nums of size n.",
      "Define two arrays leftSum and rightSum where:",
      "-> leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.",
      "-> rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.",
      "Return an integer array answer of size n where answer[i] = |leftSum[i] - rightSum[i]|.",
    ],
    image: "",
    functionSignature: {
      javascript: `// Must return your output
function leftRightDifference(nums) {
  // Write your code here
}

// Don't touch this...
const nums = JSON.parse(process.argv[2]);
const result = leftRightDifference(nums);
console.log(result);
    `,
      python: `import sys
import json

# Must return your output
def leftRightDifference(nums):
  # Write your code here

# Don't touch this...
if __name__ == "__main__":
  nums = json.loads(sys.argv[1])
  result = leftRightDifference(nums)
  print(result)`,
    },
    examples: [
      {
        input: "nums = [10,4,8,3]",
        output: "[15,1,11,22]",
        explanation: `The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].`,
      },
      {
        input: "nums = [1]",
        output: "[0]",
        explanation: `The array leftSum is [0] and the array rightSum is [0].
The array answer is [|0 - 0|] = [0].`,
      },
    ],
    constraints: ["1 <= nums.length <= 1000", "1 <= nums[i] <= 10^5"],
    testCases: [
      {
        input: [[10, 4, 8, 3]],
        expectedOutput: [15, 1, 11, 22],
      },
      {
        input: [[1]],
        expectedOutput: [0],
      },
    ],
  },
  {
    problemId: "minimum-amount-of-time-to-collect-garbage",
    title: "Minimum Amount of Time to Collect Garbage",
    difficulty: "Medium",
    category: ["Array", "String", "Prefix Sum"],
    videoId: "",
    isNotParse: false,
    description: [
      "You are given a 0-indexed array of strings garbage where garbage[i] represents the assortment of garbage at the ith house. garbage[i] consists only of the characters 'M', 'P' and 'G' representing one unit of metal, paper and glass garbage respectively. Picking up one unit of any type of garbage takes 1 minute.",
      "You are also given a 0-indexed integer array travel where travel[i] is the number of minutes needed to go from house i to house i + 1.",
      "There are three garbage trucks in the city, each responsible for picking up one type of garbage. Each garbage truck starts at house 0 and must visit each house in order; however, they do not need to visit every house.",
      "Only one garbage truck may be used at any given moment. While one truck is driving or picking up garbage, the other two trucks cannot do anything.",
      "Return the minimum number of minutes needed to pick up all the garbage.",
    ],
    image: "",
    functionSignature: {
      javascript: `// Must return your output
function garbageCollection(garbage, travel) {
  // Write your code here
}

// Don't touch this...
const garbage = JSON.parse(process.argv[2]);
const travel = JSON.parse(process.argv[3]);
const result = garbageCollection(garbage, travel);
console.log(result);
    `,
      python: `import sys
import json

# Must return your output
def garbageCollection(garbage, travel):
  # Write your code here

# Don't touch this...
if __name__ == "__main__":
  garbage = json.loads(sys.argv[1])
  travel = json.loads(sys.argv[2])
  result = garbageCollection(garbage, travel)
  print(result)`,
    },
    examples: [
      {
        input: 'garbage = ["G","P","GP","GG"], travel = [2,4,3]',
        output: "21",
        explanation: `The paper garbage truck:
1. Travels from house 0 to house 1
2. Collects the paper garbage at house 1
3. Travels from house 1 to house 2
4. Collects the paper garbage at house 2
Altogether, it takes 8 minutes to pick up all the paper garbage.
The glass garbage truck:
1. Collects the glass garbage at house 0
2. Travels from house 0 to house 1
3. Travels from house 1 to house 2
4. Collects the glass garbage at house 2
5. Travels from house 2 to house 3
6. Collects the glass garbage at house 3
Altogether, it takes 13 minutes to pick up all the glass garbage.
Since there is no metal garbage, we do not need to consider the metal garbage truck.
Therefore, it takes a total of 8 + 13 = 21 minutes to collect all the garbage.`,
      },
      {
        input: 'garbage = ["MMM","PGM","GP"], travel = [3,10]',
        output: "37",
        explanation: `The metal garbage truck takes 7 minutes to pick up all the metal garbage.
The paper garbage truck takes 15 minutes to pick up all the paper garbage.
The glass garbage truck takes 15 minutes to pick up all the glass garbage.
It takes a total of 7 + 15 + 15 = 37 minutes to collect all the garbage.`,
      },
    ],
    constraints: [
      "2 <= garbage.length <= 10^5",
      "garbage[i] consists of only the letters 'M', 'P', and 'G'.",
      "1 <= garbage[i].length <= 10",
      "travel.length == garbage.length - 1",
      "1 <= travel[i] <= 100",
    ],
    testCases: [
      {
        input: [
          ["G", "P", "GP", "GG"],
          [2, 4, 3],
        ],
        expectedOutput: 21,
      },
      {
        input: [
          ["MMM", "PGM", "GP"],
          [3, 10],
        ],
        expectedOutput: 37,
      },
    ],
  },
  {
    problemId: "number-of-submatrices-that-sum-to-target",
    title: "Number of Submatrices That Sum to Target",
    difficulty: "Hard",
    category: ["Array", "Hash Table", "Matrix"],
    videoId: "43DRBP2DUHg",
    isNotParse: false,
    description: [
      "Given a matrix and a target, return the number of non-empty submatrices that sum to target.",
      "A submatrix x1, y1, x2, y2 is the set of all cells matrix[x][y] with x1 <= x <= x2 and y1 <= y <= y2.",
      "Two submatrices (x1, y1, x2, y2) and (x1', y1', x2', y2') are different if they have some coordinate that is different: for example, if x1 != x1'.",
    ],
    image: "",
    functionSignature: {
      javascript: `// Must return your output
function numSubmatrixSumTarget(matrix, target) {
  // Write your code here
}

// Don't touch this...
const matrix = JSON.parse(process.argv[2]);
const target = JSON.parse(process.argv[3]);
const result = numSubmatrixSumTarget(matrix, target);
console.log(result);
    `,
      python: `import sys
import json

# Must return your output
def numSubmatrixSumTarget(matrix, target):
  # Write your code here

# Don't touch this...
if __name__ == "__main__":
  matrix = json.loads(sys.argv[1])
  target = json.loads(sys.argv[2])
  result = numSubmatrixSumTarget(matrix, target)
  print(result)`,
    },
    examples: [
      {
        input: "matrix = [[0,1,0],[1,1,1],[0,1,0]], target = 0",
        output: "4",
        explanation: `The four 1x1 submatrices that only contain 0.`,
      },
      {
        input: "matrix = [[1,-1],[-1,1]], target = 0",
        output: "5",
        explanation: `The two 1x2 submatrices, plus the two 2x1 submatrices, plus the 2x2 submatrix.`,
      },
      {
        input: "matrix = [[904]], target = 0",
        output: "0",
      },
    ],
    constraints: [
      "1 <= matrix.length <= 100",
      "1 <= matrix[0].length <= 100",
      "-1000 <= matrix[i][j] <= 1000",
      "-10^8 <= target <= 10^8",
    ],
    testCases: [
      {
        input: [
          [
            [0, 1, 0],
            [1, 1, 1],
            [0, 1, 0],
          ],
          0,
        ],
        expectedOutput: 4,
      },
      {
        input: [
          [
            [1, -1],
            [-1, 1],
          ],
          0,
        ],
        expectedOutput: 5,
      },
      {
        input: [[[904]], 0],
        expectedOutput: 0,
      },
    ],
  },
  {
    problemId: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: ["Array", "Divide and Conquer"],
    videoId: "",
    isNotParse: false,
    description: [
      "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
    ],
    image: "",
    functionSignature: {
      javascript: `// Must return your output
function maxSubArray(nums) {
  // Write your code here
}

// Don't touch this...
const nums = JSON.parse(process.argv[2]);
const result = maxSubArray(nums);
console.log(result);
    `,
      python: `import sys
import json

# Must return your output
def maxSubArray(nums):
  # Write your code here

# Don't touch this...
if __name__ == "__main__":
  nums = json.loads(sys.argv[1])
  result = maxSubArray(nums)
  print(result)`,
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: `The subarray [4,-1,2,1] has the largest sum 6.`,
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: `The subarray [1] has the largest sum 1.`,
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: `The subarray [5,4,-1,7,8] has the largest sum 23.`,
      },
    ],
    constraints: ["1 <= nums.length <= 10^5", "-10^4 <= nums[i] <= 10^4"],
    testCases: [
      {
        input: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]],
        expectedOutput: 6,
      },
      {
        input: [[1]],
        expectedOutput: 1,
      },
      {
        input: [[5, 4, -1, 7, 8]],
        expectedOutput: 23,
      },
    ],
  },
  {
    problemId: "capacity-to-ship-packages-within-d-days",
    title: "Capacity To Ship Packages Within D Days",
    difficulty: "Medium",
    category: ["Array", "Binary Search"],
    videoId: "",
    isNotParse: false,
    description: [
      "A conveyor belt has packages that must be shipped from one port to another within days days.",
      "The ith package on the conveyor belt has a weight of weights[i]. Each day, we load the ship with packages on the conveyor belt (in the order given by weights). We may not load more weight than the maximum weight capacity of the ship.",
      "Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within days.",
    ],
    image: "",
    functionSignature: {
      javascript: `// Must return your output
function shipWithinDays(weights, days) {
  // Write your code here
}

// Don't touch this...
const weights = JSON.parse(process.argv[2]);
const days = JSON.parse(process.argv[3]);
const result = shipWithinDays(weights, days);
console.log(result);
    `,
      python: `import sys
import json

# Must return your output
def shipWithinDays(weights):
  # Write your code here

# Don't touch this...
if __name__ == "__main__":
  weights = json.loads(sys.argv[1])
  days = json.loads(sys.argv[2])
  result = shipWithinDays(weights, days)
  print(result)`,
    },
    examples: [
      {
        input: "weights = [1,2,3,4,5,6,7,8,9,10], days = 5",
        output: "15",
        explanation: `A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
1st day: 1, 2, 3, 4, 5
2nd day: 6, 7
3rd day: 8
4th day: 9
5th day: 10

Note that the cargo must be shipped in the order given, so using a ship of capacity 14 and splitting the packages into parts like (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) is not allowed.`,
      },
      {
        input: "weights = [3,2,2,4,1,4], days = 3",
        output: "6",
        explanation: `A ship capacity of 6 is the minimum to ship all the packages in 3 days like this:
1st day: 3, 2
2nd day: 2, 4
3rd day: 1, 4`,
      },
      {
        input: "weights = [1,2,3,1,1], days = 4",
        output: "3",
        explanation: `1st day: 1
2nd day: 2
3rd day: 3
4th day: 1, 1`,
      },
    ],
    constraints: [
      "1 <= days <= weights.length <= 5 * 10^4",
      "1 <= weights[i] <= 500",
    ],
    testCases: [
      {
        input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5],
        expectedOutput: 15,
      },
      {
        input: [[3, 2, 2, 4, 1, 4], 3],
        expectedOutput: 6,
      },
      {
        input: [[1, 2, 3, 1, 1], 4],
        expectedOutput: 3,
      },
    ],
  },
  {
    problemId: "count-negative-numbers-in-a-sorted-matrix",
    title: "Count Negative Numbers in a Sorted Matrix",
    difficulty: "Easy",
    category: ["Array", "Binary Search", "Matrix"],
    videoId: "",
    isNotParse: false,
    description: [
      "Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.",
    ],
    image: "",
    functionSignature: {
      javascript: `// Must return your output
function countNegatives(grid) {
  // Write your code here
}

// Don't touch this...
const grid = JSON.parse(process.argv[2]);
const result = countNegatives(grid);
console.log(result);
    `,
      python: `import sys
import json

# Must return your output
def countNegatives(grid):
  # Write your code here

# Don't touch this...
if __name__ == "__main__":
  grid = json.loads(sys.argv[1])
  result = countNegatives(grid)
  print(result)`,
    },
    examples: [
      {
        input: "grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]",
        output: "8",
        explanation: `There are 8 negatives number in the matrix.`,
      },
      {
        input: "grid = [[3,2],[1,0]]",
        output: "0",
      },
    ],
    constraints: [
      "m == grid.length",
      "n == grid[i].length",
      "1 <= m, n <= 100",
      "-100 <= grid[i][j] <= 100",
    ],
    testCases: [
      {
        input: [
          [
            [4, 3, 2, -1],
            [3, 2, 1, -1],
            [1, 1, -1, -2],
            [-1, -1, -2, -3],
          ],
        ],
        expectedOutput: 8,
      },
      {
        input: [
          [
            [3, 2],
            [1, 0],
          ],
        ],
        expectedOutput: 0,
      },
    ],
  },
];
