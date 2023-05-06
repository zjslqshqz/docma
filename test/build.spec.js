'use strict';

// core modules
const path = require('path');

// dep modules
// const fs = require('fs-extra');

// own modules
const Docma = require('../index');


describe('build', () => {

    // beforeAll(function () {});

    // test('build with query-routing', async () => {
    //     const config = {
    //         debug: 30,
    //         src: [
    //             'test/input/*.js',
    //             {
    //                 'group': 'test/input/src/**.js',
    //                 'html/route': 'test/input/html-test.html'
    //             },
    //             'test/input/md-test.md'
    //         ],
    //         dest: 'test/output/query-routing',
    //         markdown: {
    //             gfm: true,
    //             tables: true,
    //             breaks: false,
    //             pedantic: false,
    //             sanitize: false,
    //             smartLists: true,
    //             smartypants: false,
    //             xhtml: false,
    //             tasks: true,
    //             emoji: true
    //         },
    //         app: {
    //             title: 'Docs',
    //             entrance: 'api:group',
    //             routing: 'query',
    //             base: '/'
    //         },
    //         template: {
    //             path: './templates/zebra',
    //             options: {
    //                 title: ''
    //             }
    //         }
    //     };
    //     try {
    //         await expect(Docma.create().build(config)).resolves.toEqual(true);
    //     } catch (err) {
    //         console.log(err.stack || err);
    //         expect(Boolean(err)).toEqual(false);
    //     }
    // });

    // test.only('build with path-routing (for GitHub)', () => {
    //     config.app.routing = 'path';
    //     config.app.server = 'github';
    //     config.template.options.navbar.menu = getNavItems(config.app.routing);
    //     config.dest = 'test/output/path-routing';
    //     config.app.base = '/'; // '/javascript/docma/' + config.dest;
    //     return Docma.create()
    //         .build(config)
    //         .then(function (success) {
    //             expect(success).toEqual(true);
    //         })
    //         .catch(function (err) {
    //             console.log(err.stack || err);
    //             expect(Boolean(err)).toEqual(false);
    //         });
    // });

    // test('build docma documentation', () => {
    //     return Docma.create()
    //         .build('./docma.json')
    //         .then(function (success) {
    //             expect(success).toEqual(true);
    //         })
    //         .catch(function (err) {
    //             console.log(err.stack || err);
    //             expect(Boolean(err)).toEqual(false);
    //         });
    // });

    test('build test',()=>{
        return undefined;
    });
});
