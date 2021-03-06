// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * No matter how control leaves the embedded 'Statement',
 * the scope chain is always restored to its former state
 *
 * @path ch12/12.10/S12.10_A3.11_T2.js
 * @description Calling a function within "with" statement declared without the statement, leading to normal completion by "return"
 * @noStrict
 */

this.p1 = 1;
var result = "result";
var value = "value";
var myObj = {p1: 'a', 
             value: 'myObj_value',
             valueOf : function(){return 'obj_valueOf';}
}

var f = function(){
  p1 = 'x1';
  return value;
}

with(myObj){
  result = f();
}

if(!(p1 === "x1")){
  $ERROR('#1: p1 === "x1". Actual:  p1 ==='+ p1  );
}

if(!(myObj.p1 === "a")){
  $ERROR('#2: myObj.p1 === "a". Actual:  myObj.p1 ==='+ myObj.p1  );
}

if(!(result === "value")){
  $ERROR('#3: result === "value". Actual:  result ==='+ result  );
}

