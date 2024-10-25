import type { Context } from 'aws-lambda'
 import * as process from 'node:process'

export const handler = async (
  event,
  _context: Context,
): => {
  const body = JSON.parse(event.body || '{]')

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
    body: JSON.stringify({ x }),
  }
}
