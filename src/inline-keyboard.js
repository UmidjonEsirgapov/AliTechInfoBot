const kb = require('./keyboard-buttons')

module.exports = {
    webSite: [
        [{
            text: kb.WebSite.landingPage,
            callback_data: kb.WebSite.landingPage
        }],
        [{
            text: kb.WebSite.corporative,
            callback_data: kb.WebSite.corporative
        }], [{
            text: kb.WebSite.eMarket,
            callback_data: kb.WebSite.eMarket
        }]
    ],
    marketing: [
        [{
            text: kb.marketing1.seo,
            callback_data: kb.marketing1.seo
        }],
        [{
            text: kb.marketing1.smm,
            callback_data: kb.marketing1.smm
        }], [{
            text: kb.marketing1.smsMarketing,
            callback_data: kb.marketing1.smsMarketing
        }]
    ],
    design: [
        [{
            text: kb.design1.ux,
            callback_data: kb.design1.ux
        }],
        [{
            text: kb.design1.graphDesign,
            callback_data: kb.design1.graphDesign
        }],
        [{
            text: kb.design1.logoDesign,
            callback_data: kb.design1.logoDesign
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
        }], [{
            text: kb.soft.crm,
            callback_data: kb.soft.crm
        }]
    ],

    // ============= order =======================

    order: [
        [{
            text: kb.softProduct,
            callback_data: kb.softProduct
        }],
        [{
            text: kb.marketing,
            callback_data: kb.marketing
        }],
        [{
            text: kb.design,
            callback_data: kb.design
        }]
    ],

    softProduct: [
        [{
            text: kb.soft.pcSoft,
            callback_data: kb.soft.pcSoft
        }],
        [{
            text: kb.soft.mobileSoft,
            callback_data: kb.soft.mobileSoft
        }],
        [{
            text: kb.soft.crm,
            callback_data: kb.soft.crm
        }],
        [{
            text: kb.WebSite.landingPage,
            callback_data: kb.soft.crm
        }],
        [{
            text: kb.WebSite.corporative,
            callback_data: kb.soft.crm
        }],
        [{
            text: kb.WebSite.eMarket,
            callback_data: kb.soft.crm
        }],
        [{
            text: kb.backOrder,
            callback_data: kb.backOrder
        }]
    ],

    marketingOrder: [
        [{
            text: kb.marketing1.seo,
            callback_data: kb.marketing1.seo
        }],
        [{
            text: kb.marketing1.smm,
            callback_data: kb.marketing1.smm
        }], [{
            text: kb.marketing1.smsMarketing,
            callback_data: kb.marketing1.smsMarketing
        }],
        [{
            text: kb.backOrder,
            callback_data: kb.backOrder
        }]
    ],
    designOrder: [
        [{
            text: kb.design1.logoDesign,
            callback_data: kb.design1.logoDesign
        }],
        [{
            text: kb.design1.ux,
            callback_data: kb.design1.ux
        }],
        [{
            text: kb.design1.graphDesign,
            callback_data: kb.design1.graphDesign
        }],
        [{
            text: kb.backOrder,
            callback_data: kb.backOrder
        }]
    ]
}