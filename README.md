# Silvermine Chai Strictly Equal Plugin

[![Build Status][github-actions-badge]][github-actions-url]
[![Coverage Status][coverage-badge]][coveralls-url]

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

```js
var chai = require('chai');

chai.use(require('@silvermine/chai-strictly-equal'));
```

Or, if you are using TypeScript:

```typescript
import chai from 'chai';
import enableStrictlyEqual from '@silvermine/chai-strictly-equal';

chai.use(enableStrictlyEqual);
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
[github-actions-badge]: https://github.com/silvermine/chai-strictly-equal/actions/workflows/ci.yml/badge.svg?branch=master
[github-actions-url]: https://github.com/silvermine/chai-strictly-equal/actions/workflows/ci.yml
[coverage-badge]: https://coveralls.io/repos/github/silvermine/chai-strictly-equal/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/silvermine/chai-strictly-equal?branch=master
