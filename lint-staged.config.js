module.exports = {
  '{packages}/**/*.{js,jsx,ts,tsx,json,html,css,scss}': [
    'nx affected --target lint --uncommitted --fix true',
    'nx affected --target test --uncommitted',
    'nx format:write --uncommitted',
  ],
};
