# HOW TO DEPLOY DO HEROKU

1) heroku login
2) heroku container:login
3) heroku create [project-name]
4) docker build -t registry.heroku.com/[project-name]/web .
5) docker push registry.heroku.com/[project-name]/web
6) heroku container:release web -a [project-name]
7) heroku open -a [project-name] or manually visit 'https://[project-name].herokuapp.com/customers' in your browser.
