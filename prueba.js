var dict = {"one" : [15, 4.5],
            "two" : [34, 3.3],
            "three" : [67, 5.0],
            "four" : [32, 4.1]};var dict = {"one" : [15, 4.5],
            "two" : [34, 3.3],
            "three" : [67, 5.0],
            "four" : [32, 4.1]};

            var dictstring = JSON.stringify(dict);

            var fs = require('fs');
fs.writeFile("./exports/thing.json", dictstring, function(err, result) {
    if(err) console.log('error', err);
});

