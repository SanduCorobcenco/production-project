import webpack, { RuleSetRule } from 'webpack'
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoaders';

export default ({config}: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..','..','src'),
    }

    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push('.ts', '.tsx')
  // eslint-disable-next-Line no-param-reassign
  if (config.module?.rules) {
    config.module.rules = config.module?.rules?.map((rule: webpack.RuleSetRule | "...") => {
    if (rule !== "..." && /svg/.test(rule.test as string)) {
    return { ...rule, exclude: /\.svg$/i };
    }
    
    return rule;
    });
    }

    config.module?.rules?.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
        });


        
    config.module?.rules?.push(buildCssLoader(true))
    return config;
}