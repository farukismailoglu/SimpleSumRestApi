# Simple Sum Rest API 

Simple Sum service and call soap service.



## Run Project ##

node app.mjs  <port>

note : default port  5000



### Test via Postman 

#### Example 1: Sum Simple Service 

``` http://localhost:5000/sumSimple?numbers=[1,22]```

#### Example 2: SumWithSoapCall

```  http://localhost:5000/sumWithSoapCall?numbers=[1,22]```



### Test via Httpie

#### Install Httpie  

```sudo apt install httpie```

#### Example 1: SumSimple Service 

```http post http://localhost:5000/sumSimple?numbers=[1,22]```

#### Example 2: SumWithSoapCall

```http post http://localhost:5000/sumWithSoapCall?numbers=[1,22]```

