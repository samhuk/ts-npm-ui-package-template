/**
 * This script performs various tasks that setup the template.
 *
 * It replaces instances of placeholder words, runs `npm i`, etc.
 *
 * To run this script, run `node setup.js` from the package template root directory.
 */

const { exec } = require('child_process')
const fs = require('fs')
const readline = require('readline')

const r1 = readline.createInterface({ input: process.stdin, output: process.stdout })

const capitalize = s=> `${s.charAt(0).toUpperCase()}${s.slice(1)}`

const dashCaseToCamelCase = s => s.replace(/-([a-z0-9])/g, (_, m) => `${m.toUpperCase()}`)

const VALIDATORS = {
  isNonEmptyString: { op: s => s != null && s.length > 0, errMsg: 'Cannot be empty' },
  hasNoSpaces: { op: s => s.indexOf(' ') === -1, errMsg: 'Cannot have whitespace' },
}

const tryGetInput = (question, onComplete, validators, defaultIfEmpty) => {
  const _question = defaultIfEmpty != null ? `${question} [${defaultIfEmpty}]: ` : `${question}: `
  r1.question(_question, name => {
    const isEmpty = !VALIDATORS.isNonEmptyString.op(name)
    if (isEmpty && defaultIfEmpty != null) {
      onComplete(defaultIfEmpty)
    }
    else if (validators != null) {
      const errMsgList = validators.reduce((acc, validator) => (validator.op(name) ? acc : acc.concat(validator.errorMsg)), [])
      if (errMsgList.length === 0) {
        onComplete(name)
      }
      else {
        console.log('Error:', errMsgList.join(', '))
        tryGetInput(question, onComplete, validators, defaultIfEmpty)
      }
    }
    else {
      onComplete(name)
    }
  })
}

const getDashCasePackageName = () => new Promise((res, rej) => {
  tryGetInput('package-name', res, [VALIDATORS.hasNoSpaces], 'example-package')
})

const getCamelCasePackageName = (defaultValue) => new Promise((res, rej) => {
  tryGetInput('packageName', res, [], defaultValue ?? 'examplePackage')
})

const getNpmPackageName = (defaultValue) => new Promise((res, rej) => {
  tryGetInput('npm-package-name', res, [VALIDATORS.hasNoSpaces], defaultValue ?? 'example-package')
})

const getLicenseName = () => new Promise((res, rej) => {
  tryGetInput('license-name', res, [], 'Joe Bloggs')
})

const getLicenseEmail = () => new Promise((res, rej) => {
  tryGetInput('license-email', res, [VALIDATORS.hasNoSpaces], 'joebloggs@email.com')
})

const getGithubUserName = () => new Promise((res, rej) => {
  tryGetInput('github-user-name', res, [VALIDATORS.hasNoSpaces], 'joebloggs')
})

const getPackageSlogan = () => new Promise((res, rej) => {
  tryGetInput('package-slogan', res, [], 'Delightful Typescript Package')
})

const _replaceTokensInFiles = (filePaths, tokenMapEntries, i, onComplete) => {
  if (i >= filePaths.length) {
    onComplete()
    return
  }

  const filePath = filePaths[i]

  console.log(`--> ${filePath}`)

  const fileText = fs.readFileSync(filePath, 'utf8')
  let newFileText = fileText
  tokenMapEntries.forEach(tokenMapEntry => {
    newFileText = newFileText.replace(tokenMapEntry[0], tokenMapEntry[1])
  })
  fs.writeFileSync(filePath, newFileText)

  _replaceTokensInFiles(filePaths, tokenMapEntries, i + 1, onComplete)
}

const replaceTokensInFiles = (filePaths, tokenMap) => new Promise((res, rej) => {
  console.log('\n==> Replacing some placeholder words in files...')
  const tokenMapEntries = Object.entries(tokenMap)
  _replaceTokensInFiles(filePaths, tokenMapEntries, 0, res)
})

const renameDirsAndFiles = (
  dashCasePackageName,
  camelCasePackageName,
) => {
  console.log('\n==> Renaming some directories and files...')
  fs.renameSync('./src/package-name', `./src/${dashCasePackageName}`)
  fs.renameSync('./src/demo/client/components/showcase/packageName.tsx', `./src/demo/client/components/showcase/${camelCasePackageName}.tsx`)
  fs.renameSync('./src/demo/client/components/common/generic/packageName.tsx', `./src/demo/client/components/common/generic/${camelCasePackageName}.tsx`)
}

const npmInstall = () => new Promise((res, rej) => {
  console.log('==> Installing npm dependencies...')
  exec('npm i', err => {
    if (err != null)
      console.log(err)
    else
      res()
  })
})

const main = async () => {
  const dashCasePackageName = await getDashCasePackageName()
  const defaultCamelCasePackageName = dashCaseToCamelCase(dashCasePackageName)

  const camelCasePackageName = await getCamelCasePackageName(defaultCamelCasePackageName)
  const pascalCasePackageName = capitalize(camelCasePackageName)
  const npmPackageName = await getNpmPackageName(dashCasePackageName)
  const licenseName = await getLicenseName()
  const licenseEmail = await getLicenseEmail()
  const githubUserName = await getGithubUserName()
  const packageSlogan = await getPackageSlogan()

  const nonDoubleDashedTokenMap = {
    'package-name': dashCasePackageName,
    'packageName': camelCasePackageName,
    'PackageName': pascalCasePackageName,
    'npm-package-name': npmPackageName,
    'license-name': licenseName,
    'license-email': licenseEmail,
    'github-user-name': githubUserName,
    'package-slogan': packageSlogan,
  }

  const doubleDashedTokenMap = {}
  Object.keys(nonDoubleDashedTokenMap).forEach(token => doubleDashedTokenMap[`{{${token}}}`] = nonDoubleDashedTokenMap[token])

  const filePathsWithDoubleDashTokens = [
    './README.md',
    './package.json',
    './LICENSE',
    './contributing/development.md',
  ]

  const filePathsWithNonDoubleDashTokens = [
    './src/index.ts',
    './src/types.ts',
    './src/package-name/types.ts',
    './src/package-name/index.ts',
    './src/package-name/styles/index.scss',
    './src/demo/client/components/showcase/index.tsx',
    './src/demo/client/components/showcase/packageName.tsx',
    './src/demo/client/components/common/generic/packageName.tsx',
  ]

  await replaceTokensInFiles(filePathsWithDoubleDashTokens, doubleDashedTokenMap)
  await replaceTokensInFiles(filePathsWithNonDoubleDashTokens, nonDoubleDashedTokenMap)

  renameDirsAndFiles(dashCasePackageName, camelCasePackageName)

  await npmInstall()

  console.log('\nSetup complete! Run `npm run unit-tests`. Later on, you can try `npm publish`. :)')
  r1.close()
}

main()
