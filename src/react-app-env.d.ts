/// <reference types="react-scripts" />
declare module '*.module.less' {
  const classes: {
    readonly [key: string]: string
  }
  export default classes
  declare module '*.less'
}

declare module 'styled-components'
declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_BASE_URL: string
  }
}
