# Get From ISO

```js
function getIsoDate( str ){ str.match(/\w{4}-\w{2}-\w{2}/)[0]; };
function getIsoYear( str ){ str.match(/^\w{4}/)[0]; };
function getIsoMonth( str ){ str.match(/\w{2}(?=-\w{2}T)/)[0]; };
function getIsoDay( str ){ str.match(/\w{2}(?=T)/)[0]; };
function getIsoTime( str ){ str.match(/\w{2}:\w{2}:\w{2}/)[0]; };
function getIsoHour( str ){ str.match(/\w{2}(?=:)/)[0]; };
function getIsoMinute( str ){ str.match(/\w{2}(?=:\w{2}\.)/)[0]; };
function getIsoSecond( str ){ str.match(/\w{2}(?=\.)/)[0]; };
```
