import * as fs from 'node:fs';
import * as path from 'node:path'

const templateFunctions = {
  component: {
    general: function () {
      createComponent('general')
    },
    form: function () {
      createComponent('forms')
    },
    field: function () {
      createComponent('formsInputs')
    },
    modal: function () {
      createComponent('modals')
    },
  },
}

let type = process.argv[2]?.replace('--', '')
let templateType = templateFunctions[type]

if (templateType == templateFunctions.component) {
  let componentTemplate = templateFunctions[process.argv[2]?.replace('--', '')][process.argv[3]?.replace('--', '')]
  componentTemplate()
} else console.error(new Error('Template inválido.'))

// General Functions
function findFolder(rootFolder = './src', folderName, type = undefined) {
  const files = fs.readdirSync(rootFolder)

  for (const file of files) {
    const filePath = path.join(rootFolder, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory() && file === folderName) {
      return filePath
    } else if (stat.isDirectory()) {
      const foundFolder = findFolder(filePath, folderName)
      if (foundFolder) {
        return foundFolder
      } else if (type === 'component') {

        const folder = `./src/components`
        const isFolder = fs.statSync(folder).isDirectory()

        if (isFolder) {
          const componentFolder = `${folder}/${folderName}`
          const found = fs.existsSync(componentFolder)

          if (!found) {
            fs.mkdirSync(componentFolder)
            fs.writeFileSync(`${componentFolder}/index.ts`, "//<NEXTPRESS-BACK-AUTO-IMPORT>//")
            return findFolder(folder, folderName) ?? null
          }
        }
      }
    }
  }

  return null
}

function createComponent(type) {
  let componentName = process.argv[4]
  let componentMainFolder = findFolder('./src', type, 'component')
  let componentFolder = `./${componentMainFolder}/${componentName}`
  let componentTemplate = fs.readFileSync(
    './src/templates/react.utils.component.tsx',
    'utf-8'
  )
  componentTemplate = componentTemplate.replace('// @ts-nocheck', '')
  componentTemplate = componentTemplate.replace('// eslint-disable-next-line @typescript-eslint/ban-ts-comment', '')
  componentTemplate = componentTemplate.replace('// eslint-disable-next-line @typescript-eslint/no-unused-vars', '')
  componentTemplate = componentTemplate.replace('// eslint-disable-next-line no-empty-pattern', '')
  if (!componentName) {
    console.error(
      new Error('Você não especificou um nome para seu componente.')
    )
    return
  }
  componentTemplate = componentTemplate
    .replaceAll('__COMPONENTNAME__', componentName)
    .trim()
  fs.mkdirSync(componentFolder)
  fs.writeFileSync(`${componentFolder}/${componentName}.module.scss`, '')
  console.log(
    `-- "${componentFolder}/${componentName}.module.scss" criado com sucesso.`
  )
  fs.writeFileSync(`${componentFolder}/${componentName}.tsx`, componentTemplate)
  console.log(
    `-- "${componentFolder}/${componentName}.tsx" criado com sucesso.`
  )

  let importFile = fs.readFileSync(
    `${componentMainFolder}/index.ts`,
    'utf-8'
  )
  importFile = importFile.replace(
    /\/\/<TAKEAT-BACK-AUTO-IMPORT>\/\//g,
    `export { ${componentName} } from './${componentName}/${componentName}'\n//<TAKEAT-BACK-AUTO-IMPORT>//`
  )
  fs.writeFileSync(`${componentMainFolder}/index.ts`, importFile)
  console.log('-- Importação automática realizada.')

}

