const fs = require('fs');

function isNumber(char) {
    return /^-?[\d.]+(?:e-?\d+)?$/.test(char) && Number.isInteger(char);
}


async function fileExists(path) {
    try {
        await fs.promises.access(path);
        return true;
    } catch {
        return false;
    }
}

async function defineRaedStream(arguments) {
    if (arguments.input) {
        const fileExist = await fileExists(arguments.input);
        if (fileExist) {
            return fs.createReadStream(arguments.input, 'utf8');
        } else {
            const invalidArgumentStatusCode = 9;
            process.stderr.write('make sure that your input file exist and you have access');
            process.exit(invalidArgumentStatusCode);
        }
    } else {
        return process.stdin;
    }
}

async function defineWriteStream(arguments) {
    if (arguments.output) {
        const fileExist = await fileExists(arguments.output);
        if (fileExist) {
            return fs.createWriteStream(arguments.output, { flags: 'a' });
        } else {
            const invalidArgumentStatusCode = 9;
            process.stderr.write(`make sure that your output file exist and you have access`);
            process.exit(invalidArgumentStatusCode);
        }
    } else {
        return process.stdout;
    }
}

module.exports = {
    isNumber,
    defineRaedStream,
    defineWriteStream,
}