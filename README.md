# Documentation

## Responsive

- Media queries were used to set responsive design.

- We only use a basic responsive screen.

- Supports tablets screen size and over, so over 728 pixel of width screen we change our layout.

- Origami components were added and they support responsive too.

### Mobile layout 

Lateral espaces were added beetwen body content and screen extremes, to get a result like this: 


```| <--> | BODY | <-------> |```


### CSS code
```css

// see style.css file

@media screen and (min-width: 768px) {}
```

Mobile version

### Mobile screen
![mobile version](./images/mobile-screen.png)

### Table - Desktop +
![mobile version](./images/desktop-screen.png)

## Accesibility

- To test our acessibility we use Chrome audit dev tools. This a first way to test.
- Semantic tags were used and lang attribute lang.
  ```html
  <article>, <header>, <title>
  ```

- Keyboard navigation works pretty well.

### Chrome audit results:


![audit-access](images/audit-accessibility.png)



## Imp


Paragraphs splitted 
Footer stick bottom


## Acces

Semantic - article tag
time

Add some HTML tags properties - like title and lang see commit:
`71099397c16be383998cafeb28408eb3288be4c4`



## Performance

Improve load static file 

```html
<link rel="stylesheet" onload="this.media='all'" />
```

Remove some unused files
