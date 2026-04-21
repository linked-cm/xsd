const buildTools = require('lincd-cli');
module.exports = buildTools.generateGruntConfig('lincd-xsd', {
  target: 'es6',
  debug: false,
  entry: './src/index.tsx',
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'prop-types': 'PropTypes',
  },
});
