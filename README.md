# hexo-filter-nutuml-diagrams
Generation of sequence diagrams and mindmap from text in a similar manner as markdown.
Nutuml plugin is using [nutuml.js](https://nutuml.com/) for hexo!

### Sequence diagram

```
Tom -> Jerry : Hi
Jerry --> Tom : Hello
```
### MindMap

```
# Food
## Bread
## Fruit
## Pasta
```

## Step1 Install Package
```bash
$ yarn add hexo-filter-nutuml-diagrams
```
> In your blog floder, not hexo floder

## Step2 Config

After installed, you should edit hexo config file: `_config.yml`:
```yaml
nutuml: 
  enable: true  # default true
  version: "1.1.2" # default v1.1.2
```

## Step3 include nutuml.js in pug or ejs
After edited `_config.yml`, you shou edit your blog page component like `after_footer.pug` , `after-footer.ejs` or `swig`.

Where is it?

Open your theme folder, you can see the `layout` folder, open it and then you could see it.

Okey! if your blog is used pug, you can copy the below codes in `after_footer.pug`:

```pug
if config.nutuml.enable == true
  script(type='text/javascript', id='nut-script' src='https://unpkg.com/nutuml@'+ config.nutuml.version + '/dist/nutuml.min.js' + '?v=' + theme.version)
  script.
    if (nutuml) {
      nutuml.init();
    }
```

`after-footer.ejs` should copy below codes:
```
<% if (config.nutuml.enable) { %>
  <script src='https://unpkg.com/nutuml@<%= config.nutuml.version %>/dist/nutuml.min.js'></script>
  <script>
    if (nutuml) {
      nutuml.init();
    }
  </script>
<% } %>
```

swig template engine:
```swig
{% if config.nutuml.enable %}
  <script src='https://unpkg.com/nutuml@{{ config.nutuml.version }}/dist/nutuml.min.js'></script>
  <script>
    if (nutuml) {
      nutuml.init();
    }
  </script>
{% endif %}
```

## Fixed
- className 'nutuml' can be showed nutuml diagrams everywhere
- Keep dom right;

## Credits
Thanks to the [Nutuml](https://nutuml.com/) project!
