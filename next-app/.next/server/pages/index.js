"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/Tmdb.jsx
const API_KEY = "38c007f28d5b66f36b9c3cf8d8452a4b";
const API_BASE = "https://api.themoviedb.org/3";
const basicFetch = async (endipoint)=>{
    const req = await fetch(`${API_BASE}${endipoint}`);
    const json = await req.json();
    return json;
};
/* harmony default export */ const Tmdb = ({
    getHomeList: async ()=>{
        return [
            {
                slug: "originals",
                title: "Originais Netflix",
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "trending",
                title: "Recomendados para Voc\xea",
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "toprated",
                title: "Em Alta",
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "action",
                title: "A\xe7\xe3o",
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "comedy",
                title: "Com\xe9dia",
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "horror",
                title: "Terror",
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "romance",
                title: "Romance",
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "documentary",
                title: "Document\xe1rios",
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }
        ];
    }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(260);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/MovieRow.jsx



/* harmony default export */ const MovieRow = (({ title , items  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "movieRow",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "movieRow--listarea",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "movieRow--list",
                    children: items.results.length > 0 && items.results.map((item, key)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "movieRow--item",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: `https://image.tmdb.org/t/p/w300${item.poster_path}`,
                                alt: item.original_title,
                                width: 150,
                                height: 170
                            })
                        }, key))
                })
            })
        ]
    });
});

;// CONCATENATED MODULE: ./pages/index.jsx



function Home({ list  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "page",
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "lists",
            children: list.map((item, key)=>/*#__PURE__*/ jsx_runtime_.jsx(MovieRow, {
                    title: item.title,
                    items: item.items
                }, key))
        })
    });
}
async function getStaticProps() {
    const list = await Tmdb.getHomeList();
    return {
        props: {
            list
        },
        revalidate: 86400
    };
}


/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(5)));
module.exports = __webpack_exports__;

})();