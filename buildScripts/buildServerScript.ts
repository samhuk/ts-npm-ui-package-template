import { exit } from 'process'
import { buildServer } from './buildServer'

buildServer().then(() => {
  exit(0)
})
