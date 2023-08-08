/*
=======
/watch_queue handler
=======

yt2009, 2022
*/

const utils = require("./yt2009utils")
const fs = require("fs")
const page = fs.readFileSync("../quicklist.htm").toString()

module.exports = {
    "apply": function(req, res) {
        if(!utils.isAuthorized(req)) {
            res.send("")
            return;
        }
        
        let code = page;

        // shows tab
        if(req.headers.cookie.includes("shows_tab")) {
            code = code.replace(`<a href="/channels">Channels</a>`, `<a href="/channels">Channels</a><a href="#">Shows</a>`)
        }

        code = require("./yt2009loginsimulate")(req, code);

        res.send(code);
    }
}