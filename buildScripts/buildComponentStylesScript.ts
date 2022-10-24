import { exit } from 'process'
import { buildComponentStyles } from './buildComponentStyles'

buildComponentStyles().then(() => exit(0))
