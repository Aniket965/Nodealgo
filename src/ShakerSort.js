exports.Sort= {ShakerSort:function(array) {
var isSwaped ;
var i;
do {
  /*variable for finding if any swaping happens sets to 0 (which means its false) first */
    isSwaped=0;
    /*first loop*/
    for ( i = array.length-1; i>=0 ; i--) {
      /* checks if any small number is caught  */
    if (array[i+1]<array[i]) {
      /* swap the digits */
      
     var  temp=array[i+1];
      array[i+1]=array[i];
      array[i]=temp;
      //sets the isSwaped to 1(true)
      isSwaped=1;
    }
  }
  /*loop in opposite direction to first one*/
  for ( i = 0; i < array.length; i++) {
    /* checks if any small number is caught  */
    if (array[i+1]<array[i]) {
      /* swap the digits */
 
    var  temp1=array[i+1];
      array[i+1]=array[i];
      array[i]=temp1;
      //sets the isSwaped to true
      isSwaped=1;
    }
}

} while(isSwaped);
/*do-while loops ends if there is no swaping*/





}
}