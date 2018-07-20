'use strict';
const { Scenarios } = require('./scenarios');

class YandexDialogsTester {
  constructor(options) {
    // this.scenariosUrl = options.scenariosUrl;
    this.scenariosFile = options['scenarios-file'];
    this.webhookUrl = options['webhook-url'];
  }

  async run() {
    const scenarios = new Scenarios(this.scenariosFile, this.webhookUrl);
    try {
      const isErrors = await scenarios.run();
      const ok = scenarios.scenarios.length - scenarios.failed.length;
      const failed = scenarios.failed.length;
      console.log(`ok: ${ok}, failed: ${failed}`);
      if (isErrors) {
        console.log(
          'Failed scenarios: ',
          scenarios.failed.map(scenario => scenario.name).join(', ')
        );
        process.exit(1);
      } else {
        process.exit(0);
      }
    } catch (err) {
      console.log(err);
      process.exit(1);
    }
  }
}
module.exports = YandexDialogsTester;
