# Usage

## Scripts

* Running

  ```
  npm start
  ```

* Deploy

  ```
  npm run deploy
  ```

* Linting

  ```
  npm run lint:fix
  ```

## Content

Content added to `src/data/` folder

* `posts/` — regular articles
* `pages/` — static pages with useful content for articles
* `service-pages/` — static pages content, like for `/about`
* `meta/` — JSON-files for loading data to components

Posts & pages must contain date in url. It used for sorting & showed in posts.

Static assets added to `static/assets/`, for example, images, svg libraries or demos

Live demos added to `static/assets/demo/` to folders named after articles

### Including content to post/page

```
customCSS: 'colors-table.css'
customJs: "pixel-glass/script.js"
include: ./static/assets/img/svg/bubble.svg
```

```
<iframe class="live-snippet" style="height: 350px" src="../assets/demo/flexbox/demo_1.html?output"></iframe>
```

## Engine

Build on [Gatsby](https://www.gatsbyjs.org/) with React & GraphQL

Loading React scripts is disabled by plugin [read more](https://henrique.codes/speed-up-gatsby-site/). Comments & tags are handled using external script from static/assets/js
