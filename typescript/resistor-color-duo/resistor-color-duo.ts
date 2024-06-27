export function decodedValue(n: string[]) {

  var w = COLORS.indexOf(n[0]) + "" + COLORS.indexOf(n[1])

  return +w

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
