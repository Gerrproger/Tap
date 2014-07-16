Tap
===

Execute code on the element tap!

You need [jQuery](http://jquery.com/) to use this!

## Usage
You can start listening for the 'tap' event like this:
```javascript
$(function(){
  $('#someBlock').tap(function(){ doSomething(); });
});
```
To unsubscribe from all tap events on the block use the 'off' parameter:
```javascript
$(function(){
  $('#someBlock').tap('off');
});
```

### Options
You can also set two options for the plugin:

**delay** *(default: 200)*<br/>
Allowable value in milliseconds between the 'touchstart' and 'touchend' events to call your function

**offset** *(default: 4)*<br/>
Allowable offset in pixels between the 'touchstart' and 'touchend' positions to call your function
```javascript
$(function(){
  $('#someBlock').tap(function(){ console.log('Tapped', this); }, {delay: 1000, offset: 10});
});
```
