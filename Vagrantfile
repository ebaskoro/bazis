# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

  config.vm.box = "debian/jessie64"

  config.vm.hostname = "dev-bazis"

  config.vm.network "forwarded_port", guest: 8000, host: 8000

  config.vm.provision "shell", privileged: false, inline: <<-SHELL

    # Install PHP 5
    sudo apt-get install -y php5-cli php5-intl

    # Configure PHP
    echo "date.timezone = Australia/Melbourne" | sudo tee -a /etc/php5/cli/php.ini
    echo "short_open_tag = off" | sudo tee -a /etc/php5/cli/php.ini

    # Install curl
    sudo apt-get install -y curl

    # Install Symfony2
    sudo mkdir -p /usr/local/bin
    sudo curl -LsS https://symfony.com/installer -o /usr/local/bin/symfony
    sudo chmod a+x /usr/local/bin/symfony

  SHELL

end
