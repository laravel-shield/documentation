---
title: Box
---

<packagist repo="laravel-shield/box"></packagist>

### Installation

```bash
composer require laravel-shield/box
```

### Usage

After installing add the following configuration to your `config/shield.php` file:

````php
'services' => [
    'box' => [
        'driver' => \Shield\Box\Box::class,
        'options' => [
            'primary' => 'your-primary-token',
            'secondary' => 'your-secondary-token',
        ]
    ]
]
````

You can now add the middleware to your routes like so:

````php
Route::middleware('shield:box')->post('/hooks/box', 'HooksController@box');
````