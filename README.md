##How to install
1. Download application from repository.
2. On downloaded folder run "npm install" in cmd and wait for the dependency installation process to complete.

##How to use
After installation complited to start the application, in the folder with the application, enter the following into the cmd line: "node caesar-cli [options]", where options are cmd parameters:
* -s, --shift: a shift - must be an integer.
* -i, --input: an input file - path to input file.
* -o, --output: an output file - path to output file.
* -a, --action: an action encode/decode - option can take the the values of **encode** and **decode**.

**shift** and **action** options are **mandatory**
**input** and **output** options must be relative path. If the file on any of paths **doesn't exist** or the path is **incorrect**,  there wikk be an **error**
If the **input** and/or **output** options are absend, then **reading** and/or **writing** will be carried out from/to the **command line**. To **interrupt** the process, in this case, press **CTRL+C**.

##Example of usage:
```bash
$node caesar-cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```