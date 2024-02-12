const path = require('path')

module.exports = {
    entry: './source/index.js',
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'bundle.js'
    }, 
    /*module: { 
        test: /\.js$/,
        exclude: /node_modules/,
        rules: [{
            use: {
                loaders: 'babel-loader', 
                options: {
                    presets: ['env']
                }
            }
        }]
    }*/
}