import { Configuration } from 'webpack';

export function buildResolvers(): Configuration['resolve'] {
  return {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  }
}
