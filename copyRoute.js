import fs from 'fs'
import { posts } from './src/data.js'
const postsMeta = posts.map((post)=>([
  './dist',
  `./dist/topic/${post.slug}`,
  {
    TITLE: post.title,
    URL: `/topic/${post.slug}`,
    DESC: post.desc || post.title,
    IMAGE: post.share
  }
]))

console.log(postsMeta)
const list = [
  [ // HOME
    './dist',
    './dist',
    {
      TITLE: "雲的觀察日誌|首頁",
      URL: '/',
      DESC: '首頁',
      IMAGE: '/assets/img_slogan.4962dfee.png'
    }
  ],
  [
    './dist',
    './dist/topic',
    {
      TITLE: "雲的觀察日誌|精選文章",
      URL: '/topic',
      DESC: '精選文章',
      IMAGE: '/assets/img_slogan.4962dfee.png'
    }
  ],
  ...postsMeta
]
const regexList = [
  [/{{URL}}/g, 'URL'],
  [/{{DESC}}/g, 'DESC'],
  [/{{IMAGE}}/g, 'IMAGE'],
  [/{{TITLE}}/g, 'TITLE']
]
// console.log(string.replace(/-/g, ''))  

const checkDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

const init = async () => {
  for (let i = 0; i < list.length; i++) {
    const [from, to, meta] = list[i]
    const fromFile = `${from}/index.html`
    const toFile = `${to}/index.html`
    checkDir(to)
  
    await fs.copyFileSync(fromFile, toFile);
  }

  for (let i = 0; i < list.length; i++) {
    const [from, to, meta] = list[i]
    const toFile = `${to}/index.html`
    let content = await fs.readFileSync(toFile, 'utf-8')
    for (let index = 0; index < regexList.length; index++) {
      const [regex, key] = regexList[index];
      content = content.replace(regex, meta[key]);
    }
    fs.writeFileSync(toFile, content, 'utf-8');
  }
}

init()