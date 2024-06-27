export const colorCode = (c: string) => {

  var indexedArray: {[key: string]: number} = {
    black : 0,
    brown : 1,
    red : 2,
    orange : 3,
    yellow : 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  }

  if(COLORS.includes(c)){
    return indexedArray[c]
  }else{
    return COLORS
  }

  // throw new Error('Delete this line and implement this function')
}

export const COLORS = [
      'black',
      'brown',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'grey',
      'white',]
