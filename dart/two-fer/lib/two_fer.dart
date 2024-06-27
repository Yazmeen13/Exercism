String twoFer([String? n]) {
  
  var names = ['Alice', 'Bob', 'Bohdan', 'Zaphod'];

  if(n != null){
    if(names.indexOf(n) >= 0){
      return "One for ${n}, one for me.";
    }
  }

  return "One for you, one for me.";


}
