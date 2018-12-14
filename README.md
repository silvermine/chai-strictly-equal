# Silvermine Chai Strictly Equal Plugin

[![Build Status](https://travis-ci.org/silvermine/chai-strictly-equal.svg?branch=master)](https://travis-ci.org/silvermine/chai-strictly-equal)
[![Coverage Status](https://coveralls.io/repos/github/silvermine/chai-strictly-equal/badge.svg?branch=master)](https://coveralls.io/github/silvermine/chai-strictly-equal?branch=master)
[![Dependency Status](https://david-dm.org/silvermine/chai-strictly-equal.svg)](https://david-dm.org/silvermine/chai-strictly-equal)
[![Dev Dependency Status](https://david-dm.org/silvermine/chai-strictly-equal/dev-status.svg)](https://david-dm.org/silvermine/chai-strictly-equal#info=devDependencies&view=table)


## What is it?

A plugin for the [Chai Assertion Library](http://chaijs.com) that adds a `.strictlyEqual`
method, and disables the `.equal` method.

### Why?

Because the difference in `.eql` (deep equality) and `.equal` (strict equality) is way too
subtle. Chai provides `.deep` modifier that modifies `.equal` to be a deep equality check
(as if it were `.eql`), further complicating the matter. It would be nice if there were a
`.strictly` modifier so that you could do `.to.strictly.eql(foo)`, but that doesn't exist,
and would be more difficult to add. So, for any Silvermine codebases where we are using
`chai`, we will use this plugin and prohibit the use of `.equal`, replacing it with
`.strictlyEqual` to be more easily readable - especially for developers not familiar with
our codebase.


## How do I use it?

```
var chai = require('chai');

chai.use(require('@silvermine/chai-strictly-equal'));
```

That's all there is to it. Then your `.equal` calls will throw an error, indicating that
you should replace them with `.eql` or `.strictlyEqual`.


## How do I contribute?

We genuinely appreciate external contributions. See [our extensive
documentation][contributing] on how to contribute.


## License

This software is released under the MIT license. See [the license file](LICENSE) for more
details.

[contributing]: https://github.com/silvermine/silvermine-info#contributing
