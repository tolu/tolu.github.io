System.config({
  "paths": {
    "*": "*.js",
    "tolu.github.io/*": "lib/*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "markdown-component": "github:guybedford/markdown-component@0.1.0",
    "github:guybedford/markdown-component@0.1.0": {
      "css": "github:systemjs/plugin-css@0.1.0",
      "prism": "github:LeaVerou/prism@gh-pages",
      "showdown": "github:showdownjs/showdown@0.3.4"
    }
  }
});

