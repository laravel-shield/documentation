---
title: Shopify
---

<packagist repo="laravel-shield/shopify"></packagist>

### Installation

```bash
composer require laravel-shield/shopify
```

### Usage

After installing add the following configuration to your `config/shield.php` file:

````php
'services' => [
    'shopify' => [
        'driver' => \Shield\Shopify\Shopify::class,
        'options' => [
            'token' => 'your-webhook-token',
        ]
    ]
]
````

You can now add the middleware to your routes like so:

````php
Route::middleware('shield:shopify')->post('/hooks/shopify', 'HooksController@shpoify');
````
