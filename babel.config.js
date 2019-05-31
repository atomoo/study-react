/**
 * @file config for babel
 * @author atom
 */

module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'entry',
                corejs: '2',
                modules: false,
                targets: {
                    browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9'
                    ]
                }
            }
        ],
        '@babel/preset-typescript',
        '@babel/preset-react'
    ],
    plugins: [
        'react-hot-loader/babel',
        '@babel/plugin-syntax-dynamic-import',
        [
            '@babel/plugin-transform-runtime',
            {
                absoluteRuntime: false,
                corejs: false,
                helpers: true,
                regenerator: true,
                useESModules: false
            }
        ]
    ]
};
