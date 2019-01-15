/* This code goes through all elements of two arrays (array1, array2) and puts all values into a third array (arrayUnion).
Duplicates are excluded.
*/

var array1 = [1, 2, 4, 8, 16, 32, 64, 128, 256];
var array2 = [1, 3, 6, 9, 34, 45, 56];
var arrayUnion = [];
var k = array1.length;

for(i = 0; i < array1.length; i++){
	arrayUnion[i] = array1[i];
}

for(j = 0; j < array2.length; j++){
	var i = 0;
 	while(i < array1.length && array1[i] != array2[j])
  i++;
  if(i>=array1.length){
  	arrayUnion[k++] = array2[j];
  }
}

alert(arrayUnion);
