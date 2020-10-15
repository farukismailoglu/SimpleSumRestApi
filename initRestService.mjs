import express from "express"
import { SoapClient } from "./clientSoapService.mjs"

const app = express()
//const serverPort = 50500

function sendJSONWithStatusCode(code, res, obj)
{
    res.writeHead(code, {'Content-Type': 'application/json'})
    res.end(`${JSON.stringify(obj)}\r\n`)
}

function sumSimple(req, res)
{
    let obj = new Object()
    obj.result = 0;

    let str = req.query.numbers
    var array = JSON.parse("[" + str.split(",") + "]");

    for(let i in array[0])
        obj.result += array[0][i]

    sendJSONWithStatusCode(200, res, obj)
}

function sumWithSoapCall(req, res)
{
    let arg = []

    let str = req.query.numbers
    var array = JSON.parse("[" + str.split(",") + "]");

    for(let i in array[0])
        arg[i] = array[0][i]

    if(arg.length === 2){
        SoapClient(res, arg[0], arg[1])
    }
    else
        sendJSONWithStatusCode(404, res, "Please send 2 parameter")

}

function initRestService(serverPort)
{
    console.log(`server is listining on port:${serverPort}`)
    app.post("/sumSimple",(req, res) => sumSimple(req, res))
    app.post("/sumWithSoapCall", (req, res) => sumWithSoapCall(req, res))
    app.listen(serverPort)
}

export { initRestService }