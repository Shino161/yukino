const webpack = require('webpack')
const config = require('./build/webpack.prod')
// const compiler = webpack(config)
// compiler.run((err, stats) => {
//   console.log(stats);

// })
console.log('——————————————————————————正在编译————————————————————————');
webpack(config, (err, stats) => {
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    console.error(info.errors);
  }

  if (stats.hasWarnings()) {
    // console.warn(info.warnings);
  }
  console.log(stats.toString({
    colors: true
  }));
  
  console.log('——————————————————————————编译完成————————————————————————');
  
  
});