import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import external from 'rollup-plugin-peer-deps-external'
import dts from 'rollup-plugin-dts'

const packageDir = path.join(__dirname, 'packages')

const reactPackageDir = path.join(packageDir, 'react')
const reactPackageJSON = require(path.join(reactPackageDir, 'package.json'))
const systemPackageDir = path.join(packageDir, 'system')
const systemPackageJSON = require(path.join(systemPackageDir, 'package.json'))

const isDev = process.env.NODE_ENV === 'development'

const reactConfig = {
  input: path.join(reactPackageDir, 'src/index.ts'),
  output: [
    {
      file: path.join(reactPackageDir, reactPackageJSON.main),
      format: 'cjs',
      sourcemap: true,
      name: 'react-lib'
    },
    {
      file: path.join(reactPackageDir, reactPackageJSON.module),
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: path.join(reactPackageDir, 'tsconfig.json') }),
    !isDev && terser()
  ].filter(Boolean)
}

const systemConfig = {
  input: path.join(systemPackageDir, 'src/index.ts'),
  output: [
    {
      file: path.join(systemPackageDir, systemPackageJSON.main),
      format: 'cjs',
      sourcemap: true,
      name: 'react-lib'
    },
    {
      file: path.join(systemPackageDir, systemPackageJSON.module),
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: path.join(systemPackageDir, 'tsconfig.json') }),
    !isDev && terser()
  ].filter(Boolean)
}

const reactConfigTS = {
  input: path.join(reactPackageDir, 'dist/esm/types/index.d.ts'),
  output: [
    { file: path.join(reactPackageDir, 'dist/index.d.ts'), format: 'esm' }
  ],
  external: [/\.css$/],
  plugins: [dts()]
}

const systemConfigTS = {
  input: path.join(systemPackageDir, 'dist/esm/types/index.d.ts'),
  output: [
    { file: path.join(systemPackageDir, 'dist/index.d.ts'), format: 'esm' }
  ],
  external: [/\.css$/],
  plugins: [dts()]
}

export default [reactConfig, reactConfigTS, systemConfig, systemConfigTS]
