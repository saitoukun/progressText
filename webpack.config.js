// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path');

/* for local-dev
module.exports = {
  // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
  mode: 'development',
  // エントリーポイントの設定
  entry: './local-dev/js/app.js',
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: 'bundle.js',
    // 出力先のパス（絶対パスを指定する必要がある）
    path: path.join(__dirname, 'local-dev/js')
  }
};
*/


// for dist

module.exports = {
  // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
  mode: 'development',
  // エントリーポイントの設定
  entry: './src/js/app.js',
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: 'progressText.js',
    // 出力先のパス（絶対パスを指定する必要がある）
    path: path.join(__dirname, 'dist'),


  }
};


//for dev-server
/*
module.exports = {
  // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
  mode: 'development',
  // ローカル開発用環境を立ち上げる
  // 実行時にブラウザが自動的に localhost を開く
  devServer: {
    contentBase: 'localhost-dev',
    open: true
  },
  // エントリーポイントの設定
  entry: './src/js/modules/ProgressText.js',
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: 'progressText.js',
    // 出力先のパス（絶対パスを指定する必要がある）
    path: path.join(__dirname, 'dist')
  }
};
*/