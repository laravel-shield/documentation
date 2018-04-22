---
title: Stripe
---

<packagist repo="laravel-shield/stripe"></packagist>

### Installation

```bash
composer require laravel-shield/stripe
```

### Usage

After installing add the following configuration to your `config/shield.php` file:

````php
'services' => [
    'stripe' => [
        'driver' => \Shield\Stripe\Stripe::class,
        'options' => [
            'secret' => 'your-webhook-token',
            'tolerance' => 300 // in seconds, you can remove this line to use stripes default.
        ]
    ]
]
````

You can now add the middleware to your routes like so:

````php
Route::middleware('shield:stripe')->post('/hooks/stripe', 'HooksController@stripe');
````