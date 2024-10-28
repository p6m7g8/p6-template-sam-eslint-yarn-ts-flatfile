import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    '.github/',
    '.mergify.yml',
    '.pnpm-store/',
    '.vscode/',
    'events/',
    'package.json',
    'samconfig.toml',
    'template.yaml',
    'tsconfig.json',
  ],
  plugins: {
  },
  languageOptions: {
  },
  rules: {
  },
  settings: {
  },
})
