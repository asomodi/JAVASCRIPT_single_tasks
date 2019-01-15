/* This code checks all elements of two arrays (array1, array2) and inserts the common values to a third one (intersection)
the variable 'j' is for indexing in 'array2'
the variable 'k' is for indexing in 'intersection' 
*/

var array1 = [1, 5, 10, 15, 27, 89, 22, 19, 6, 103];
var array2 = [3, 6, 11, 15, 28, 56, 103, 45, 67, 33, 20];
var intersection = [];
var j;
var k = 0;

for(i = 0; i < array1.length; i++ ) {
	j = 0;
  while(j < array2.length && array1[i] != array2[j]){
  j++;
  }
  if(j < array2.length){
  	intersection[k++] = array1[i];
  	}
}

alert(intersection);
