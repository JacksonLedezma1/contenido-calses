## Install NVM

`sudo apt-get update`<br>
`sudo apt install curl`<br>
`or if you prefer wget`<br>
`sudo apt install wget`<br>

    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
    # or using wget
    # wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

## Check install

    source ~/.bashrc
    # or source ~/.zshrc if you are using zsh

## Install Node

`nvm install <versión>`
or
`nvm install --lts`<br>
`nvm use <versión>`<br>

# Install TypeScript

`npm install -g typescript`<br>

# Use in your project

`tsc --init`<br>
`yarn add -D @types/node` or `npm install --save-dev @types/node`
<br>

#### Agregar para ejecutar

`yarn add -D ts-node ts-node-dev typescript`
`"scripts": {
   "dev": "ts-node-dev --respawn --transpile-only index.ts"
}`

### Para compilar TS a JS solo hay que oprimir el comando `> tsc`

Reto de Tipos Avanzados en TypeScript
Título: Motor de Reglas de Validación en Tipos
Enunciado

Tu reto consiste en construir un sistema de validación estática únicamente con tipos de TypeScript. No puedes usar funciones ejecutables de JavaScript/TypeScript, ni enums, ni generics, ni map types.

El objetivo es que, dado un objeto y un conjunto de reglas declaradas como tipos literales, el sistema pueda decidir si el objeto es "VALIDO" o "INVALIDO" — únicamente a nivel de tipos.

Requisitos

Reglas básicas:

"string_no_vacio" → El campo debe ser un string distinto de "".

"mayor_18" → El campo debe ser un number estrictamente mayor que 18.

"boolean_true" → El campo debe ser true.

Combinadores de reglas:

AND → Todas las reglas deben cumplirse.

OR → Al menos una regla debe cumplirse.

NOT → La regla debe no cumplirse.
