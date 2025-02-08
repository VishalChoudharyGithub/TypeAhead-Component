import "./typeAhead.css";
import mockData from "../../data/mockapi.js";
function TypeAhead(container) {
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Search...";
  input.classList.add("typeahead-input");

  const dropdown = document.createElement("ul");
  dropdown.classList.add("typeahead-dropdown");

  input.addEventListener("input", (event) => {
    const searchTerm = event.target.value;
    if (!searchTerm) dropdown.innerHTML = "";
    else {
      dropdown.innerHTML = "";
      const suggestions = mockData.filter((data) =>
        data.toLowerCase().includes(searchTerm.toLowerCase())
      );

      suggestions.forEach((suggestion) => {
        const li = document.createElement("li");
        li.innerText = suggestion;
        dropdown.appendChild(li);

        li.addEventListener("click", () => {
          input.value = suggestion;
          dropdown.innerHTML = "";
        });
      });
    }
  });
  container.appendChild(input);
  container.appendChild(dropdown);
}

export default TypeAhead;
