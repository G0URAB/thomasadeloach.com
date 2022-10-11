FROM php:8.1-fpm

RUN apt update \
    && apt install -y zlib1g-dev g++ git libicu-dev zip libzip-dev zip \
    && docker-php-ext-install intl opcache pdo pdo_mysql \
    && pecl install apcu \
    && docker-php-ext-enable apcu \
    && docker-php-ext-configure zip \
    && docker-php-ext-install zip \
    && apt remove nodejs \
    && rm -rf /usr/local/bin/node* \
    && rm -rf /usr/local/bin/npm* \
    && rm -rf /etc/apt/sources.list.d/nodesource.list


WORKDIR /var/www/symfony_docker

RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt install nodejs

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

COPY ./symfony-cli_5.4.15_amd64.deb .
RUN dpkg -i symfony-cli_5.4.15_amd64.deb

CMD ["symfony", "server:start"]