hexo.config.nutuml = {
  enable: true,
  version: '1.1.2',
  ...hexo.config.nutuml
    }
hexo.extend.filter.register('before_post_render', require('./lib/render'), 9);