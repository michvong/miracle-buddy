module.exports = function override(config) { 
    config.externals = {
        ...config.externals,
        express: {
            commonjs: 'express'
        }
    };

    return config;
}
