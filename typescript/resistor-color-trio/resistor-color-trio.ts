export function decodedResistorValue(n: string[]) {

  return `${firstTwo(n)}ohms`

}

export function firstTwo(n: string[]) {

  var word = "";

  if(COLORS.indexOf(n[0]) != 0){
    word = word.concat("" + COLORS.indexOf(n[0]))
    // return COLORS.indexOf(n[0]) + "" + COLORS.indexOf(n[1]) + pre[COLORS.indexOf(n[2])]
  }

  if(COLORS.indexOf(n[1]) != 0){
    word = word.concat("" + COLORS.indexOf(n[1]) + pre[COLORS.indexOf(n[2])])
    // return COLORS.indexOf(n[0]) + "" + COLORS.indexOf(n[1]) + pre[COLORS.indexOf(n[2]+1)]
  }else{
    word = word.concat(pre[COLORS.indexOf(n[2])+1])
    // return COLORS.indexOf(n[1]) + pre[COLORS.indexOf(n[2])]
  }

  return word
}

var pre: {[key: number]: string} = {
  0 : " ",
  1 : "0 ",
  2 : "00 ",
  3 : " kilo",
  4 : "0 kilo",
  5 : "00 kilo",
  6 : " mega",
  7 : "0 mega",
  8 : "00 mega",
  9 : " giga",
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
