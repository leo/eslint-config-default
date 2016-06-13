import test from 'ava'
import config from '.'

const isObject = obj => typeof obj === 'object' && obj !== null

test('is object', t => {
  t.truthy(isObject(config.parserOptions))
  t.truthy(isObject(config.env))
  t.truthy(isObject(config.rules))
})
