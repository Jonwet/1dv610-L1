import {createInterface} from 'node:readline/promises'

const readline = createInterface({input: process.stdin, output: process.stdout})

const name = await readline.question('What is your name? ')

console.log(`Hello, ${name}!`)

readline.close()