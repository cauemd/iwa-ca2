/*This code was mostly based on https://github.com/mikhail-cct/CA1-In-class-Demo
*
*This code was adapted to match the xml, xsl and xsd that was created by me.
*The method that validades the forms from the html is also original.
*/

var http = require('http'),
    path = require('path'),
    express = require('express'),
    fs = require('fs'),
    expAutoSan = require('express-autosanitizer'),
    xmlParse = require('xslt-processor').xmlParse,
    xsltProcess = require('xslt-processor').xsltProcess,
    xml2js = require('xml2js');
   
//Sanitization process copied from Antonio Ramirez
//https://medium.com/@antonioramirezofficial/automatic-and-painless-sanitization-for-all-express-routes-ae24cbe653c8

var router = express();
var server = http.createServer(router);

router.use(expAutoSan.allUnsafe);

router.use(express.static(path.resolve(__dirname, 'views')));
router.use(express.urlencoded({extended: true}));
router.use(express.json());

// Function to read in XML file and convert it to JSON
function xmlFileToJs(filename, cb) {
  var filepath = path.normalize(path.join(__dirname, filename));
  fs.readFile(filepath, 'utf8', function(err, xmlStr) {
    if (err) throw (err);
    xml2js.parseString(xmlStr, {}, cb);
  });
}

//Function to convert JSON to XML and save it
function jsToXmlFile(filename, obj, cb) {
  var filepath = path.normalize(path.join(__dirname, filename));
  var builder = new xml2js.Builder();
  var xml = builder.buildObject(obj);
  fs.writeFile(filepath, xml, cb);
}

router.get('/', function(req, res){

    res.render('index');

})

router.get('/get/html', function(req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});

    var xml = fs.readFileSync('Monsters.xml', 'utf8');
    var xsl = fs.readFileSync('Monsters.xsl', 'utf8');
    var doc = xmlParse(xml);
    var stylesheet = xmlParse(xsl);

    var result = xsltProcess(doc, stylesheet);

    res.end(result.toString());


});

// POST request to add to JSON & XML files
router.post('/post/json', function(req, res) {

  // Function to read in a JSON file, add to it & convert to XML
  function appendJSON(obj) {
    console.log(obj);
    // Function to read in XML file, convert it to JSON, add a new object and write back to XML file
    xmlFileToJs('Monsters.xml', function(err, result) {
      if (err) throw (err);
      result.rpgMonsters.monster.push({'name': obj.name, 'type': obj.type, 'size': obj.size, 'challengerLevel': obj.challengerLevel, 'exp': obj.exp});
      console.log(result);
      jsToXmlFile('Monsters.xml', result, function(err) {
        if (err) console.log(err);
      })
    })
  }

  // Call appendJSON function and pass in body of the current POST request
  appendJSON(req.body);

  // Re-direct the browser back to the page, where the POST request came from
  res.redirect('back');

});

server.listen(process.env.PORT || 3002, process.env.IP || "0.0.0.0", function() {
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});