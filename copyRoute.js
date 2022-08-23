import fs from 'fs'

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
  [
    './dist',
    './dist/topic/huwei-joint-office',
    {
      TITLE: "雲的觀察日誌 | 【雲林美食#文化歷史建築】悠遊歷史樣貌，在消防局裡的咖啡茶香「虎尾合同廳舍」",
      URL: '/topic/huwei-joint-office',
      DESC: '【雲林美食#文化歷史建築】悠遊歷史樣貌，在消防局裡的咖啡茶香「虎尾合同廳舍」',
      IMAGE: '/yunlin-puppet-theater/yunlin_puppet_theater_001.jpg'
    }
  ],
  [
    './dist',
    './dist/topic/yunlin-puppet-theater',
    {
      TITLE: "雲的觀察日誌|雲林文化探索#文化歷史建築】五、六年級生的回憶！掌中戲之鄉虎尾必訪特色景點「雲林布袋戲館」",
      URL: '/topic/yunlin-puppet-theater',
      DESC: '【雲林文化探索#文化歷史建築】穿梭城市光景中的時光秘境，虎尾人的舊回憶「雲林故事館」',
      IMAGE: '/yunlin-puppet-theater/yunlin_puppet_theater_001.jpg'
    }
  ],
  [
    './dist',
    './dist/topic/yunlin-story-house',
    {
      TITLE: "雲的觀察日誌|雲林文化探索#文化歷史建築】五、六年級生的回憶！掌中戲之鄉虎尾必訪特色景點「雲林布袋戲館」",
      URL: '/topic/yunlin-story-house',
      DESC: '【雲林文化探索#文化歷史建築】穿梭城市光景中的時光秘境，虎尾人的舊回憶「雲林故事館」',
      IMAGE: '/yunlin-puppet-theater/yunlin_puppet_theater_001.jpg'
    }
  ],
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