#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

const localesDir = path.resolve(__dirname, '..', 'locales')

function fail(msg) {
  console.error('✖', msg)
  process.exitCode = 1
}

function checkValue(keyPath, value) {
  if (Array.isArray(value)) {
    fail(`${keyPath} resolved to an array (arrays of messages are not supported).`)
    return
  }
  if (value && typeof value === 'object') {
    for (const k of Object.keys(value)) {
      checkValue(`${keyPath}.${k}`, value[k])
    }
    return
  }
  if (typeof value !== 'string') {
    fail(`${keyPath} is not a string (found ${typeof value}).`)
  }
}

let filesChecked = 0
for (const file of fs.readdirSync(localesDir)) {
  if (!file.endsWith('.json')) continue
  filesChecked++
  const full = path.join(localesDir, file)
  try {
    const raw = fs.readFileSync(full, 'utf8')
    const json = JSON.parse(raw)
    for (const k of Object.keys(json)) {
      checkValue(k, json[k])
    }
  } catch (err) {
    console.error(`Error while checking ${file}:`, err.message)
    process.exitCode = 1
  }
}

if (filesChecked === 0) {
  console.warn('No locale files found in', localesDir)
  process.exitCode = 1
} else if (process.exitCode === 1) {
  console.error('Locale validation failed.')
  process.exitCode = 1
} else {
  console.log('✔ All locale files look good — no arrays and all messages are strings or nested objects.')
}
