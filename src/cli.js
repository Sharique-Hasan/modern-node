#!/usr/bin/env node

import meow from 'meow'
import hello from './index'

const cli = meow(`
  Usage
    $ hello <name>

  Options
    --loud, -s     Say it loud

  Examples
    $ hello Adam --loud
`, {
  alias: {
    loud: 's'
  }
})

function help() {
  console.log(cli.help)
  process.exit(1)
}

async function main() {
  if (cli.input.length < 1) {
    help()
  }

  const result = await hello(cli.input[0])

  if (cli.flags.loud) {
    console.log(result.toUpperCase())
  } else {
    console.log(result)
  }
}

main()
