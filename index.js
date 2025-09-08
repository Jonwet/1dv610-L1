import { createInterface } from 'node:readline/promises'

/**
 * Simple program to ask for user's name and greet them.
 */

const readline = createInterface({ input: process.stdin, output: process.stdout })

const name = await readline.question('Välkommen! \nVad heter du? ')
const asciiArt = `
 |\\__/,|   (´\\
 |_ _  |.--.) )
 ( T   )     /
(((^_(((/(((_/  
`

const vowels = ['a', 'e', 'i', 'o', 'u', 'å', 'ä', 'ö', 'A', 'E', 'I', 'O', 'U', 'Å', 'Ä', 'Ö']

/**
 * Translates a given name to rövarspråket (the robber language).
 *
 * @param {string} name - The name to translate to rövarspråket.
 * @returns {string} The translated name.
 */
const rovarsprak = (name) => {
  let translated = ''
  for (let i = 0; i < name.length; i++) {
    if (!vowels.includes(name[i]) && isNaN(name[i])) {
      const letter = name[i]
      translated += letter + 'o' + letter
      continue
    }
    translated += name[i]
  }
  return translated
}

console.log(`Tjena, ${name}! \nDitt namn på rövarspråket är: ${rovarsprak(name)}\n${asciiArt}`)

readline.close()
