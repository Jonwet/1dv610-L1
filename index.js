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

console.log(`Hello, ${name}! \n${asciiArt}`)

readline.close()
