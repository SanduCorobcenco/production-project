import { type BuildOptions } from './types/config'
import type webpack from 'webpack'
import { buildCssLoader } from './loaders/buildCssLoaders'

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader =
    {
      test: /\.svg$/,
      use: ['@svgr/webpack']
    }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }
  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env',
          '@babel/preset-react', '@babel/preset-typescript'],
        plugins: [
          ['i18next-extract', { keyAsDefaultValue: true }]
        ]

      }
    }
  }
  const cssLoader = buildCssLoader(isDev)

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    cssLoader

  ]
}
