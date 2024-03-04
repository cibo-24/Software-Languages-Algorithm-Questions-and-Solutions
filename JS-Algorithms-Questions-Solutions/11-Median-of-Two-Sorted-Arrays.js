/*

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 


*/

var findMedianSortedArrays = function(nums1, nums2) {
    const nums = nums1.concat(nums2)
    nums.sort( function(a,b) { return a - b; } )
    if (((nums.length + 1) % 2 ) === 0){
         let median = (nums.length + 1)/2
         
         return nums[median - 1]
 
     
     } else {
       let first = (nums.length/2) 
      
       let second = first + 1
       
       let med1 = nums[first - 1]
       let med2 = nums[second - 1]
       const median = (med1 + med2)/2 
       return median 
    }    
};