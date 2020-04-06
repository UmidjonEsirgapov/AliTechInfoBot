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
            bot.sendMessage(chatId, 'Web sayt turini tanlang', {
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


bot.on("polling_error", (err) => console.log(err));