import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { Configuration } from "webpack";
import { BuildOptions } from './types/types';

export function buildPlugins({ paths }: BuildOptions): Configuration['plugins'] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html, // base html
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/icons', to: 'icons' },
        { from: 'public/manifest.json', to: 'manifest.json' },
      ],
    }),
  ]
}
