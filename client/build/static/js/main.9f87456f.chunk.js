(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,n){e.exports=n(68)},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(28),r=n.n(l),c=n(9),i=n(6),s=n(10),u=n(11),m=n(12),h=n(14),d=n(13),f=n(15);var E=function(e){var t=e.children;return o.a.createElement("div",{style:{height:100,clear:"both",paddingTop:30,textAlign:"center"},className:"jumbotron"},t)},k=n(8),v=n.n(k),b={getBooks:function(){return v.a.get("/api/books")},getBook:function(e){return v.a.get("/api/books/"+e)},deleteBook:function(e){return v.a.delete("/api/books/"+e)},saveBook:function(e){return v.a.post("/api/books",e)},search:function(e){return v.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)}};function p(e){var t=e.fluid,n=e.children;return o.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)}function g(e){var t=e.fluid,n=e.children;return o.a.createElement("div",{className:"row".concat(t?"-fluid":"")},n)}function B(e){var t=e.size,n=e.children;return o.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},n)}n(55);function S(e){var t=e.children;return o.a.createElement("div",{className:"list-overflow-container"},o.a.createElement("ul",{className:"list-group"},t))}function y(e){var t=e.children;return o.a.createElement("div",null,o.a.createElement("li",{className:"list-group-item"},t))}function j(e){return o.a.createElement("div",{className:"form-group"},o.a.createElement("input",Object.assign({className:"form-control"},e)))}function I(e){return o.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}n(56);var N=function(e){return o.a.createElement("span",Object.assign({className:"save-btn btn btn-success"},e,{role:"button",tabIndex:"0"}),"Save")},O=(n(57),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],title:"",author:"",description:"",image:"",link:"",date:"",search:"",hasSearched:!1},n.loadBooks=function(){b.getBooks().then(function(e){return n.setState({books:[],title:"",author:"",description:"",image:"",link:""})}).catch(function(e){return console.log(e)})},n.deleteBook=function(e){b.deleteBook(e).then(function(e){return n.loadBooks()}).catch(function(e){return console.log(e)})},n.saveBook=function(e){b.saveBook({title:n.state.title,author:n.state.author,description:n.state.description,image:n.state.image,link:n.state.link}).then(function(e){return alert(n.state.title+" saved to favorites")}).catch(function(e){return console.log(e)})},n.handleInputChange=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(s.a)({},a,o))},n.handleFormSubmit=function(e){e.preventDefault(),n.state.search&&(console.log("Search: "+n.state.search),b.search(n.state.search).then(function(e){return n.setState({books:e.data.items,search:"",hasSearched:!0})}).then(function(e){return console.log(n.state)}).catch(function(e){return console.log(e)}))},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return this.state.hasSearched?o.a.createElement(p,{fluid:!0},o.a.createElement(g,null,o.a.createElement(B,{size:"md-12"},o.a.createElement(E,null,o.a.createElement("h1",null,"What Books Should I Read?")),o.a.createElement("form",null,o.a.createElement(j,{value:this.state.search,onChange:this.handleInputChange,name:"search",placeholder:"Search (required)"}),o.a.createElement(I,{disabled:!this.state.search,onClick:this.handleFormSubmit},"Submit Search")))),o.a.createElement(g,null,o.a.createElement(B,{size:"md-12"},this.state.books.length?o.a.createElement(S,null,this.state.books.map(function(t){return o.a.createElement(y,{key:t.id},o.a.createElement("a",{href:t.volumeInfo.infoLink,target:"_blank"},o.a.createElement("img",{src:t.volumeInfo.imageLinks.thumbnail})),o.a.createElement("h1",null,t.volumeInfo.title," by ",t.volumeInfo.authors),o.a.createElement("p",null,t.volumeInfo.description),o.a.createElement(N,{onClick:function(){return e.setState({title:t.volumeInfo.title,author:t.volumeInfo.authors,description:t.volumeInfo.description,image:t.volumeInfo.imageLinks.thumbnail,link:t.volumeInfo.infoLink},function(){e.saveBook(t.id)})}}))})):o.a.createElement("h3",null,"No Results to Display")))):o.a.createElement(p,{fluid:!0},o.a.createElement(g,null,o.a.createElement(B,{size:"md-12"},o.a.createElement(E,null,o.a.createElement("h1",null,"What Books Should I Read?")),o.a.createElement("form",null,o.a.createElement(j,{value:this.state.search,onChange:this.handleInputChange,name:"search",placeholder:"Search (required)"}),o.a.createElement(I,{disabled:!this.state.search,onClick:this.handleFormSubmit},"Submit Search")))))}}]),t}(a.Component));n(58);var w=function(e){return o.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")},C=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],title:"",author:"",description:"",image:"",link:""},n.loadBooks=function(){b.getBooks().then(function(e){return n.setState({books:e.data,title:"",author:"",description:"",image:"",link:""})}).catch(function(e){return console.log(e)})},n.deleteBook=function(e){b.deleteBook(e).then(function(e){return n.loadBooks()}).catch(function(e){return console.log(e)})},n.handleInputChange=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(s.a)({},a,o))},n.handleFormSubmit=function(e){e.preventDefault(),n.state.title&&n.state.author&&b.saveBook({title:n.state.title,author:n.state.author,synopsis:n.state.synopsis}).then(function(e){return n.loadBooks()}).catch(function(e){return console.log(e)})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement(p,{fluid:!0},o.a.createElement(g,null,o.a.createElement(B,{size:"md-12"},o.a.createElement(E,null,o.a.createElement("h1",null,"Books On My List")),this.state.books.length?o.a.createElement(S,null,this.state.books.map(function(t){return o.a.createElement(y,{key:t._id},o.a.createElement(w,{onClick:function(){return e.deleteBook(t._id)}}),o.a.createElement("a",{href:t.link,target:"_blank"},o.a.createElement("img",{src:t.image})),o.a.createElement("h1",null,t.title," by ",t.author),o.a.createElement("p",null,t.description))})):o.a.createElement("h3",null,"No Results to Display"))))}}]),t}(a.Component);var x=function(){return o.a.createElement(p,{fluid:!0},o.a.createElement(g,null,o.a.createElement(B,{size:"md-12"},o.a.createElement(E,null,o.a.createElement("h1",null,"404 Page Not Found"),o.a.createElement("h1",null,o.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};n(59);var z=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},o.a.createElement("a",{className:"navbar-brand",href:"/"},"Google Books"),o.a.createElement(c.b,{to:"/",className:"link"},"Search"),o.a.createElement(c.b,{to:"/saved",className:"link"},"Saved"))};var D=function(){return o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement(z,null),o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/",component:O}),o.a.createElement(i.a,{path:"/saved",component:C}),o.a.createElement(i.a,{component:x}))))};r.a.render(o.a.createElement(D,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.9f87456f.chunk.js.map