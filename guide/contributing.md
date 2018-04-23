---
title: Contributing
---

# Contributing

Hey, thanks for considering contributing to Laravel Shield, to include a new shield driver you should do the following:

1. [Open an issue](https://github.com/laravel-shield/internals/issues/new?title=%5BNew+Driver%5D) on the internals repository with [New Driver] in the title. It would also be useful to comment with the service documentation on how to verify webhooks.

2. I will create a new repository and give you write access.

3. Contribute your code.
    * Should be under the `Shield` namespace.
    * Should preferably be licenses under the MIT license.
    * Using PSR2 would be nice but not enforced.
    * Should be unit tested. Pull in `laravel-shield/testing` for an easy setup. ([see the tests for stripe](https://github.com/laravel-shield/stripe/tree/master/tests) as an example).
    
4. [Open an issue](https://github.com/laravel-shield/internals/issues/new?title=%5BSubmit+Driver%5D) on the internals repository with [Submit Driver] in the title.

5. I will then add the package to packagist, travisci etc.

6. Add a Pull Request to the [docs](https://github.com/laravel-shield/documentation) with details on your package.