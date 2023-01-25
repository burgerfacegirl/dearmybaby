# Project Settings

## Vite

```
npm create vite@latest my-vue-app -- --template react
```

## ESLint & Prettier

https://cathalmacdonnacha.com/setting-up-eslint-prettier-in-vitejs

### _require() of ES Module not supported_

.eslintrc.js와 .prettierrc.js 설정 파일을 .eslintrc.json와 .prettierrc 형식으로 변경

### _error 'document' is not defined no-undef_

.eslintrc.json 설정 파일에 다음을 추가

```json
{
  "env": {
    "browser": true
  }
}
```

https://stackoverflow.com/questions/42377038/error-document-is-not-defined-eslint-react

### _'React' must be in scope when using JSX react/react-in-jsx-scope_

.eslintrc.json 설정 파일에 다음을 추가

```json
{
  "extends": ["plugin:react/jsx-runtime"]
}
```

https://stackoverflow.com/questions/64646248/eslintrc-js-for-react-17-and-jsx-without-import-react
