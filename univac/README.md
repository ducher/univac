# Univac

API and CLI to generate Abstract Syntax Trees (AST) of several well-known programming languages using [antlr4
grammars](https://github.com/antlr/grammars-v4)

## Playground - Demo

[Playground](https://cancerberosgx.github.io/demos/univac/playground/) (WIP)

## Features

 * JavaScript API for node.js and browser. 
 * Command line tool
 * TypeScript
 * ASTs for C, golang, ruby, java, python, scala, erlang, lua, dart2, rust, antlr4, kotlin, smalltalk, fortran77, VisualBasic6, less wat, and
   more... 


## A word of caution

A word of caution regarding generated ASTs:

 * Not guaranteed to support 100% of Language's features
 * Not guaranteed to render 100% of given source code semantics
 * AST structure is not official
   * Was built using [antlr4](https://github.com/antlr/grammars-v4) which is not a tool oriented to generate
     AST
      * So some grammars needed to be post-processed to remove redundant nodes.



## Install

```sh
npm i univac
```

## JavaScript API

```js
import { parseAst } from 'univac'

const ast = await parseAst({
  input: 'int main() {}',
  language: 'c'
})
console.log(JSON.stringify(ast, null, 2))
```

## Command line

```
univac --input src/file.py --language python3 --output file-ast.json
univac --listLanguages
univac --input "int main() {}" --language c > ast.json
```

## Supported Languages

The idea is to support all languages in [antlr4 grammars](https://github.com/antlr/grammars-v4)

## Status

THis is a very new project, WIP, this is the current status:

 * tests for Node.js API
 * tests to make sure it runs in the browser
 * C language
 * Golang
 * C++
 * scala
 * ruby
 * java
 * lua
 * python3
 * erlang
 * dart2
 * kotlin
 * Fortran77
 * Smalltalk
 * VisualBasic6
 * wat
 * less
 * java9 (very slow)
 * CLI
 * Basic Playground
 * playground improved with many examples, syntax hihgiling,different kind of ast viewers.
 * antlr4 grammar
 * c++ grammar (cppAntlr) - slow
 * introduced second kind of parser : tree-sitting. These return a "real" ast - not visitor. 
   * declared adaptor interfaces
   * visitor is now  a normalizer Normalizer
   * tree-sitter tests for node
   * async call parseAst()
 * rust (tree-sitter)
 * sexpressions (antlr4)
 * abnf (antlr4)
 * julia (tree-sitter)

## Language grammars notes

### Smalltalk

Grammar taken from official readline-smalltalk project: https://github.com/redline-smalltalk/redline-smalltalk

### Ruby

Is not Ruby, is Ruby-like. Doesn't support Object Oriented features. 

TODO: rename it or remove it. Notes from the author:

> Ruby-like language (Corundum) grammar written in ANTLR v4. Was developed just for fun to use with Parrot VM
> (basically it compiles into PIR - parrot intermediate representation)
>
> It has some specific stuff like inline pir and for loop :) And won't ever have OOP features, sorry.

### Java9

It's very very slow, just use the java one. notes form the author:

> A Java 8 grammar for ANTLR 4 derived from the Java Language Specification chapter 19.
>
> NOTE: This grammar results in a generated parser that is much slower than the Java 7 grammar in the
> grammars-v4/java directory. This one is, however, extremely close to the spec.

