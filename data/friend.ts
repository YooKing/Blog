export const Friends: Friend[] = [
  {
    title: 'Yooking',
    description: 'Me',
    website: 'https://yooking.top',
    avatar: '/img/friend/1.png',
  },
  {
    title: 'Jayden',
    description: '为天地立心,为生民立命,为往圣继学,为万世开太平',
    website: 'https://zengxud.top',
    avatar: 'https://github.com/Jaaayden.png',
  }

]

export type Friend = {
  title: string
  description: string
  website: string
  avatar?: any
}
