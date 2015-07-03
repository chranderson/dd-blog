# Bloggy Blog Blog

### Post Types
* Tutorials & How To's  
* Guest Authors
* Developer Interview / Workflow  
* Best of Lists  
* Inspirations  
* Local Denver Focused  
* Resources, Check List, Cheat Sheets  
* Podcast & Videos  
* Infographics  


### Technologies We'll Use
* [React](http://facebook.github.io/react/)  
* [Browserify](http://browserify.org/)  
* [Express](http://expressjs.com/)
* [Config](https://www.npmjs.com/package/config) 
* [Gulp](http://gulpjs.com/)
* [Segment.io - Analytics.js](https://segment.com/docs/libraries/analytics.js/)
* [Firebase](https://firebase.io)

### Features
* Filters
* Search
* Code blocks - styled like black text editor
* Comments - [Disqus](https://disqus.com/)
* Post Lists based on relevance
* Recommended Posts - based on past read articles/tutorials
* Alert for outdated information - maybe a button user can press
* Lazy Loading
* RSS / JSON feed
* Standard blog features
* Email List - receive email when new tutorial / post with selected tags is published

### Blog Post Object Properties
* Title
* Meta Description
* Date published / edited
* Tags _4 or more_
* Author (object with properties)
  * Name
  * Link
  * Avatar
  * Bio
* Comments
* Body - _in markdown_
* StarsCount
* ViewCount

***

### Home Page Wireframe w/ Components
![home wireframe](https://slack-files.com/files-pub/T03F32A3C-F076FCDL4-86984e7a26/blog-home-wireframe.png)

***

### Components List & Hierarchy 
![Components List](https://slack-files.com/files-pub/T03F32A3C-F076F8RMG-65d3c8633f/blog-home-component-list.png)

***

# Isomorphic blog

This is an example of simple isomorphic javascript application. The app is a blog who serves markdown articles.
### Techs

+ [Browserify](http://browserify.org/)
+ [Express](http://expressjs.com/)
+ [es6-promise](https://github.com/jakearchibald/es6-promise)
+ [Flux](https://facebook.github.io/flux/)
+ [React](http://facebook.github.io/react/)
+ [React-router](https://github.com/rackt/react-router)

### Compile

To build the client application run:
```
browserify src/browser.js -o public/build.js
```

To start the server:
```
node index.js
```

### Package.json

To understand how server modules are override in client build, watch the ```browser``` field in package.json. [And read here](https://github.com/substack/browserify-handbook#browser-field).

### Articles
In ```articles/``` folder you will find all the markdown files used by the app. The app simply read the content of the folder and compile the file requested. It doesn't use slug or ids, simply the file name.


