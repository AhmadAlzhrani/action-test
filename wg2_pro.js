var exec = require('child_process').exec;

exec('proselint *.txt',
    function (error, stdout, stderr) {
        console.log( stdout);
        if (error !== null) {
             console.log('exec: write-good');
        }
    });
