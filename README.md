# Documentation


## Demo

Example routes : 

```
article: /content/id? id is optionnal
search results: /search?q=donald%20usa&page=2
```

Article page was builded with simple mocked data (no image), so if you set id in the URL you will always get the same article. See 'Some problems' section of this document to undertand why we mocked the data.

## Stack

- server: nodejs
- templating engine: mustache
- test: ava package
- requests: axios package

## Dev/Debug

- nodemon package restart server after any file change
- debug with --inspect chrome
- Inspect chrome

## Test 

- Only basic tests for utils.js file using ava

[ava github repo](https://github.com/avajs/ava)
 
 Run command:
 ```bash
 npm run test
 ```

 ## App Structure

I structured the App to get MVC structure
- controllers: for the routes and manage data
- models: to the data from thrid party services (FT API)
- views: mustache templates to render html

Create config file to store API token and server properties, 
this could be used for DEV env, for production it's better to setup this params in ENV Variables.



## Responsive

- Media queries were used to set responsive design.

- We only use a basic responsive screen.

- Supports tablets screen size and over, so over 728 pixel of width screen we change our layout.

- Origami components were added and they support responsive too.

### Mobile layout 

Lateral spaces were added beetwen body content and screen extremes, to get a result like this: 

```| <--> | BODY | <-------> |```

Same approch for the Search Form (input) layout.


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
- Semantic tags were used and lang attribute.
  ```html
  <article>, <header>, <title>
  ```

- Keyboard navigation works pretty well.

### Chrome audit results:


![audit-access](images/audit-accessibility.png)

## Pagination

- Basically pagination get the page asked by the user in the url (query param)
- When we get the total articles of results we use our utils function to get the maximum pages that we can get if we display 25 articles by page. 

```javascript
utils.getNumberOfPages(totalArticles, MAX_ARTICLES_BY_PAGE);
```

- We have bloqued the pagination for extrems pages, for the page 1 we don't get show PREVIOUS button and in the last page we don't show NEXT button

- We use origami the buttons

![pagination](./images/pagination.png)

## Origami and FT Style

Components used

- o-grid
- o-typography
- o-header
- o-forms
- o-buttons
- o-editorial-typography
- o-footer
- o-fonts
- o-teaser-collection
- o-teaser
- o-icons

Implemented in header html
```html
 <link rel="stylesheet" href="https://www.ft.com/__origami/service/build/v2/bundles/css?modules=o-grid@^5.0.2,
    o-typography@^6.1.3,o-header@^8.0.2,o-forms@^8.1.13,o-buttons@^6.0.9,o-editorial-typography@^1.0.4,o-footer@^7.0.2,o-fonts@^4.0.2,
    o-teaser-collection@^3.0.1,o-teaser@^4.0.1,o-icons@^6.0.2" onload="this.media='all'"/>
```

## Progressive enhancement

To be honest before this task/test i didn't knew about this practice. 

I will explain my approch/setps of this work.

- First i created content page, create routes, basic html/css
- Again, list search article page with basic html/css
- Add pagination
- Add search forms and manage data request to FT API for the search results
- Add FT style with Origami components and inspecting source code to get some CSS rules.
- Set mobile first to mobile screen
- Adapt CSS (media queries) to tablets/desktop + screens + viewport

## Performance low network (3G)

- Chrome audit was used to improve the performance for slow network

### Settings

![settiing](./images/audit-perf-setting.png)

### Results 

![results](./images/audit-perf.png)


- Improve load static file with async loading (onload)

```html
<link rel="stylesheet" onload="this.media='all'" />
```

- Also remove some unused libraries/files like fontawesome

## Offine

I could not implement this feature. 

I only could see that there are solutions like HTML5 feature and Service workers

## Some problems

- My developer account has not access to /content routes of FT API so i can't get full article information. I mocked the data from a example given in your documentation.

- An article json object has the property 'bodyXML', i could not create paragraphs correctly from that string.

- Footer section is not correctly sticky

## Improvements

This app is a first version many things can be improve, like: search sorting, cover test, create components, refactor controllers etc...

