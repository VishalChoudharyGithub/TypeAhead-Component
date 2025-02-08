import TypeAhead from "./components/TypeAhead/typeAhead.js";

function App(rootElement) {
  const container = document.createElement("div");
  container.classList.add("typeahead-container");
  TypeAhead(container);
  rootElement.appendChild(container);
}
export default App;
