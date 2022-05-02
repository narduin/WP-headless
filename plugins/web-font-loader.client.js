import WebFont from "webfontloader"

// See webfontloader docs here: https://github.com/typekit/webfontloader#modules
WebFont.load({
    custom: {
        families: ["My Font"],
    },
    active: function () {
        window.dispatchEvent(new CustomEvent("font-loaded"))
    },
})
