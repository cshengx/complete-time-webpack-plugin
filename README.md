# complete-time-webpack-plugin
a plugin for webpack to show the end of the webpack packing

# usage  
in the root directory of your project
``` bash
npm install complete-time-webpack-plugin --save-dev  
```

in the configuration file of your webpack (such as webpack.config.js)
``` javascript
var CompleteTimeWebpackPlugin = require('complete-time-webpack-plugin');  
module.exports = {  
    entry: "./src/index.js",
    output: {},
    resolve: {},
    module: {},
    externals: {},
    //just a example, so other configurations are empty
    plugins:[new CompleteTimeWebpackPlugin()]
};
```