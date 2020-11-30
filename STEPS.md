    $ sudo mkdir -p /storage/docker/sqlnode/postgresql-data

    $ docker run --name docker-sqlnode -e POSTGRES_PASSWORD=docker -p 5432:5432 -v /storage/docker/sqlnode/postgresql-data:/var/lib/postgresql/data -d postgres

Create a .sequelizerc file and set up configuration (src/config/database.js)

Create database:

    $ yarn sequelize db:create

Create migration:

    $ yarn sequelize migration:create --name=create-users

Run migrations:

    $ yarn sequelize db:migrate

Tip - Rollback locally last migration run:

    $ yarn sequelize db:migrate:undo
