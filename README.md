# rsbuild-jest

Reproduction for issue [#4132](https://github.com/web-infra-dev/rsbuild/issues/4132).

To reproduce:

- `pnpm install`
- `pnpm test`

Error:

`TypeError: The argument 'filename' must be a file URL object, file URL string, or absolute path string. Received 'http://localhost/main.js'`

## Solution

This issue was due to `testEnvironment: "jsdom"`. Removing it fix the issue.


