const {isNumber} = require('./helpers')
function validateCommandLineArguments(arguments) {
    if (!arguments.shift || !isNumber(arguments.shift) || !arguments.action || !(arguments.action === 'encode' || arguments.action === 'decode')) {
        const invalidArgumentStatusCode = 9;

        process.stderr.write('some of parameters entered incorrectly, make sure that you correctly entered "shift" or "action"');
        process.exit(invalidArgumentStatusCode);
    }
}

 module.exports= {validateCommandLineArguments};