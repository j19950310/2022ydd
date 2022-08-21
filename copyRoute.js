import fs from 'fs'

const list = [
  ['./dist', './dist/topic'],
  ['./dist', './dist/topic/yunlin-puppet-theater'],
]
const checkDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}


for (let i = 0; i < list.length; i++) {
  const [from, to] = list[i]
  checkDir(to)

  fs.copyFile(`${from}/index.html`, `${to}/index.html`, (err) => {
    if (err) throw err;
    console.log('source.txt was copied to destination.txt');
  });
}