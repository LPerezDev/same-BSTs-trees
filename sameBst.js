// An array of integers is said to represent the Binary Search Tree(BST) 
// obtained by inserting each integer in the array, from left to right, 
// into the BST.

// Write a function that takes in two arrays of integers and determines 
// whether these arrays represent the same BST. Not that you're *not* allowed
// to construct any BSTs in your code. 

// A BST is a Binary Tree that consists only of *BST* nodes. A node is said to 
// be a valid *BST* node if and only if it satisfies the BST property: its value
// is strictly greater than the values of every node to its left; its value 
// is less than or equal to the values of every node to its right; its children 
// nodes are either valid BST nodes themselves or *None*/*null*.

// Sample input: 
// arrayOne = [10, 15, 8, 12, 94, 81, 5, 2, 11]
// arrayTwo = [10, 8, 5, 15, 2, 12, 11, 94, 81]

// Sample output: true (Both arrays represent the BST below)

//                         10
//                      /      \
//                    8        15
//                   /      /     \
//                  5      12     94
//                 /      /      /
//                2      11     81


//naive approach: The question is asking us to check whether these two arrays
//contain the values of the same BST. We can likely run a loop that will 
//compare the values of each index of the two input arrays. If the value at the
//first index of the arrays (in this case its arrayOne[0] and arrayTwo[0]) is 
//the same, then we can proceed with the loop. Otherwise just return false, since 
//these input arrays would have different root nodes. When the values at the first
//index of these arrays is the same, we can then run two different loops that will
//add values greater than the root node value to an array called rightOne & rightTwo.
//We will do the same with the values less than the root node and insert them into
//two arrays called leftOne & leftTwo. I think this entire approach can be 
//recursed so that each time we loop, we check whether the values at the first 
//index of each smaller array is the same, if it isn't we will return false. If
//the values ARE the same, then we repeat the same process described above. 
//This recursion method will allow us to go through the entire arrays and checking
//one by one index whether they represent the same binary tree. 


//time complexity: Given the nature of the question, it seems like at this current 
//time the best we can do is O(n^2) quadratic runtime, given that n is the size of 
//the input arrays.

//space complexity: Given the recursive method combined by our use of new arrays
//at every recursion, the space complexity is also O(n^2) quadratic runtime, given
//that n is the size of the input arrays.

//O(n^2) tim | O(n^2) space complexity


function sameBsts(arrayOne, arrayTwo) {
  // Write your code here.
if(arrayOne[0] !== arrayTwo[0]) return false;
if(arrayOne.length === 0 && arrayTwo.length === 0) return true;
if(arrayOne.length !== arrayTwo.length) return false;


  const leftOne = getSmaller(arrayOne);
  const leftTwo = getSmaller(arrayTwo);
  const rightOne = getBiggerOrEqual(arrayOne);
  const rightTwo = getBiggerOrEqual(arrayTwo);
  
  return sameBsts(leftOne, leftTwo) && sameBsts(rightOne, rightTwo);
}

function getSmaller(array) {
  const smaller = [];
  for(let i = 1; i < array.length; i++) {
    if(array[i] < array[0]) smaller.push(array[i]);
  }
  return smaller;
}

function getBiggerOrEqual(array) {
  const biggerOrEqual = [];
  for(let i = 1; i < array.length; i++) {
    if(array[i] >= array[0]) biggerOrEqual.push(array[i]);
  }
  return biggerOrEqual;
}