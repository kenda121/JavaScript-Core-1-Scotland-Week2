//let myNumber = 10;

//let message = "The number is ten";

// Write your own "if" statement below so if myNumber is NOT ten,
// then change the value of message to "The number is not ten"
/*if (myNumber === 10) {
  message = "The number is ten";
} else {
  message = "not ten";
}

console.log(message);*/

function solution(A) {
  var ans = 1;
  for (i = 1; i < A.length; i++) {
    if (ans > A[i]) {
      ans = A[i];
    }
  }
  return ans;
}
