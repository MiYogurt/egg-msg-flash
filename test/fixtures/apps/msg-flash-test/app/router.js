'use strict'

module.exports = app => {
    const { router, controller } = app

    router.get('/', controller.home.index)
    router.get('/session1', async (ctx, next) => {
        ctx.flash_error({
            ss: 'some error'
        })
        ctx.body = ctx.session.flash

    })

    router.get('/session3', async (ctx, next) => {
        ctx.flash = {
            type: 'warning',
            message: {
                field: {
                    name: 'required'
                }
            }
        }
        ctx.request.flash('warning', {
            field: {
                name: 'required'
            }
        })
        ctx.body = ctx.session.flash
    })

}
