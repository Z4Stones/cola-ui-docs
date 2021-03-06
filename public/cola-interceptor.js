(function() {
  var oldColaRootFn;

  oldColaRootFn = cola._rootFunc;

  cola._rootFunc = function() {
    var fn, name, targetDoms;
    if (arguments.length === 2 && typeof arguments[0] === "string" && typeof arguments[1] === "function") {
      name = arguments[0];
      fn = arguments[1];
      targetDoms = $(".example[name='" + name + "']");
      if (targetDoms.length) {
        targetDoms.each(function() {
          return oldColaRootFn(name, this, fn);
        });
        return;
      }
    }
    return oldColaRootFn.apply(this, arguments);
  };

}).call(this);
