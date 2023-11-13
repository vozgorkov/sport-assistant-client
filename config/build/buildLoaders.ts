import { ModuleOptions } from "webpack";

export function buildLoaders(): ModuleOptions['rules'] {
  return [
    {
      test: /\.(tsx|ts)?$/,
      exclude: /node_modules/,
      loader: 'ts-loader',
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader', // for styles
      ],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
  ]
}
