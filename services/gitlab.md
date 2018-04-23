---
title: GitLab
---

<packagist repo="laravel-shield/gitlab"></packagist>

### Installation

```bash
composer require laravel-shield/gitlab
```

### Usage
After installing add the following configuration to your `config/shield.php` file:

````php
'services' => [
    'gitlab' => [
        'driver' => \Shield\GitLab\GitLab::class,
        'options' => [
            'token' => 'your-webhook-token'
        ]
    ]
]
````

You can now add the middleware to your routes like so:

````php
Route::middleware('shield:gitlab')->post('/hooks/gitlab', 'HooksController@gitlab');
````
