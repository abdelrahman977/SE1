module.exports = {
  FRONTEND_URI: process.env.FRONTEND_URI || 'http://localhost:4300/',
  secret: '32876qihsdh76@&#!742(*#HG&#28702y&##@^!()(&^#))jhscbd',
  MONGO_URI: process.env.NODE_ENV === 'production' ? '' : 'mongodb://localhost:27017/nodejs-seed-project-es5'
};
