Yii 2 Advanced REST API TEMPLATE
================================

REST API implementation using Yii2 advanced framework.

Documentation is at [docs/guide/README.md](docs/guide/README.md).

[![Latest Stable Version](https://poser.pugx.org/yii2codes/yii2-advanced-api/v/stable.png)](https://packagist.org/packages/yii2codes/yii2-advanced-api)
[![Total Downloads](https://poser.pugx.org/yii2codes/yii2-advanced-api/downloads.png)](https://packagist.org/packages/yii2codes/yii2-advanced-api)
[![Build Status](https://travis-ci.org/yii2codes/yii2-advanced-api.svg?branch=master)](https://travis-ci.org/yii2codes/yii2-advanced-api)

DIRECTORY STRUCTURE
-------------------

```
api
    config/              contains shared configurations
    mail/                contains view files for e-mails
    models/              contains model classes used in both backend and frontend
    modules/             contains modules
common
    config/              contains shared configurations
    mail/                contains view files for e-mails
    models/              contains model classes used in both backend and frontend
console
    config/              contains console configurations
    controllers/         contains console controllers (commands)
    migrations/          contains database migrations
    models/              contains console-specific model classes
    runtime/             contains files generated during runtime
backend
    assets/              contains application assets such as JavaScript and CSS
    config/              contains backend configurations
    controllers/         contains Web controller classes
    models/              contains backend-specific model classes
    runtime/             contains files generated during runtime
    views/               contains view files for the Web application
    web/                 contains the entry script and Web resources
frontend
    assets/              contains application assets such as JavaScript and CSS
    config/              contains frontend configurations
    controllers/         contains Web controller classes
    models/              contains frontend-specific model classes
    runtime/             contains files generated during runtime
    views/               contains view files for the Web application
    web/                 contains the entry script and Web resources
    widgets/             contains frontend widgets
vendor/                  contains dependent 3rd-party packages
environments/            contains environment-based overrides
tests                    contains various tests for the advanced application
    codeception/         contains tests developed with Codeception PHP Testing Framework
public_html
    admin/
    .
    .
    .
```
