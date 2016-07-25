function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction(){
  var nF
  nF = function name() {}
  return nF
}

function returnsAnAnonymousFunction() {
  return function() {}
}
