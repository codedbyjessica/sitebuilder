"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/testdata.js":
/*!*************************!*\
  !*** ./src/testdata.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hero: function() { return /* binding */ hero; },\n/* harmony export */   navigation: function() { return /* binding */ navigation; },\n/* harmony export */   pages: function() { return /* binding */ pages; },\n/* harmony export */   sections: function() { return /* binding */ sections; },\n/* harmony export */   theme: function() { return /* binding */ theme; }\n/* harmony export */ });\nconst hero = {\n    config: {\n        type: \"basic\"\n    },\n    content: {\n        topMessage: \"here is the top mesage\",\n        heading: \"title\",\n        subheading: \"subheading\",\n        backgroundImage: \"http://placekitten.com/1440/900\"\n    }\n};\nconst navigation = {\n    config: {\n        type: \"center\"\n    },\n    content: {\n        logo: \"logo here\",\n        links: [\n            {\n                linkText: \"linktext1\",\n                link: \"#\"\n            },\n            {\n                linkText: \"linktext1\",\n                link: \"#\"\n            },\n            {\n                linkText: \"linktext1\",\n                link: \"#\"\n            }\n        ]\n    }\n};\nconst theme = {\n    primaryColorLight: \"#fae9e3\",\n    primaryColor: \"#E89275\",\n    primaryColorDark: \"#8b5746\",\n    secondaryColorDark: \"#5d706d\",\n    secondaryColor: \"#9CBCB7\",\n    secondaryColorLight: \"#e1eae9\",\n    neutralColorDark: \"#332f2e\",\n    neutralColor: \"#8d8481\",\n    neutralColorLight: \"#d9d6d5\",\n    buttonRounded: true\n};\nconst pages = [\n    {\n        id: \"3ertg\",\n        config: {\n            url: \"/\",\n            title: \"my page title\",\n            description: \"my page description\"\n        }\n    }\n];\nconst sections = [\n    {\n        config: {\n            page: \"/\",\n            type: \"one-col\",\n            index: 0\n        },\n        content: {\n            title: {\n                position: \"right\",\n                text: \"section one title\"\n            },\n            subtitle: {\n                position: \"right\",\n                text: \"section subtitle\"\n            },\n            columns: [\n                {\n                    position: \"center\",\n                    content: [\n                        {\n                            type: \"paragraph\",\n                            content: [\n                                \"Uptatem aut delectus blanditiis At perspiciatis autem ad accusamus cuut numquam quas ea ver\"\n                            ]\n                        }\n                    ]\n                }\n            ]\n        }\n    },\n    {\n        page: \"/\",\n        type: \"two-col\",\n        title: {\n            position: \"center\",\n            text: \"section two title\"\n        },\n        columns: [\n            {\n                position: \"right\",\n                content: [\n                    {\n                        type: \"paragraph\",\n                        content: [\n                            \"Uptatem aut delectus blanditiis At perspiciatis autem ad accusamus cuu numquam quas ea ver\",\n                            \"Fwam vel dolores omnis aut enim repellendus cum neque enim serwer est earum possimus et enimd\",\n                            \"Qnissimos dolorem aut beatae suscipit et nesciunt quae ad nulla lium quidem maxime eums\"\n                        ]\n                    }\n                ]\n            },\n            {\n                content: [\n                    {\n                        type: \"image\",\n                        url: \"http://placekitten.com/400/400\",\n                        description: \"kitten\"\n                    }\n                ]\n            }\n        ]\n    },\n    {\n        config: {\n            page: \"/\",\n            type: \"three-col\"\n        },\n        content: {\n            subtitle: {\n                position: \"left\",\n                text: \"section subtitle\"\n            },\n            columns: [\n                {\n                    position: \"center\",\n                    colTitle: \"column 1 title\",\n                    colSubtitle: \"column 1 subtitle\",\n                    content: [\n                        {\n                            type: \"paragraph\",\n                            content: [\n                                \"Ut optio quia ut voluptatum voluptas ut libero quod id error ipsa hic similique beatae est optio omnis. Non voluptatem dolores non iste nobis sit quia sapiente ea iure aperiam.\"\n                            ]\n                        }\n                    ]\n                },\n                {\n                    position: \"center\",\n                    colTitle: \"column 2 title\",\n                    colSubtitle: \"column 2 subtitle\",\n                    content: [\n                        {\n                            type: \"paragraph\",\n                            content: [\n                                \"Lorem ipsum dolor sit amet, ore et dolore magna aliqua.\",\n                                \"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exwra commodo consequat.\",\n                                \"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\",\n                                \"Excepteur im id est laborum.\"\n                            ]\n                        }\n                    ]\n                },\n                {\n                    position: \"center\",\n                    colTitle: \"column 2 title\",\n                    colSubtitle: \"column 2 subtitle\",\n                    content: [\n                        {\n                            type: \"paragraph\",\n                            content: [\n                                \"Cum impedit veure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\",\n                                \"Excepteur im id estollitia temporibus. Aut laboriosam cumque eum sunt architecto qui aliquam galisum quo tot laborum.\"\n                            ]\n                        }\n                    ]\n                }\n            ]\n        }\n    },\n    {\n        config: {\n            page: \"/\",\n            type: \"four-col\"\n        },\n        content: {\n            title: {\n                position: \"center\",\n                text: \"section three title\"\n            },\n            columns: [\n                {\n                    position: \"left\",\n                    content: [\n                        {\n                            type: \"image\",\n                            url: \"http://placekitten.com/300/300\",\n                            description: \"kitten\"\n                        },\n                        {\n                            type: \"paragraph\",\n                            content: [\n                                \"Lorem ipsum dolor sit amet\"\n                            ]\n                        }\n                    ]\n                },\n                {\n                    position: \"left\",\n                    colTitle: \"column 2 title\",\n                    content: [\n                        {\n                            type: \"paragraph\",\n                            content: [\n                                \"Lorepedit veritatis ut dolorem temporibus aut voluptatem fuga ea corrupti neque id ipsa omnis et dour.\",\n                                \"Citationem totam ut labore fugit aut explicabo aliquam ut illo nulla ut distinctio adipism.\"\n                            ]\n                        }\n                    ]\n                },\n                {\n                    position: \"left\",\n                    content: [\n                        {\n                            type: \"image\",\n                            url: \"http://placekitten.com/301/301\",\n                            description: \"kitten\"\n                        },\n                        {\n                            type: \"paragraph\",\n                            content: [\n                                \"Lorboris nisi ut aliquip ex ea commodo consequ\"\n                            ]\n                        }\n                    ]\n                },\n                {\n                    position: \"left\",\n                    colTitle: \"column 2 title\",\n                    content: [\n                        {\n                            type: \"paragraph\",\n                            content: [\n                                \"Wboris nisi ut aimpedit veritatis ut dolorem temporibus aut voluptatem fuga ea corrupti neque id ipscillum do\"\n                            ]\n                        }\n                    ]\n                }\n            ]\n        }\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVO29CQUNWN0IsU0FBUzt3QkFDTDs0QkFDSUQsTUFBTTs0QkFDTndCLEtBQUs7NEJBQ0xFLGFBQWE7d0JBQ2pCO3dCQUNBOzRCQUNJMUIsTUFBTTs0QkFDTkMsU0FBUztnQ0FDTDs2QkFDSDt3QkFDTDtxQkFDSDtnQkFFTDtnQkFDQTtvQkFDSTZCLFVBQVU7b0JBQ1ZJLFVBQVU7b0JBQ1ZqQyxTQUFTO3dCQUNMOzRCQUNJRCxNQUFNOzRCQUNOQyxTQUFTO2dDQUNMO2dDQUNBOzZCQUNIO3dCQUNMO3FCQUNIO2dCQUNMO2dCQUNBO29CQUNJNkIsVUFBVTtvQkFDVjdCLFNBQVM7d0JBQ0w7NEJBQ0lELE1BQU07NEJBQ053QixLQUFLOzRCQUNMRSxhQUFhO3dCQUNqQjt3QkFDQTs0QkFDSTFCLE1BQU07NEJBQ05DLFNBQVM7Z0NBQ0w7NkJBQ0g7d0JBQ0w7cUJBQ0g7Z0JBQ0w7Z0JBQ0E7b0JBQ0k2QixVQUFVO29CQUNWSSxVQUFVO29CQUNWakMsU0FBUzt3QkFDTDs0QkFDSUQsTUFBTTs0QkFDTkMsU0FBUztnQ0FDTDs2QkFDSDt3QkFDTDtxQkFDSDtnQkFDTDthQUNIO1FBQ0w7SUFDSjtDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy90ZXN0ZGF0YS5qcz8zN2FmIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNvbnN0IGhlcm8gPSB7XG4gICAgY29uZmlnOiB7XG4gICAgICAgIHR5cGU6IFwiYmFzaWNcIixcbiAgICB9LFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgdG9wTWVzc2FnZTogXCJoZXJlIGlzIHRoZSB0b3AgbWVzYWdlXCIsXG4gICAgICAgIGhlYWRpbmc6IFwidGl0bGVcIixcbiAgICAgICAgc3ViaGVhZGluZzogXCJzdWJoZWFkaW5nXCIsXG5cdFx0YmFja2dyb3VuZEltYWdlOiBcImh0dHA6Ly9wbGFjZWtpdHRlbi5jb20vMTQ0MC85MDBcIlxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IG5hdmlnYXRpb24gPSB7XG4gICAgY29uZmlnOiB7XG4gICAgICAgIHR5cGU6IFwiY2VudGVyXCJcbiAgICB9LFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgbG9nbzogXCJsb2dvIGhlcmVcIixcbiAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsaW5rVGV4dDogXCJsaW5rdGV4dDFcIixcbiAgICAgICAgICAgICAgICBsaW5rOiBcIiNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsaW5rVGV4dDogXCJsaW5rdGV4dDFcIixcbiAgICAgICAgICAgICAgICBsaW5rOiBcIiNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsaW5rVGV4dDogXCJsaW5rdGV4dDFcIixcbiAgICAgICAgICAgICAgICBsaW5rOiBcIiNcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgdGhlbWUgPSB7XG4gICAgcHJpbWFyeUNvbG9yTGlnaHQ6IFwiI2ZhZTllM1wiLFxuICAgIHByaW1hcnlDb2xvcjogXCIjRTg5Mjc1XCIsXG4gICAgcHJpbWFyeUNvbG9yRGFyazogXCIjOGI1NzQ2XCIsXG4gICAgc2Vjb25kYXJ5Q29sb3JEYXJrOiBcIiM1ZDcwNmRcIixcbiAgICBzZWNvbmRhcnlDb2xvcjogXCIjOUNCQ0I3XCIsXG4gICAgc2Vjb25kYXJ5Q29sb3JMaWdodDogXCIjZTFlYWU5XCIsXG4gICAgbmV1dHJhbENvbG9yRGFyazogXCIjMzMyZjJlXCIsXG4gICAgbmV1dHJhbENvbG9yOiBcIiM4ZDg0ODFcIixcbiAgICBuZXV0cmFsQ29sb3JMaWdodDogXCIjZDlkNmQ1XCIsXG4gICAgYnV0dG9uUm91bmRlZDogdHJ1ZVxufVxuXG5leHBvcnQgY29uc3QgcGFnZXMgPSBbXG4gICAge1xuICAgICAgICBpZDogXCIzZXJ0Z1wiLFxuICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgIHVybDogXCIvXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJteSBwYWdlIHRpdGxlXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJteSBwYWdlIGRlc2NyaXB0aW9uXCJcbiAgICAgICAgfVxuICAgIH1cbl1cblxuZXhwb3J0IGNvbnN0IHNlY3Rpb25zID0gW1xuICAgIHtcbiAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICBwYWdlOiBcIi9cIixcbiAgICAgICAgICAgIHR5cGU6IFwib25lLWNvbFwiLFxuICAgICAgICAgICAgaW5kZXg6IDBcbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgIHRleHQ6IFwic2VjdGlvbiBvbmUgdGl0bGVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1YnRpdGxlOiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICB0ZXh0OiBcInNlY3Rpb24gc3VidGl0bGVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwYXJhZ3JhcGhcIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVwdGF0ZW0gYXV0IGRlbGVjdHVzIGJsYW5kaXRpaXMgQXQgcGVyc3BpY2lhdGlzIGF1dGVtIGFkIGFjY3VzYW11cyBjdXV0IG51bXF1YW0gcXVhcyBlYSB2ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICAgICAgcGFnZTogXCIvXCIsXG4gICAgICAgICAgICB0eXBlOiBcInR3by1jb2xcIixcbiAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgdGV4dDogXCJzZWN0aW9uIHR3byB0aXRsZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicGFyYWdyYXBoXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJVcHRhdGVtIGF1dCBkZWxlY3R1cyBibGFuZGl0aWlzIEF0IHBlcnNwaWNpYXRpcyBhdXRlbSBhZCBhY2N1c2FtdXMgY3V1IG51bXF1YW0gcXVhcyBlYSB2ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGd2FtIHZlbCBkb2xvcmVzIG9tbmlzIGF1dCBlbmltIHJlcGVsbGVuZHVzIGN1bSBuZXF1ZSBlbmltIHNlcndlciBlc3QgZWFydW0gcG9zc2ltdXMgZXQgZW5pbWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJRbmlzc2ltb3MgZG9sb3JlbSBhdXQgYmVhdGFlIHN1c2NpcGl0IGV0IG5lc2NpdW50IHF1YWUgYWQgbnVsbGEgbGl1bSBxdWlkZW0gbWF4aW1lIGV1bXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwOi8vcGxhY2VraXR0ZW4uY29tLzQwMC80MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJraXR0ZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgcGFnZTogXCIvXCIsXG4gICAgICAgICAgICB0eXBlOiBcInRocmVlLWNvbFwiXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgIHN1YnRpdGxlOiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgIHRleHQ6IFwic2VjdGlvbiBzdWJ0aXRsZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbFRpdGxlOiBcImNvbHVtbiAxIHRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbFN1YnRpdGxlOiBcImNvbHVtbiAxIHN1YnRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBhcmFncmFwaFwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVXQgb3B0aW8gcXVpYSB1dCB2b2x1cHRhdHVtIHZvbHVwdGFzIHV0IGxpYmVybyBxdW9kIGlkIGVycm9yIGlwc2EgaGljIHNpbWlsaXF1ZSBiZWF0YWUgZXN0IG9wdGlvIG9tbmlzLiBOb24gdm9sdXB0YXRlbSBkb2xvcmVzIG5vbiBpc3RlIG5vYmlzIHNpdCBxdWlhIHNhcGllbnRlIGVhIGl1cmUgYXBlcmlhbS5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgY29sVGl0bGU6IFwiY29sdW1uIDIgdGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgY29sU3VidGl0bGU6IFwiY29sdW1uIDIgc3VidGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicGFyYWdyYXBoXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgb3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleHdyYSBjb21tb2RvIGNvbnNlcXVhdC5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFeGNlcHRldXIgaW0gaWQgZXN0IGxhYm9ydW0uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbFRpdGxlOiBcImNvbHVtbiAyIHRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbFN1YnRpdGxlOiBcImNvbHVtbiAyIHN1YnRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBhcmFncmFwaFwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ3VtIGltcGVkaXQgdmV1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFeGNlcHRldXIgaW0gaWQgZXN0b2xsaXRpYSB0ZW1wb3JpYnVzLiBBdXQgbGFib3Jpb3NhbSBjdW1xdWUgZXVtIHN1bnQgYXJjaGl0ZWN0byBxdWkgYWxpcXVhbSBnYWxpc3VtIHF1byB0b3QgbGFib3J1bS5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgIHBhZ2U6IFwiL1wiLFxuICAgICAgICAgICAgdHlwZTogXCJmb3VyLWNvbFwiXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgdGV4dDogXCJzZWN0aW9uIHRocmVlIHRpdGxlXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2x1bW5zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9wbGFjZWtpdHRlbi5jb20vMzAwLzMwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImtpdHRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicGFyYWdyYXBoXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xUaXRsZTogXCJjb2x1bW4gMiB0aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwYXJhZ3JhcGhcIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxvcmVwZWRpdCB2ZXJpdGF0aXMgdXQgZG9sb3JlbSB0ZW1wb3JpYnVzIGF1dCB2b2x1cHRhdGVtIGZ1Z2EgZWEgY29ycnVwdGkgbmVxdWUgaWQgaXBzYSBvbW5pcyBldCBkb3VyLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNpdGF0aW9uZW0gdG90YW0gdXQgbGFib3JlIGZ1Z2l0IGF1dCBleHBsaWNhYm8gYWxpcXVhbSB1dCBpbGxvIG51bGxhIHV0IGRpc3RpbmN0aW8gYWRpcGlzbS5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFsgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9wbGFjZWtpdHRlbi5jb20vMzAxLzMwMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImtpdHRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicGFyYWdyYXBoXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJMb3Jib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xUaXRsZTogXCJjb2x1bW4gMiB0aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwYXJhZ3JhcGhcIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIldib3JpcyBuaXNpIHV0IGFpbXBlZGl0IHZlcml0YXRpcyB1dCBkb2xvcmVtIHRlbXBvcmlidXMgYXV0IHZvbHVwdGF0ZW0gZnVnYSBlYSBjb3JydXB0aSBuZXF1ZSBpZCBpcHNjaWxsdW0gZG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICB9XG5dXG4iXSwibmFtZXMiOlsiaGVybyIsImNvbmZpZyIsInR5cGUiLCJjb250ZW50IiwidG9wTWVzc2FnZSIsImhlYWRpbmciLCJzdWJoZWFkaW5nIiwiYmFja2dyb3VuZEltYWdlIiwibmF2aWdhdGlvbiIsImxvZ28iLCJsaW5rcyIsImxpbmtUZXh0IiwibGluayIsInRoZW1lIiwicHJpbWFyeUNvbG9yTGlnaHQiLCJwcmltYXJ5Q29sb3IiLCJwcmltYXJ5Q29sb3JEYXJrIiwic2Vjb25kYXJ5Q29sb3JEYXJrIiwic2Vjb25kYXJ5Q29sb3IiLCJzZWNvbmRhcnlDb2xvckxpZ2h0IiwibmV1dHJhbENvbG9yRGFyayIsIm5ldXRyYWxDb2xvciIsIm5ldXRyYWxDb2xvckxpZ2h0IiwiYnV0dG9uUm91bmRlZCIsInBhZ2VzIiwiaWQiLCJ1cmwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic2VjdGlvbnMiLCJwYWdlIiwiaW5kZXgiLCJwb3NpdGlvbiIsInRleHQiLCJzdWJ0aXRsZSIsImNvbHVtbnMiLCJjb2xUaXRsZSIsImNvbFN1YnRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/testdata.js\n"));

/***/ })

});