function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction(){
  return nF = function name() {}
}

function returnsAnAnonymousFunction() {
  return function() {}
}
