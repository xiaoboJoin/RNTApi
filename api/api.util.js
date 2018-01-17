export default {
  queryString(options){
    var arr = [];
    for (var i in options) {
      if (options.hasOwnProperty(i)) {
        var str = i+"="+options[i];
        arr.push(str);
      }
    }
    return arr.join('&');
  }
}
