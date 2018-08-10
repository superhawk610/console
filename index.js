/**
 *
 * This package will only work in Chromium-based browsers.
 * Implementation credit goes to Brian Vaughn (@brian_d_vaughn).
 *
 * Usage:
 * import log from '@superhawk610/console'
 *
 * // log.blue('TAG', 'message', 'suffix');
 * log.blue('API', 'Call was successful', ':)');
 * log.red('API', 'Call errored', '!!!');
 *
 */

const { detect } = require('detect-browser')
const browser = detect()

if (!browser || browser.name !== 'chrome') {
  console.log(
    'WARNING: @superhawk610/console is only supported on Chromium-based browsers.'
  )
}

const COLORS = {
  blue: ['#1E88E5', '#90CAF9'],
  brown: ['#6D4C41', '#D7CCC8'],
  gray: ['#212121', '#BDBDBD'],
  green: ['#388E3C', '#A5D6A7'],
  red: ['#E53935', '#EF9A9A'],
  orange: ['#F4511E', '#FFAB91'],
  purple: ['#8E24AA', '#E1BEE7'],
  yellow: ['#FFD600', '#FFF59D']
}

const print = Object.entries(COLORS).reduce((api, [name, colors]) => {
  api[name] = (shortLabel, longerMessage, optionalSuffix = '') =>
    console.log(
      `%c${shortLabel}%c${longerMessage}%c${optionalSuffix}`,
      `background-color: ${
        colors[0]
      }; color: #fff; padding: 2px 4px; font-weight: bold;`,
      `background-color: ${colors[1]}; color: #000; padding: 2px 4px;`,
      optionalSuffix !== ''
        ? `background-color: ${
            colors[0]
          }; color: #fff; padding: 2px 4px; font-weight: bold;`
        : ''
    )
  return api
}, {})

module.exports = print
