# Backend Test

## Packages

- [Sequelize](https://sequelize.org/master/)
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

## Commands

Local:

```bash
npm run start:dev
```

Producción:

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
 models\         # Models
 routes\         # Routes
 services\       # Business logic
 utils\          # Utils
 validations\    # Validators
 server.js
```