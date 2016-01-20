function outerFunc(outerparam){
    var innerFunc = function (inputparam){
    return outerparam*inputparam;
  }
  return innerFunc;
}
var closureFunc = outerFunc(5);
alert(closureFunc(4));
