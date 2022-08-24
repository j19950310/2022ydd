import fs from 'fs'
fs.readdir('.', (err, files) => {
  files.forEach((file, index) => {
    const [name, jpg] = file.split('.')
    if(jpg === 'jpg') {
      fs.rename(file, 'huwei_joint_office'+`${name}`.padStart(2,'0')+'.jpg', function(err) {
          if ( err ) console.log('ERROR: ' + err);
      });
    }
  });
});