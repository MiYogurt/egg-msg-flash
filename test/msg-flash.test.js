'use strict'

const mock = require('egg-mock')

describe('test/msg-flash.test.js', () => {
  let app
  before(() => {
    app = mock.app({
      baseDir: 'apps/msg-flash-test'
    })
    return app.ready()
  })

  after(() => app.close())
  afterEach(mock.restore)

  it('should GET /', () => {
    return app
      .httpRequest()
      .get('/')
      .expect('hi, flash')
      .expect(200)
  })

  it('should GET /session1', () => {
    const obj = {
      type: 'error',
      message: { ss: 'some error' }
    }

    return app
      .httpRequest()
      .get('/session1')
      .expect(
        JSON.stringify(obj)
      )
  })

  it('should GET /session3', () => {
    const obj = {
      type: 'warning',
      message: {
        field: {
          name: 'required'
        }
      }
    }

    return app
      .httpRequest()
      .get('/session3')
      .expect(
        JSON.stringify(obj)
      )
  })
})
