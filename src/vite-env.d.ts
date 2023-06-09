/// <reference types="vite/client" />
declare module "*.png"
declare module "*.jpeg"
declare module "*.jpg"
declare module "*.pdf"
declare module "*.avif"

declare namespace NodeJS {
  interface ProcessEnv {
    //types of envs
    NODE_ENV: "development" | "production" | "test"
    PUBLIC_URL: string
  }
}
