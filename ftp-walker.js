/*Require Files*/

var JSFtp = require("jsftp");
var db=require("somewhere");
var path=require("path");

db.connect(path.join(__dirname,'cache','files.json'));

var config={
  host: "myserver.com",
  port: 3331,
  user: "user", 
  pass: "1234",
  path:'/', 
}

var ftp = new JSFtp(config);
var current=db.find({});
var newfiles={};

ftp.ls(config.path, function(err, res) {
  res.forEach(function(file) {
    newfiles[file.name]=file;
  });
});

compareFiles=

fs.writeFile("oldFiles.json", JSON.stringify(newFiles, null, 4), function (err) {
  if(err) throw err;
  console.log("File saved");
});

for(var i=0; i<oldFiles.length;i++){  
  for(var j=0; j<newFiles.length;j++){
    if(oldFiles[i] === newFiles[j]){
      files.push(oldFiles[i]);
      var x = oldFiles.indexOf(oldFiles[i]);
          oldFiles.splice(x, 1);
      var y = newFiles.indexOf(newFiles[j]);
          newFiles.splice(y, 1);
          i--;
          j--;
    }
  }
}

var pushFiles = oldFiles.concat(newFiles);
console.log(pushFiles);
oldFiles = files.concat(pushFiles);

var blobSvc = azure.createBlobService();
  blobSvc.createBlockBlobFromStream('filecontainer', 'fileBlob', pushFiles, function(error, result, response){
  if(!error){
    console.log("File Uploaded");
  }
});
