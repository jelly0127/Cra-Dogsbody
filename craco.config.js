const { whenDev, whenProd } = require('@craco/craco')
const webpack = require('webpack')
const CracoLessPlugin = require('craco-less')
const WebpackBar = require('webpackbar')
const TerserPlugin = require('terser-webpack-plugin')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const smp = new SpeedMeasurePlugin()
const path = require('path')

const pathResolve = pathUrl => path.join(__dirname, pathUrl)

module.exports = {
  webpack: smp.wrap({
    // 别名配置
    alias: {
      '@': pathResolve('src'),
    },
    plugins: [],
    /**
     * 重写 webpack 任意配置
     *  - configure 能够重写 webpack 相关的所有配置，但是，仍然推荐你优先阅读 craco 提供的快捷配置，把解决不了的配置放到 configure 里解决；
     *  - 这里选择配置为函数，与直接定义 configure 对象方式互斥；
     */
    configure: (webpackConfig, { env, paths }) => {
      if (env !== 'development') {
        webpackConfig.plugins = webpackConfig.plugins.concat(
          new TerserPlugin({
            // sourceMap: true, // Must be set to true if using source-maps in production
            terserOptions: {
              ecma: undefined,
              parse: {},
              compress: {
                warnings: false,
                drop_console: true, // 生产环境下移除控制台所有的内容
                drop_debugger: true, // 移除断点
                pure_funcs: ['console.log'], // 生产环境下移除console
              },
            },
          }),
          // html 文件方式输出编译分析
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: path.resolve(__dirname, `analyzer/index.html`),
          }),
          // 打压缩包
          new CompressionWebpackPlugin({
            algorithm: 'gzip',
            test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
            threshold: 1024,
            minRatio: 0.8,
          }),
          new WebpackBar(),
          // 查看打包的进度
          new SimpleProgressWebpackPlugin()
        )
      }
      if (env === 'development') {
        webpackConfig.plugins = webpackConfig.plugins.concat(
          // 模块循环依赖检测插件
          new CircularDependencyPlugin({
            // 排除node_modules
            exclude: /node_modules/,
            // 包含src
            include: /src/,
            failOnError: true,
            allowAsyncCycles: false,
            cwd: process.cwd(),
          }),
          // 热更新
          new webpack.HotModuleReplacementPlugin()
        )
      }
      // 配置扩展扩展名,缩小loader范围
      webpackConfig.resolve.extensions = ['.tsx', '.ts', '.jsx', '.js', '.scss', '.css']

      // paths.appPath='public'
      paths.appBuild = 'dist' // 配合输出打包修改文件目录
      // webpackConfig中可以解构出你想要的参数比如mode、devtool、entry等等，更多信息请查看webpackConfig.json文件
      /**
       * 修改 output
       */
      webpackConfig.output = {
        ...webpackConfig.output,
        ...{
          filename: env !== 'development' ? 'static/js/[name].[contenthash:10].js' : 'static/js/[name].js',
          chunkFilename:
            env !== 'development' ? 'static/js/[name].[contenthash:10].chunk.js' : 'static/js/[name].chunk.js',
        },
        assetModuleFilename: 'static/js/[hash:10][ext][query]',
        path: path.resolve(__dirname, 'dist'), // 修改输出文件目录
        publicPath: '/',
        clean: true,
      }
      /**
       * webpack split chunks   splitChunks打包优化
       */
      webpackConfig.optimization.splitChunks = {
        ...webpackConfig.optimization.splitChunks,
        cacheGroups: {
          commons: {
            chunks: 'all',
            // 将两个以上的chunk所共享的模块打包至commons组。
            minChunks: 2,
            name: 'commons',
            priority: 80,
          },
        },
      }
      // 开启持久化缓存
      webpackConfig.cache.type = 'filesystem'
      // 返回重写后的新配置
      return webpackConfig
    },
  }),
  babel: {
    plugins: [
      // AntDesign 按需加载
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: true,
        },
        'antd',
      ],
      // 装饰器
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true,
        },
      ],
    ],
  },
  /**
   * 新增 craco 提供的 plugin
   */
  plugins: [
    // 配置less
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  resolve: {
    fallback: {
      // crypto: require.resolve('crypto-browserify'),
      // stream: require.resolve('stream-browserify'),
      // assert: require.resolve('assert'),
      // http: require.resolve('stream-http'),
      // https: require.resolve('https-browserify'),
      // os: require.resolve('os-browserify'),
      // url: require.resolve('url'),
      buffer: require.resolve('buffer/'),
    },
  },
  // 开发服务器
  devServer: {
    host: 'localhost', // 启动服务器域名
    port: '3000', // 启动服务器端口号
    open: true, // 是否自动打开浏览器
  },
}
