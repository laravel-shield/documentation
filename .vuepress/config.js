module.exports = {
    title: 'Laravel Shield',
    description: 'A middleware to protect against unverified webhooks from 3rd party services.',
    themeConfig: {
        search: false,
        nav: [
            {text: 'Twitter', link: 'https://twitter.com/LaravelShield'},
            {text: 'GitHub', link: 'https://github.com/laravel-shield'},
            {text: 'TravisCI', link: 'https://travis-ci.org/laravel-shield'},
        ],
        sidebar: [
            ['/', 'Home'],
            ['/getting-started/', 'Getting Started'],
            {
                title: 'Services',
                collapsable: false,
                children: [
                    'services/stripe',
                    'services/bitbucket-server',
                    'services/box',
                    'services/github',
                ].sort()
            }
        ]
    },

};