const kb = require('./keyboard-buttons')

module.exports = {
    start: [
        [kb.start.ru, kb.start.uz]
    ],
    home: [
        [kb.home.service],
        [kb.home.order, kb.home.about],
        [kb.home.contact, kb.home.languege]
    ],
    service: [
        [kb.service.WebSite, kb.service.marketing],
        [kb.service.design, kb.service.soft],
        [kb.back]
    ]
}