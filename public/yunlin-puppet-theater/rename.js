import fs from 'fs'
fs.readdir('.', (err, files) => {
  files.forEach((file, index) => {
    const [name, jpg] = file.split('.')
    console.log({name, jpg})
    if(jpg === 'jpg') {
      fs.rename(file, 'yunlin_puppet_theater_'+`${name}`.padStart(2,'0')+'.jpg', function(err) {
          if ( err ) console.log('ERROR: ' + err);
      });
    }
  });
});