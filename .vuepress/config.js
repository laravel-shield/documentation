module.exports = {
    title: 'Laravel Shield',
    description: 'A middleware to protect against unverified webhooks from 3rd party services.',
    themeConfig: {
        search: true,
        nav: [
            {text: 'Twitter', link: 'https://twitter.com/LaravelShield'},
            {text: 'GitHub', link: 'https://github.com/laravel-shield'},
            {text: 'TravisCI', link: 'https://travis-ci.org/laravel-shield'},
        ],
        sidebar: [
            ['/', 'Home'],
            ['guide/getting-started', 'Getting Started'],
            ['guide/contributing', 'Contributing'],
            {
                title: 'Services',
                collapsable: false,
                children: [
                    'services/bitbucket-server',
                    'services/box',
                    'services/braintree',
                    'services/facebook-messenger',
                    'services/github',
                    'services/gitlab',
                    'services/mailgun',
                    'services/shopify',
                    'services/stripe',
                    'services/zapier',
                ].sort()
            }
        ]
    },

};