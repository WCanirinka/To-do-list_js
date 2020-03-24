!function(e){var t={};function n(a){if(t[a])return t[a].exports;var d=t[a]={i:a,l:!1,exports:{}};return e[a].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(a,d,function(t){return e[t]}.bind(null,d));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var a,d,i,o,r,c,l,s=function(e){var t=[];return{name:e,addToDo:function(e){t=t.concat(e)},getToDo:function(){return t},removeToDo:function(e){t=t.filter((function(t,n){return e!==n}))}}},u={addProject:function(e){var t=s(e),n=JSON.parse(localStorage.getItem("todolist"));n=n.concat(t),localStorage.setItem("todolist",JSON.stringify(n))},deleteProject:function(e){var t=JSON.parse(localStorage.getItem("todolist"));t=t.filter((function(t){return t===e})),localStorage.setItem("todolist",JSON.stringify(t))},updateStatus:function(e,t){var n=JSON.parse(localStorage.getItem("todolist")),a=n.find((function(t){return t.name===e})).todos.find((function(e,n){return t===n}));a.completed=!a.completed,localStorage.setItem("todolist",JSON.stringify(n))},addToDoItem:function(e,t,n,a,d,i){var o={title:t,description:n,priority:a,dueDate:d,completed:i},r=JSON.parse(localStorage.getItem("todolist")),c=r.find((function(t){return t.name===e}));c.todos||(c.todos=[]),c.todos.push(o),localStorage.setItem("todolist",JSON.stringify(r))},deleteToDoItem:function(e,t){var n=JSON.parse(localStorage.getItem("todolist")),a=n.find((function(t){return t.name===e}));a.todos&&a.todos.splice(t,1),localStorage.setItem("todolist",JSON.stringify(n))},updateToDoItem:function(e,t,n,a,d,i){var o=JSON.parse(localStorage.getItem("todolist")),r=o.find((function(t){return t.name===e})).todos.find((function(e,n){return t===n}));r.title=n,r.description=a,r.priority=i,r.dueDate=d,localStorage.setItem("todolist",JSON.stringify(o))}},p=document.querySelector("#content"),m=document.querySelector("#projects"),v=document.querySelector("#todo-items"),f=(a=function(){var e=document.createElement("div");e.classList.add("modal-container");var t=document.createElement("div");t.classList.add("back-drop");var n=document.createElement("div");n.classList.add("modal");var a=document.createElement("input");a.setAttribute("type","text"),a.classList.add("new-project-text-box"),a.setAttribute("placeholder","Project Name");var d=document.createElement("button");d.innerText="Create Project",d.classList.add("save-btn"),d.addEventListener("click",(function(){return e=a.value,void(JSON.parse(localStorage.getItem("todolist")||"[]").find((function(t){return t===e}))?alert("Project already exists"):(u.addProject(e),document.querySelector(".modal-container").remove(),l()));var e})),n.appendChild(a),n.appendChild(d),e.appendChild(t),e.appendChild(n),p.appendChild(e)},d=function(e,t,n){var a=document.createElement("div");a.classList.add("single-todo");var d=document.createElement("input");d.setAttribute("type","checkbox"),n.completed&&d.setAttribute("checked",!0),d.addEventListener("change",(function(){u.updateStatus(e,t),i(e)})),d.classList.add("check-box");var o=document.createElement("h3");o.classList.add("title"),o.innerText=n.title;var r=document.createElement("p");r.classList.add("priority"),r.innerText=n.priority;var c=document.createElement("i");c.classList.add("fa"),c.classList.add("fa-eye"),c.classList.add("view-btn");var l=document.createElement("i");l.classList.add("fa"),l.classList.add("fa-pencil-square-o"),l.classList.add("edit-btn");var s=document.createElement("i");s.classList.add("fa"),s.classList.add("fa-trash"),s.classList.add("delete-btn"),s.addEventListener("click",(function(){u.deleteToDoItem(e,t),i(e)})),l.addEventListener("click",(function(){return function(e,t,n){var a=document.createElement("div");a.classList.add("modal-container");var d=document.createElement("div");d.classList.add("back-drop");var o=document.createElement("div");o.classList.add("modal");var r=document.createElement("input");r.setAttribute("type","text"),r.classList.add("todo-item-title"),r.value=n.title;var c=document.createElement("textarea");c.classList.add("todo-item-desc"),c.value=n.description;var l=document.createElement("input");l.setAttribute("type","date"),l.classList.add("due-date"),l.value=n.dueDate;var s=document.createElement("select");s.classList.add("todo-item-priority");var m=document.createElement("option");m.text="High";var v=document.createElement("option");v.text="Low",s.appendChild(m),s.appendChild(v);var f=document.createElement("button");f.classList.add("edit"),f.innerText="Edit",f.addEventListener("click",(function(){u.updateToDoItem(e,t,r.value,c.value,l.value,s.value),i(e),a.remove()})),o.appendChild(r),o.appendChild(c),o.appendChild(s),o.appendChild(l),o.appendChild(f),a.appendChild(d),a.appendChild(o),p.appendChild(a)}(e,t,n)})),c.addEventListener("click",(function(){return function(e){var t=document.createElement("div");t.classList.add("modal-container");var n=document.createElement("div");n.classList.add("back-drop");var a=document.createElement("div");a.classList.add("modal");var d=document.createElement("p");d.classList.add("view-title"),d.innerText=e.title;var i=document.createElement("p");i.classList.add("view-desc"),i.innerText=e.description;var o=document.createElement("p");o.classList.add("view-date"),o.innerText=new Date(e.dueDate);var r=document.createElement("p");r.classList.add("view-priority"),r.innerText=e.priority;var c=document.createElement("p");c.classList.add("completed-label"),c.innerText="Incomplete",e.completed&&(c.classList.add("completed-task"),c.innerText="Complete"),a.appendChild(d),a.appendChild(i),a.appendChild(r),a.appendChild(o),a.appendChild(c),t.appendChild(n),t.appendChild(a),p.appendChild(t)}(n)}));var m=document.createElement("div");return m.classList.add("icons"),a.appendChild(d),a.appendChild(o),a.appendChild(r),m.appendChild(c),m.appendChild(l),m.appendChild(s),a.appendChild(m),a},i=function(e){v.innerHTML="";var t=document.createElement("div");t.classList.add("project-header");var n=document.createElement("h3");n.classList.add("header-title"),n.innerText=e;var a=document.createElement("button");a.classList.add("new-todo-btn"),a.innerText="New Todo",a.addEventListener("click",(function(){return o(e,null,"create")})),t.appendChild(n),t.appendChild(a);var i=JSON.parse(localStorage.getItem("todolist")).find((function(t){return t.name===e}));v.appendChild(t),i.todos&&i.todos.forEach((function(t,n){var a=d(e,n,t);v.appendChild(a)}))},o=function(e){var t=document.createElement("div");t.classList.add("modal-container");var n=document.createElement("div");n.classList.add("back-drop");var a=document.createElement("div");a.classList.add("modal");var d=document.createElement("input");d.setAttribute("type","text"),d.setAttribute("placeholder","Title"),d.classList.add("todo-item-title");var o=document.createElement("textarea");o.classList.add("todo-item-desc"),o.setAttribute("placeholder","Description");var r=document.createElement("input");r.setAttribute("type","date"),r.setAttribute("placeholder","Date"),r.classList.add("due-date");var c=document.createElement("select");c.classList.add("todo-item-priority");var l=document.createElement("option");l.text="Priority",l.setAttribute("disabled",!0),l.setAttribute("selected",!0);var s=document.createElement("option");s.text="High";var m=document.createElement("option");m.text="Low",c.appendChild(l),c.appendChild(s),c.appendChild(m);var v=document.createElement("button");v.classList.add("create-todo"),v.innerText="Create Todo",v.addEventListener("click",(function(){u.addToDoItem(e,d.value,o.value,c.value,r.value,!1),i(e),t.remove()})),a.appendChild(d),a.appendChild(o),a.appendChild(c),a.appendChild(r),a.appendChild(v),t.appendChild(n),t.appendChild(a),p.appendChild(t)},{renderProjects:l=function(){m.innerHTML="";var e=r(),t=c();m.appendChild(e),m.appendChild(t)},addNewProject:c=function(){var e=document.createElement("button");return e.classList.add("new-project-btn"),e.innerText="New Project",e.addEventListener("click",a),e},generateSelector:r=function(){var e=document.createElement("select");e.classList.add("select-box");var t=document.createElement("option");return t.text="select option",t.setAttribute("disabled",!0),t.setAttribute("selected",!0),e.appendChild(t),JSON.parse(localStorage.getItem("todolist")||"[]").forEach((function(t){var n=function(e){var t=document.createElement("option");return t.text=e,t}(t.name);e.appendChild(n)})),e.addEventListener("change",(function(){return i(e.value)})),e}});JSON.parse(localStorage.getItem("todolist"))||localStorage.setItem("todolist",JSON.stringify([{name:"Build A House",todos:[{title:"Consult Architect",description:"Have a face meeting with the architect",dueDate:"2020-03-25",priority:"High",completed:!1},{title:"Meet with Project Engineer",description:"Meet with the Project Engineer to discuss project scope",dueDate:"2020-03-27",priority:"High",completed:!1}]}])),f.renderProjects()}]);