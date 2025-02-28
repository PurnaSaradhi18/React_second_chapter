const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World, This is Purna"
);
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

/*
  <div id="parent">
    <div id="child">
      <h1 class="heading" id="head">Hi, This is h1 tag</h1>
    </div>
  </div>
*/

// Above HTML structure can be written in React as,
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement(
      "h1",
      { class: "head", id: "heading1" },
      "Hi, This is HTML"
    )
  )
);
console.log(parent);
root.render(parent);

/*
  <div id="parent">
    <div id="child">
      <h1 class="heading" id="head">Hi, This is h1 tag</h1>
      <h2 class="heading" id="head">Hi, This is h2 tag</h2>
    </div>
  </div>
*/
const parent1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { class: "head", id: "heading2" },
      "Hi, This is h1 tag"
    ),
    React.createElement(
      "h2",
      { class: "head", id: "heading3" },
      "Hi, This is h2 tag"
    ),
  ])
);
console.log(parent1);
root.render(parent1);

/*
  <div id="parent">
    <div id="child1">
      <h1 class="heading" id="head1">Hi, This is h1 tag</h1>
      <h2 class="heading" id="head2">Hi, This is h2 tag</h2>
    </div>
    <div id="child2">
      <h1 class="heading" id="head3">Hi, This is h1 tag</h1>
      <h2 class="heading" id="head4">Hi, This is h2 tag</h2>
    </div>
  </div>
*/
const parent2 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement(
      "h1",
      { class: "head", id: "heading4" },
      "Hi, This is h1 tag"
    ),
    React.createElement(
      "h2",
      { class: "head", id: "heading5" },
      "Hi, This is h2 tag"
    ),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement(
      "h1",
      { class: "head", id: "heading6" },
      "Hi, This is h1 tag"
    ),
    React.createElement(
      "h2",
      { class: "head", id: "heading7" },
      "Hi, This is h2 tag"
    ),
  ]),
]);
console.log(parent1);
root.render(parent2);
