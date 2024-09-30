// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  compilerOptions: {
    paths: {
      'react': ['./node_modules/@types/react']
    }
  }
}

module.exports = nextConfig