const MagicLoginStrategy = require("passport-magic-login")

const magicLogin = new MagicLoginStrategy({
    secret: process.env.MAGIC_LINK_SECRET,
    callbackUrl: "/auth/magiclogin/callback",
    sendMagicLink: async (destination, href) => {
        await sendEmail({
            to: destination,
            body: `Click this link to finish logging in: https://yourcompany.com${href}`,
        })
    },
    verify: (payload, callback) => {
        // Get or create a user with the provided email from the database
        getOrCreateUserWithEmail(payload.destination)
            .then((user) => {
                callback(null, user)
            })
            .catch((err) => {
                callback(err)
            })
    },
})

module.exports = magicLogin
