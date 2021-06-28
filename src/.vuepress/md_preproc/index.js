const ms_w_dn = require('./mod_specific/webpack/displayname');

const templates = [
  ['mod_specific.webpack.displayname', ms_w_dn]
];

module.exports = (source) => {
  for (const t of templates) {
    source = source.replace(new RegExp(`^/${t[0]} (.*)$`, 'gm'), t[1]);
  }

  return source;
};