const kb = require('./keyboard-buttons-ru')

module.exports = {
    webSite: [
        [{
            text: kb.WebSite.landingPage,
            callback_data: kb.WebSite.landingPage
        }],
        [{
            text: kb.WebSite.corporative,
            callback_data: kb.WebSite.corporative
        }, {
            text: kb.WebSite.eMarket,
            callback_data: kb.WebSite.eMarket
        }]
    ],
    marketing: [
        [{
            text: kb.marketing.seo,
            callback_data: kb.marketing.seo
        }],
        [{
            text: kb.marketing.smm,
            callback_data: kb.marketing.smm
        }, {
            text: kb.marketing.smsMarketing,
            callback_data: kb.marketing.smsMarketing
        }]
    ],
    design: [
        [{
            text: kb.design.ux,
            callback_data: kb.design.ux
        }],
        [{
            text: kb.design.graphDesign,
            callback_data: kb.design.graphDesign
        }, {
            text: kb.design.logoDesign,
            callback_data: kb.design.logoDesign
        }]
    ],
    soft: [
        [{
            text: kb.soft.mobileSoft,
            callback_data: kb.soft.mobileSoft
        }],
        [{
            text: kb.soft.pcSoft,
            callback_data: kb.soft.pcSoft
        }, {
            text: kb.soft.crm,
            callback_data: kb.soft.crm
        }]
    ]
}