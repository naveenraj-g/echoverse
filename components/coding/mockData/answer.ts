export const allAnswer = {
  "Two Sum": `
    const numObj = {};
    for (let i = 0; i < nums.length; i++) {
        const targetValue = target - nums[i];
        if (numObj.hasOwnProperty(targetValue)) {
            return [numObj[targetValue], i]
        }
        numObj[nums[i]] = i;
    }
    `,
  "Queue Reconstrunction by Height": `
    people.sort((a, b) => {
        return b[0] - a[0] || a[1] - b[1];
    });
    let arrangedQueue: number[][] = [];
    for (let person of people) {
        arrangedQueue.splice(person[1], 0, person);
    }
        return arrangedQueue;
    `,
  "Transform Array by Parity": `
    const even = nums.filter(x => x % 2 === 0).length;
    for (let i = 0; i < even; ++i) {
        nums[i] = 0;
    }
    for (let i = even; i < nums.length; ++i) {
        nums[i] = 1;
    }
    return nums;
    `,
  "Count Substrings That Satisfy K-Constraint I": `
    const cnt = [0, 0];
    let ans = 0;
    let l = 0;

    for (let r = 0; r < s.length; r++) {
        cnt[parseInt(s[r], 10)]++;
        
        while (cnt[0] > k && cnt[1] > k) {
            cnt[parseInt(s[l], 10)]--;
            l++;
        }
        
        ans += r - l + 1;
    }

    return ans;
    `,
  "Count Number of Nice Subarrays": `
    const n = nums.length;
    const cnt = Array(n + 1).fill(0);
    cnt[0] = 1;
    let [t, ans] = [0, 0];
    for (const v of nums) {
        t += v & 1;
        ans += cnt[t - k] ?? 0;
        cnt[t] += 1;
    }
    return ans;
    `,
  "Strictly Palindromic Number": `return false;`,
  "Count Pairs Whose Sum is Less than Target": `nums.sort((a, b) => a - b);
    let ans = 0;
    const search = (x, r) => {
        let l = 0;
        while (l < r) {
            const mid = (l + r) >> 1;
            if (nums[mid] >= x) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }
        return l;
    };
    for (let j = 0; j < nums.length; ++j) {
        const i = search(target - nums[j], j);
        ans += i;
    }
    return ans;`,
  "Maximum Score of a Good Subarray": `
    const n = nums.length;
    const left = Array(n).fill(-1);
    const right = Array(n).fill(n);
    const stk = [];
    for (let i = 0; i < n; ++i) {
        while (stk.length && nums[stk.at(-1)] >= nums[i]) {
            stk.pop();
        }
        if (stk.length) {
            left[i] = stk.at(-1);
        }
        stk.push(i);
    }
    stk.length = 0;
    for (let i = n - 1; ~i; --i) {
        while (stk.length && nums[stk.at(-1)] > nums[i]) {
            stk.pop();
        }
        if (stk.length) {
            right[i] = stk.at(-1);
        }
        stk.push(i);
    }
    let ans = 0;
    for (let i = 0; i < n; ++i) {
        if (left[i] + 1 <= k && k <= right[i] - 1) {
            ans = Math.max(ans, nums[i] * (right[i] - left[i] - 1));
        }
    }
    return ans;
    `,
  "Left and Right Sum Differences": `
    let left = 0, right = nums.reduce((a, b) => a + b);
    const ans = [];
    for (const x of nums) {
        right -= x;
        ans.push(Math.abs(left - right));
        left += x;
    }
    return ans;
    `,
  "Minimum Amount of Time to Collect Garbage": `
    const last = new Map();
  let ans = 0;
  for (let i = 0; i < garbage.length; ++i) {
      const s = garbage[i];
      ans += s.length;
      for (const c of s) {
          last.set(c, i);
      }
  }
  let ts = 0;
  for (let i = 1; i <= travel.length; ++i) {
      ts += travel[i - 1];
      for (const j of last.values()) {
          if (i === j) {
              ans += ts;
          }
      }
  }
  return ans;
    `,
  "Number of Submatrices That Sum to Target": `
    function numSubmatrixSumTarget(matrix, target) {
  // Write your code here
  const m = matrix.length;
    const n = matrix[0].length;
    let ans = 0;
    for (let i = 0; i < m; ++i) {
        const col = new Array(n).fill(0);
        for (let j = i; j < m; ++j) {
            for (let k = 0; k < n; ++k) {
                col[k] += matrix[j][k];
            }
            ans += f(col, target);
        }
    }
    return ans;
}

function f(nums, target) {
    const d = new Map();
    d.set(0, 1);
    let cnt = 0;
    let s = 0;
    for (const x of nums) {
        s += x;
        if (d.has(s - target)) {
            cnt += d.get(s - target);
        }
        d.set(s, (d.get(s) || 0) + 1);
    }
    return cnt;
}
    `,
  "Maximum Subarray": `
    let [ans, f] = [nums[0], nums[0]];
    for (let i = 1; i < nums.length; ++i) {
        f = Math.max(f, 0) + nums[i];
        ans = Math.max(ans, f);
    }
    return ans;
    `,
};
