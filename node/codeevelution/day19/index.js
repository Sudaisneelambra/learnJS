const path=require("node:path")

        // console.log(path);


// 1st
        // console.log(__filename);
        // console.log(__dirname);

// 2 nd

        // console.log(path.basename(__filename));
        // console.log(path.basename(__dirname));

// 3rd

        // console.log(path.extname(__filename));
        // console.log(path.extname(__dirname));

//4 th

        // console.log(path.parse(__filename));
        // console.log(path.parse(__dirname));

// 5th

        // console.log(path.format(path.parse(__filename)));
        // console.log(path.format(path.parse(__dirname)));

// 6th

        // console.log(path.isAbsolute(__filename));
        // console.log(path.isAbsolute(__dirname));
        // console.log(path.isAbsolute("./raman.json"));

// 7th

        // console.log(path.join("folder1","maain","index.js"));
        // console.log(path.join("/folder1","maain","index.js"));
        // console.log(path.join("/folder1","maain","../index.js"));  //jumbed
        // console.log(path.join(__dirname,"index.json"))

// 8th

        console.log(path.resolve("folder1","maain","index.js"));
        console.log(path.resolve("/folder1","maain","index.js"));
        console.log(path.resolve("/folder1","maain","../index.js"));  //jumbed
        console.log(path.resolve(__dirname,"index.json"))
