# webpack config

## [Webpack Document](https://webpack.js.org/) / [Config detailed explanation] (https://www.wisdomgeek.com/development/web-development/javascript/using-webpack-dev-server/)

## Mode

Development mode & production mode vice versa

```
- builds very fast
- is less optimized than production
- does not remove comments
- provides more detailed error messages and suggestions
- provides a better debugging experience
```

## Path.resolve vs path.join

path.resolve() from left to right

concatenate the right most parameters with / directly with the root path to make an absolute path
and then concatenates anything without / as a directory

```
path.resolve('/a', 'b', 'c');     returns    C:\a\b\c
path.resolve('/a', '/b', 'c');    returns    C:\b\c
path.resolve('/a', '/b', '/c');   returns    C:\c
```

While using join() simply concatenates every parameter from left to right whether they have / or not

```
path.join("/a", "b", "/c", "d")   simply returns   "\a\b\c\d"
```
