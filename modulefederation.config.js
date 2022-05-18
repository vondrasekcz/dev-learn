const deps = require('./package.json').dependencies;


module.exports = {
  name: "container",
  remotes: {
    app1: 'app1@http://localhost:3001/remoteEntry.js',
  },
  shared: {
    react: { singleton: true, eager: true, requiredVersion: deps.react },
    'react-dom': { singleton: true, eager: true, requiredVersion: deps['react-dom'], },
  },
};
