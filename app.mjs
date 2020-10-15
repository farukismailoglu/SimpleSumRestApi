import {initRestService} from "./initRestService.mjs"

process.on("uncaughtException", err => console.log(err.message))

var port = 5000

if(process.argv[2] != null)
    port = process.argv[2]

initRestService(port)