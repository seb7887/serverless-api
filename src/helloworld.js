module.exports.handler = (event, ctx, done) => {
  done(null, `${event.message}, from LAMBDA!`);
};
