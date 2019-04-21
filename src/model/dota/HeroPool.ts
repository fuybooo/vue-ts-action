import Hero from '@/model/dota/Hero'
const heroNumberMap: any = {
  level1: 20,
}
// 总英雄池，只需要存放标志
const HERO_POOL: Hero[] = [
  ...Array(heroNumberMap.level1).fill(0).map(() => new Hero('斧王', 1, 600, 50, 5, 0, 1.7)),
]
// 当前英雄池，只需要存放标志
const currentHeroPool: Hero[] = []
// 当前玩家手中的英雄 实例
const playerHero: Hero[] = []
export function genAHero() {
  return currentHeroPool.splice(Math.floor(Math.random() * currentHeroPool.length), 1)
}
export default HERO_POOL
