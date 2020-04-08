const kb = require('./keyboard-buttons-ru')
const keyboard = require('./keyboard-ru')
const texts = require('./texts-ru')
const ik = require('./inline-keyboard-ru')
const helpers = require('../helpers')



module.exports = {


    russian(msg, bot) {

        const chatId = helpers.getChatId(msg)

        switch (msg.text) {
            case kb.start.ru:
                bot.sendMessage(chatId, 'Основной раздел', {
                    reply_markup: {
                        resize_keyboard: true,
                        keyboard: keyboard.home
                    }
                })
                break
            case kb.home.service:
                bot.sendMessage(chatId, 'услуги', {
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
                bot.sendMessage(chatId, 'Выбрать язык', {
                    reply_markup: {
                        resize_keyboard: true,
                        keyboard: keyboard.start
                    }
                })
                break
            case kb.back:
                bot.sendMessage(chatId, 'Еще один основной раздел', {
                    reply_markup: {
                        resize_keyboard: true,
                        keyboard: keyboard.home
                    }
                })
                break
            // inlayn keyboard
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

    }
}