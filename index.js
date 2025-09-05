import { createInterface } from 'node:readline/promises'

/**
 * Simple program to ask for user's name and greet them.
 */

const readline = createInterface({ input: process.stdin, output: process.stdout })

const name = await readline.question('Welcome! \nWhat is your name? ')
const asciiArt = `
 |\\__/,|   (´\\
 |_ _  |.--.) )
 ( T   )     /
(((^_(((/(((_/  
`

const vowels = ['a', 'e', 'i', 'o', 'u', 'å', 'ä', 'ö', 'A', 'E', 'I', 'O', 'U', 'Å', 'Ä', 'Ö']

/**
 *
 * @param name
 */
const rovarsprak = (name) => {
  let translated = ''
  for (let i = 0; i < name.length; i++) {
    if (!vowels.includes(name[i]) && name[i].toLowerCase() !== name[i].toUpperCase()) {
      const letter = name[i]
      translated += letter + 'o' + letter
      continue
    }
    translated += name[i]
  }
  return translated
}

console.log(`Hello, ${name}! \n${rovarsprak(name)}\n${asciiArt}`)

readline.close()
