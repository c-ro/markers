# Markers 

Markers is a node module that helps you programmatically generate markdown.

# Usage:

1. Download markers.js and place it in your app's directory.
2. Then, require in your node script:
```javascript
var mrk = require(./markers.js);
```
3. Now start telling your script what to do:

Make page breaks and horizontal rules:
```javascript
mrk.br();
mrk.hr();
```
Want that text of yours bold, huh?
```javascript
mrk.bold("Homecity BeisbolCats");
```
Show us your links:
```javascript
// just throw in a URL
mrk.link("http://www.carl.com");
// make hyperlinked text
mrk.link("Hyperlink!", "http://www.hyperlink.com");
// link a twitter username
mrk.link("gnirtsmodnar", "@");
// link a twitter hashtag
mrk.link("JavaScript", "#");
// link a subreddit
mrk.link("ncisfanclub", "reddit");
// link a reddit user profile
mrk.link("cherrypicker", "redditor");
```
Make an unordered list by default:
```javascript
mrk.makeList(["one", "two", "three"]);
```

Supply the "ol" parameter to create and ordered list
```javascript
mrk.makeList(["this", "that", "th'other"], "ol");
```
A section is a page break, followed by content, followed by a horizontal rule, do it like this:
```javascript
mrk.section(makeHeader());
mrk.section("string");
```
or this:
```javascript
mrk.section(functionThatReturnsString());
```

More to come. . .