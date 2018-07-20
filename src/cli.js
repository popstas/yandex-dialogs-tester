#!/usr/bin/env node
'use strict';
const YandexDialogsTester = require('./tester');
const commandLineArgs = require('command-line-args');

const optionDefinitions = [
  { name: 'scenarios-url', alias: 'u', type: String },
  { name: 'scenarios-file', alias: 'f', type: String },
  { name: 'webhook-url', alias: 'w', type: String },
  { name: 'help', type: Boolean }
];

const options = commandLineArgs(optionDefinitions);

const usage = () => {
  console.log(
    'Usage: yandex-dialogs-tester --webhook-url http://localhost:3000 --scenarios-file /path/to/scenarios.yml'
  );
  process.exit(1);
};

// --help
if (options.help || !options['webhook-url'] || !options['scenarios-file']) usage();

const tester = new YandexDialogsTester(options);
tester.run();
