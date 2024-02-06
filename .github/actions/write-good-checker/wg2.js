var exec = require('child_process').exec;

exec('npx write-good *.md',
    function (error, stdout, stderr) {
        console.log( stdout);
        if (error !== null) {
             console.log('exec: write-good');
        }
    });
