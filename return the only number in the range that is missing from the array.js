const findMissingNumber = (nums) => {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
  
    return expectedSum - actualSum;
  };
  
  const nums = [0, 1, 3, 4, 5];
  const missingNumber = findMissingNumber(nums);
  console.log(missingNumber);
  







  
  
  
