# parcel-issue-min-repo

This repo demonstrates an issue with Parcel bundler where Babel doesn’t compile a third-party module, [`micromodal`](https://www.npmjs.com/package/micromodal) (which unfortunately exports ES2015+ code).


## Expection

Because the module meets the following criteria:
- module directory is symlinked into `node_modules` (by way of Yarn Workspaces)
- module `package.json` has a `source` field set

It is expected that the module would be compiled by Babel.

As of Parcel 1.12.3, it does not.

This contrasts with the expectations set in the [Parcel Docs: Transforming Third-Party Modules](https://parceljs.org/transforms.html#third-party-modules).

## Example Structure

This repo has two Yarn Workspace packages:

- the main app `@test/front-end` (`./front-end/`)
- the wrapped dependency `@test/uncompiled-dependencies` (`./uncompiled-dependencies/`)

`@test/front-end` depends on `MicroModal`, which is imported/destructured from `@test/uncompiled-dependencies`.

In either package, `browserslist` and `babel` are set in `package.json`