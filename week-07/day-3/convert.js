// float2string(num) it should convert a float number to a string, for example 12.24 -> '12.24'
// string2float(str) it should convert a string to a float number, for example '12.24' -> 12.24
// int2roman(number) it should convert an int number to a roman number as a string, for example 12 -> 'XII'
// roman2int(number) it should convert a roman number as a string to an int, for example 'XII' -> 12 please try to avoid using the built in conversion methods

function Converter(){
  this.float2string = function(num) {
    return num+'';
  }
  this.string2float = function(str) {
    newStr = parseFloat(str);
    return newStr;
  }
  this.int2roman = function(number) {

  }
  this.roman2int = function(string) {
    
  }
}

var converter = new Converter();
console.log(converter.float2string(12.24));
console.log(typeof (converter.float2string(12.24)));
console.log(converter.string2float('12.24'));
console.log(typeof (converter.string2float('12.24')));
