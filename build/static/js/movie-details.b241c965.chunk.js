(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{82:function(e,a,t){e.exports={wrapper:"MovieDetails_wrapper__1xUe5",imageWrapper:"MovieDetails_imageWrapper__1yg9y",image:"MovieDetails_image__RqnN6",titleWrapper:"MovieDetails_titleWrapper__1fMEe",title:"MovieDetails_title__xwMSd",score:"MovieDetails_score__1I44j",star:"MovieDetails_star__1PuQT",genresList:"MovieDetails_genresList__1SZSD",genresItem:"MovieDetails_genresItem__5OU2o"}},86:function(e,a,t){"use strict";t.r(a);var r=t(0),i=t.n(r),s=t(82),l=t.n(s);a.default=function(e){var a=e.movie,t=void 0===a?[]:a,r=t.backdrop_path?"".concat("https://image.tmdb.org/t/p/original").concat(t.backdrop_path):null,s=t.title?t.title:t.name,n=t.release_date?t.release_date:t.first_air_date,c=new Date(n).getFullYear();return i.a.createElement("div",{className:l.a.wrapper},i.a.createElement("div",{className:l.a.imageWrapper},r&&i.a.createElement("img",{src:r,alt:"",className:l.a.image})),i.a.createElement("div",null,i.a.createElement("div",{className:l.a.titleWrapper},i.a.createElement("h2",{className:l.a.title},"".concat(s," (").concat(c,")")),i.a.createElement("p",{className:l.a.score},"User score: ",t.vote_average,"\u2002",i.a.createElement("span",{className:l.a.star},i.a.createElement("i",{className:"fa fa-star-half-o","aria-hidden":"true"})))),i.a.createElement("h4",null,"Overview"),i.a.createElement("p",null,t.overview),i.a.createElement("h4",null,"Genres"),i.a.createElement("ul",{className:l.a.genresList},t.genres.map((function(e){return i.a.createElement("li",{key:e.id,className:l.a.genresItem},e.name)})))))}}}]);
//# sourceMappingURL=movie-details.b241c965.chunk.js.map