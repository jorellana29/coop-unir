module.exports = {
  apps: [
    {
      name: 'coop-unir',
      exec_mode: 'fork',
      instances: '1',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
    }
  ]
};
