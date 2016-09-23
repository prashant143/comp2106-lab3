/**
 * Created by Vaghela on 9/23/2016.
 */

//link connect package
var connect = require('connect');
//link to url module to pass url parameter
var url =  require('url');
var accounting = require('accounting');
//instatiate a new connect object
var app= new connect();
//create a lab3 function
var lab3=function (req,res,next) {
    //get x and y value from query

    var qs = url.parse(req.url,true).query;
    //store value into x,y and method variable from query
    var x = qs.x;
    var y= qs.y;
    var method = qs.method;
    //create if statement in order to select appropriate method
    if(method=='add')
    {
        var sum = (parseInt(x)+parseInt(y));
        res.end(x+ ' + ' + y + ' = ' + sum);
    }
    else if (method=='substract')
    {
        var substract = (parseInt(x)-parseInt(y));
        res.end(x+ ' - ' + y + ' = ' + substract);
    }
    else if(method=='divide')
    {
        var divide = (parseInt(x)/parseInt(y));
        res.end(x+ ' / ' + y + ' = ' + divide);
    }
    else if(method=='multiply')
    {
        var multiply = (parseInt(x)*parseInt(y));
        res.end(x+ ' * ' + y + ' = ' + multiply);
    }
    else
    {
        res.end('Please use valid method');
    }

}

app.use('/lab3',lab3);


//start the web server on server 3000
app.listen(3000);

//display message that the server is running

console.log('Connect running on port 3000');


