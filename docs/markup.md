# Markup documentation

## Markup structure

- header.header
  - h1.header\_\_devfinder
  - div.header\_\_theme
    - a.header\_\_theme-a
      - h4.header\_\_theme-current
    - button.header\_\_theme-button
      - img.header\_\_theme-icon
- main
  - div.search-bar
    - img.search-bar\_\_icon
    - input.search-bar\_\_input
    - button.search-bar\_\_button
  - div.result
    - div.result\_\_profile
      - img.result\_\_avatar
      - div.result\_\_profile-details
        - h1.result\_\_name
        - a.result\_\_login
        - p.result\_\_joined
        - p.result\_\_bio result\_\_bio--large
    - p.result\_\_bio result\_\_bio--small
    - ul.result\_\_stats
      - li.result\_\_stats-item
        - p.result\_\_stats-label
        - p.result\_\_stat result\_\_stat--repos
      - li.result\_\_stats-item
        - p.result\_\_stats-label
        - p.result\_\_stat result\_\_stat--followers
      - li.result\_\_stats-item
        - p.result\_\_stats-label
        - p.result\_\_stat result\_\_stat--following
    - ul.result\_\_links
      - li.result\_\_links-item
        - img.result\_\_links-icon result\_\_links-icon--location
        - a.result\_\_links-value result\_\_links-value--location
      - li.result\_\_links-item
        - img.result\_\_links-icon result\_\_links-icon--blog
        - a.result\_\_links-value result\_\_links-value--blog
      - li.result\_\_links-item
        - img.result\_\_links-icon result\_\_links-icon--twitter
        - a.result\_\_links-value result\_\_links-value--twitter
      - li.result\_\_links-item
        - img.result\_\_links-icon result\_\_links-icon--company
        - a.result\_\_links-value result\_\_links-value--company

## Imports

```
<link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="./images/favicon-32x32.png"
  />
<link rel="stylesheet" href="css/main.min.css" />
<script type="module" src="js/app.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
<script src="js/vendor/particles.min.js"></script>
<script src="js/visuals.js" defer></script>
```
