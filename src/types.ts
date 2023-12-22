export interface Category {
  name: string
  color: string
  categoryKey?: number | string
  skills?: string[]
  skillDescriptions?: string[]
}

export interface Skill {
  name: string,
  category: string,
  color: string,
  skillDescription: string,
  skillKey: string, // "Strategy-Product",
  status: string,
  showLevels: boolean,
  voteMap: SyncedMap,
  voteFutureMap: SyncedMap,
  onChange?: () => void,
}
