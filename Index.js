var MergeSort = require('./src/MergeSort');
var InsertionSort = require('./src/InsertionSort');
var HeapSort = require('./src/HeapSort');
var ShakerSort= require('./src/ShakerSort');
exports.sort = {
         InsertionSort : function(a){
             InsertionSort.Sort.InsertionSort(a);
  },
        MergeSort : function (array,left,right){
            right-=1;
            MergeSort.Sort.MergeSort(array,left,right);
        },
        HeapSort:function(array){
            HeapSort.Sort.HeapSort(array,array.length);

        },
        ShakerSort:function(array){
            ShakerSort.Sort.shakerSort(array);
        }
      
    }