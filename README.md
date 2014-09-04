# Kiss XML

\see tests.

## parse XML

```js
var kiss = require("kiss-xml");
kiss.parse(xmlStr);
```

## serialize JSON

```js
var kiss = require("kiss-xml");
kiss.parse(jsonObj);
```

## Formatting

This what you get from `parse` and what you have to give to `serialize`.

### XML Node

```json
{
  "name": "nodeName",
  "attrs": {
    "foo": "bar"
  },
  "children": []
}
```

With text value:
```json
{
  "name": "nodeName",
  "children": ["lorem ipsum"]
}
```

### Comment

```json
{
  "comment": "lorem ipsum"
}
```

### CData

```json
{
  cdata : "foo"
}
```


## Test

    mocha test/kiss-xml-test.js