const TelegramBot = require('node-telegram-bot-api')
const fs = require('fs')
const config = require('./config/config')
const helpers = require('./helpers')
const kb = require('./keyboard-buttons')
const keyboard = require('./keyboard')
const texts = require('./texts')
const ik = require('./inline-keyboard')
const ru = require('./ru/ru')

const bot = new TelegramBot(config.token, {
    polling: true
})


bot.onText(/\/start/, msg => {
    const chatId = helpers.getChatId(msg)

    bot.sendMessage(chatId, 'Assalomu alaykum, ' + msg.from.first_name + ' botga Xush kelibsiz \nBo\'limlarning birini tanlang:', {
        reply_markup: {
            resize_keyboard: true,
            keyboard: keyboard.start
        }
    })
})

bot.on('message', msg => {
    const chatId = helpers.getChatId(msg)

    switch (msg.text) {
        case kb.start.uz:
            bot.sendMessage(chatId, 'Asosiy bo\'lim', {
                reply_markup: {
                    resize_keyboard: true,
                    keyboard: keyboard.home
                }
            })
            break
        case kb.home.service:
            bot.sendMessage(chatId, 'Xizmatlar', {
                reply_markup: {
                    resize_keyboard: true,
                    keyboard: keyboard.service
                }
            })
            break
        case kb.home.order:
            bot.sendMessage(chatId, texts.orderType, {
                reply_markup: {
                    inline_keyboard: ik.order
                }
            })
            break
        case kb.home.about:
            break
        case kb.home.contact:
            bot.sendMessage(chatId, texts.aloqa, {
                disable_web_page_preview: true,
                parse_mode: 'HTML'
            })
            bot.sendLocation(chatId, '40.135289', '67.822330')
            break
        case kb.home.languege:
            bot.sendMessage(chatId, 'Tilni tanlang', {
                reply_markup: {
                    resize_keyboard: true,
                    keyboard: keyboard.start
                }
            })
            break
        case kb.back:
            bot.sendMessage(chatId, 'Yana asosiy bo\'lim', {
                reply_markup: {
                    resize_keyboard: true,
                    keyboard: keyboard.home
                }
            })
            break
        case kb.service.WebSite:
            bot.sendMessage(chatId, texts.bolim, {
                reply_markup: {
                    inline_keyboard: ik.webSite
                }
            })
            break
        case kb.service.marketing:
            bot.sendMessage(chatId, texts.bolim, {
                reply_markup: {
                    inline_keyboard: ik.marketing
                }
            })
            break
        case kb.service.soft:
            bot.sendMessage(chatId, texts.bolim, {
                reply_markup: {
                    inline_keyboard: ik.soft
                }
            })
            break
        case kb.service.design:
            bot.sendMessage(chatId, texts.bolim, {
                reply_markup: {
                    inline_keyboard: ik.design
                }
            })
            break
    }
    ru.russian(msg, bot)

})

// ============ Query =================================

bot.on('callback_query', query => {
    const { chat, message_id, text } = query.message

    switch (query.data) {
        case kb.WebSite.landingPage:
            bot.sendPhoto(chat.id, texts.landingPagePhoto, {
                caption: texts.landingPage
            })
            break
        case kb.WebSite.corporative:
            bot.sendPhoto(chat.id, texts.corporativePhoto, {
                caption: texts.corporative
            })
            break
        case kb.WebSite.eMarket:
            bot.sendPhoto(chat.id, texts.eMarketPhoto, {
                caption: texts.eMarket
            })
            break
        case kb.marketing.seo:
            bot.sendPhoto(chat.id, texts.seoPhoto, {
                caption: texts.seo
            })
            break
        case kb.marketing.smm:
            bot.sendPhoto(chat.id, texts.smmPhoto, {
                caption: texts.smm
            })
            break
        case kb.marketing.smsMarketing:
            bot.sendPhoto(chat.id, texts.smsMarketingPhoto, {
                caption: texts.smsMarketing
            })
            break
        //====== debug
        case kb.design.graphDesign:
            bot.sendPhoto(chat.id, texts.graphDesignPhoto, {
                caption: texts.graphDesign
            })
            break
        case kb.design.logoDesign:
            bot.sendPhoto(chat.id, texts.logoDesignPhoto, {
                caption: texts.logoDesign
            })
            break
        case kb.design.ux:
            bot.sendPhoto(chat.id, texts.uxPhoto, {
                caption: texts.ux
            })
            break
        case kb.soft.crm:
            bot.sendPhoto(chat.id, texts.crmPhoto, {
                caption: texts.crm
            })
            break
        case kb.soft.mobileSoft:
            bot.sendPhoto(chat.id, texts.mobileSoftPhoto, {
                caption: texts.mobileSoft
            })
            break
        case kb.soft.pcSoft:
            bot.sendPhoto(chat.id, texts.pcSoftPhoto, {
                caption: texts.pcSoft
            })
            break

        // ============ Order ===============

        case kb.softProduct:
            bot.editMessageText(texts.bolim, {
                chat_id: chat.id,
                message_id: message_id,
                reply_markup: {
                    inline_keyboard: ik.softProduct
                }
            })
            break
        case kb.marketing:
            bot.editMessageText(texts.bolim, {
                chat_id: chat.id,
                message_id: message_id,
                reply_markup: {
                    inline_keyboard: ik.marketingOrder
                }
            })
            break
        case kb.backOrder:
            bot.editMessageText(texts.orderType, {
                chat_id: chat.id,
                message_id: message_id,
                reply_markup: {
                    inline_keyboard: ik.order
                }
            })
            break
        case kb.design:
            bot.editMessageText(texts.bolim, {
                chat_id: chat.id,
                message_id: message_id,
                reply_markup: {
                    inline_keyboard: ik.designOrder
                }
            })
            break
    }


    bot.answerCallbackQuery(query.id, `${query.data}`)
})






bot.on("polling_error", (err) => console.log(err));