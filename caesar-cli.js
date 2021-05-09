const minimist = require('minimist');
const stream = require('stream');
const {defineRaedStream, defineWriteStream} = require('./helpers');
const {caesarStream} = require('./transformStream');
const {validateCommandLineArguments} = require('./validation');

const arguments = minimist(process.argv.slice(2), {
    alias: {
        shift: 's',
        action: 'a',
        input: 'i',
        output: 'o'
    }
});

async function runApplication(arguments) {
    validateCommandLineArguments(arguments);
    const readFrom = await defineRaedStream(arguments);
    const writeTo = await defineWriteStream(arguments);

    await stream.pipeline(
        readFrom,
        caesarStream(arguments.shift, arguments.action),
        writeTo,
        (err) => { }
    )
}

runApplication(arguments);