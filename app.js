//function reverse(arr) {
//    for (var i = arr.length - 1; i >= 0; i--) {
//        console.log(arr[i]);
//    }
//}
//
//reverse([12, 34, 23, 4, 6, 4, 11, 4, 5, 22, 5, 77, 8, 99, 0]);


function isUniform(arr) {
    var first = arr[0];
    for (var i = 1; i <= arr.length; i++) {
        if (first !== arr[i]) {
            return false;
        }
    }
    return true;


}
isUniform([2, 2, 2, 2, 2, 3]);
