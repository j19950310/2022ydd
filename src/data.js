import yunlinPuppetTheater from './data/yunlinPuppetTheater.json'
import huweiJointOffice from './data/huweiJointOffice.json'
import yunlinStoryHouse from './data/yunlinStoryHouse.json'

export const tags = [
  {
    name: '美食',
    color: '#da7481',
    key: 'food',
  },
  {
    name: '人文',
    color: '#da7481',
    key: 'humanities',
  },
  {
    name: '景點',
    color: '#ea9700',
    key: 'attractions'
  }
]

export const posts = [
  yunlinPuppetTheater,
  huweiJointOffice,
  yunlinStoryHouse
]

export const mapPostItem = (item) => {
  const { slug, title, tag: _tag, share } = item
  const tag = tags.find(tag => tag.key === _tag)
  const image = item.content.find((block) => block.type === 'img')
  return {
    to: `/topic/${slug}`,
    slug,
    tag: tag.name,
    tagKey: tag.key,
    color: tag.color,
    image: share,
    title
  }
}