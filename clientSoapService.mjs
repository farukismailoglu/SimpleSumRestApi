import soap from "soap"

var url = 'http://www.dneonline.com/calculator.asmx?WSDL'
var args, resultValue

function sendJSONWithStatusCode(code, res, obj)
{
    res.writeHead(code, {'Content-Type': 'application/json'})
    res.end(`${JSON.stringify(obj)}\r\n`)
}

export function SoapClient(res, intA, intB){
    soap.createClient(url, (err, client) =>{
        args = {intA: intA,intB: intB}
        client.Add(args, (err, result) => {
            sendJSONWithStatusCode(200, res, result)
        })
    })
}