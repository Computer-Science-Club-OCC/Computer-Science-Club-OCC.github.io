const MagicLoginStrategy = require("passport-magic-login")

const magicLogin = new MagicLoginStrategy({
    secret: process.env.MAGIC_LINK_SECRET,
    callbackUrl: "/auth/login/callback",
    sendMagicLink: async (destination, href) => {
        await sendEmail({
            to: destination,
            body: `Click this link to finish logging in: ${href}`,
        })
    },
    verify: (payload, callback) => {
        getOrCreateUserWithEmail(payload.destination)
            .then((user) => {
                callback(null, user)
            })
            .catch((err) => {
                callback(err)
            })
    },
    jwtOptions: {
        expiresIn: "15 minutes",
    },
})

module.exports = magicLogin
