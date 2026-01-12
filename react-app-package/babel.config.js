module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic' }], // This is important, as it helps RTL to transpile JSX in test file in HTML to excute test properly
  ],
};
