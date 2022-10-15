export interface EssayFrontmatter {
  title: string
  description: string
  tags: string[]
  date: string
  _path?: string
  _name?: string /* 与文件同名 */
}

