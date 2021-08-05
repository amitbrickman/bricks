const moment = require('moment');
const execSync = require('child_process').execSync;

const dateTime = moment().format('MM/DD/YYYY HH:mm:ss');

execSync(`webpack && git add . && git commit -m \"Release at ${dateTime}\" && git push && npm publish`, { stdio: [0, 1, 2]} );