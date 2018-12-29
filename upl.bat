ssh root@139.224.14.23 rm -rf /var/www/build/*
scp -r build/* root@139.224.14.23:/var/www/build
@pause