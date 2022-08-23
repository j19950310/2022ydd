import fs from 'fs'
fs.readdir('.', (err, files) => {
  files.forEach((file, index) => {
    if(file.endsWith('.jpg')) {
      fs.rename(file, 'yunlin_puppet_theater_'+`${index}`.padStart(3,'0')+'.jpg', function(err) {
          if ( err ) console.log('ERROR: ' + err);
      });
    }
  });
});