# Backend Test
## Packages

- [Sequelize](https://sequelize.org/master/)
- [SQLite3](https://www.npmjs.com/package/sqlite3)
- [CsvParser](https://www.npmjs.com/package/csv-parser)
- [Joi](https://github.com/hapijs/joi)
- [winston](https://github.com/winstonjs/winston)
- [morgan](https://github.com/expressjs/morgan)
- [Jest](https://jestjs.io)
- [dotenv](https://github.com/motdotla/dotenv)
- [cross-env](https://github.com/kentcdodds/cross-env#readme)
- [cors](https://github.com/expressjs/cors)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [EditorConfig](https://editorconfig.org)

## How to Run (Create database with models and migrations)
```bash
npx sequelize-cli db:migrate
```
## Commands

Local:

```bash
npm run start:dev
```

Production:

```bash
npm run start:prod
```

Testing:

```bash
npm run test
```

Linting:

```bash
# run ESLint
npm run lint

# fix ESLint errors
npm run lint:fix

# run prettier
npm run prettier

# fix prettier errors
npm run prettier:fix
```

## Structure

```
 config\         # Configurations
 controllers\    # Controllers
 middlewares\    # Middlewares
 migrations\     # Migrations
 db\     				 # Local Sqlite3 Database
 public\				 # Directory to load files
 models\         # Models
 routes\         # Routes
 services\       # Business logic
 utils\          # Utils
 validations\    # Validators
 server.js
```