# Project Description

This project is a fork of https://github.com/onury/docma  and is mainly focused on solving dependency issues.

It supports  `nodejs >= 16`  .

Compared to the original project, this one has faster execution speeds, almost comparable to that of a rocket.

We would like to extend a special thanks to the new neo-jsdoc-x library at https://github.com/neomjs/jsdoc-x.

## Note

This project removes the `default template zebra` and requires manual pointing to the optimized template file address. 

Please specify the new template address in `docma.json` as follows:

```
    "template": {
        "path": "./node_modules/zjslqshqz-docma-template-zebra"
    },

```

The `zjslqshqz-docma-template-zebra` is automatically installed based on the dependencies by default.
