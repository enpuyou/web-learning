const fs = require('fs')

// reading files
// path, callback function
// asynchronous
fs.readFile('./docs/blog1.txt', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString())
});

// write files
fs.writeFile('./docs/blog1.txt', 'Hello World', () => {
  console.log("file is written")
})

// write to a new file
fs.writeFile('./docs/blog2.txt', 'Hello World', () => {
  console.log("file is written")
})

// directory
// check if directory exists
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder created")
  })
} else {
  fs.rmdir('./assets', (err) => {
    if (err) {
        console.log(err)
    }
    console.log("Folder deleted")
  })
}

// delete file
if (fs.existsSync('./docs/delete.txt')) {
  fs.unlink('./docs/delete.txt', (err) => {
    if (err) {
        console.log(err)
    }
    console.log("File deleted")
  })
}
