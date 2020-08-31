const _ = {

//_clamp()

  clamp(number, lower, upper)
  {
  var lowerClampedValue = Math.max(number, lower);
  var clampedValue = Math.min(lowerClampedValue, upper);
  return clampedValue;
},


//_inRange

  inRange(number, start, end)
{
  if(end === undefined)
  {
    end = start;
    start = 0;
  }
  if(start > end)
  {
     
   var temp = end;
    end = start;
    start = temp;
  }
  var isInRange =  start <= number && number < end;
  return isInRange;
},


//_words()

    words(string){
       var words = string.split(' ');
       return words;
    },


//_pad()

    pad(string, length){
    if(length <= string.length)
    {
     return string;
     };
    var startPaddingLength = Math.floor((length - string.length) / 2);
    var endPaddingLength = (length - string.length) - startPaddingLength;
    var paddedString = ' '.repeat(startPaddingLength).concat(string).concat(' '.repeat(endPaddingLength));
    return paddedString;
   
  },


//_has()

    has(object, key){
      const hasValue = object[key];
      if(hasValue != undefined)
      {
        return true;
      }
      return false;
    },

//_invert()

    invert(object){
      let invertedObject = {};
      for(let key in object){
        const originalValue = object[key];
        invertedObject = {originalValue: key}     
      }
      return invertedObject;     
    },


//_findKey()

    findKey(object, predicate){
      for(let key in object){
        let value = object[key];
        let predicateReturnValue =predicate(value);
        if(predicateReturnValue)
        {
          return key;
        };
    };
    undefined
    return undefined;
},


//_drop()
    drop(array,n){
      if(n === undefined){
          n = 1;
      }
      let droppedArray = array.slice(n, array.length);
      return droppedArray;

    },


//_dropWhile
      dropWhile(array, predicate){
        const cb= (element, index) => {
          return !predicate(element, index, array);
        };
          let dropNumber = array.findIndex(cb);
          let droppedArray = this.drop(array, dropNumber);
          return droppedArray;
      },


//_chunk()

      chunk(array, size){
        if(size === undefined){
          size = 1;
        }
       let arrayChunks = [];
       for(let i = 0 ;  i < array.length; i += size){
         let arrayChunk = array.slice(i, i+size);
         arrayChunks.push(arrayChunk);
       }
       return arrayChunks
      },

};



module.exports = _;
