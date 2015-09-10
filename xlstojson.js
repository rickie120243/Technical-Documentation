var xls_json = require("xls-to-json")

xls_json({
  input: __dirname + '/GCD_9_721-730.xls',
  output: __dirname + '/GCD_9_721-730.json'
}, function(err, result) {
  
  if(err) {
    console.error(err);
  } else {
    console.log(result);
  }
  
});
