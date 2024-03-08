var http = require("http");
var dt = require("./myFirstModule");
var url = require("url");
var fs = require("fs");
var formidable = require("formidable");
var nodemailer = require("nodemailer");

// Node.js as a Web Server
http
  .createServer(function (req, res) {
    /* // Add an HTTP Header
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
    res.write("The date and time are currently: " + dt.myDateTime());
    
    // Read the Query String
    res.write("\nreq.url is " + req.url + "\n");

    // Split the Query String
    var q = url.parse(req.url, true).query;
    res.write("The name is: " + q.name + "\n");
    res.write("The age is: " + q.age + "\n");

    res.end('Hello World!'); */

    /* // Node.js as a File Server
    fs.readFile('C:\\Users\\hj\\Documents\\gitProject\\fullStack\\html\\demo.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    }); */

    /* if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload[0].filepath;
            console.log(files.filetoupload[0].originalFilename);
            var newpath = 'C:/Users/hj/Pictures/test' + files.filetoupload[0].originalFilename;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    } */

    res.writeHead(200, { "Content-Type": "text/plain;charset=utf-8" });


    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "*@gmail.com",
        pass: "*",
      },
    });

    var mailOptions = {
      from: "*@gmail.com",
      to: "*@163.com",
      subject: "Sending Email using Node.js",
      text: "That was easy!",
    };

    try {
        
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    res.end('completed!');

    } catch (error) {
        console.log(error);
        res.end('error');
    }
  })
  .listen(8080);
