export class AuthSelect {
    static async create(url = "../Elements/Person/person.json") {
      const select = document.createElement("select");
      select.id = "person-select";
  
      try {
        const res = await fetch(url);
        const people = await res.json();
  
        people.forEach(person => {
          const option = document.createElement("option");
          option.value = person.name;
          option.textContent = person.name;
          select.appendChild(option);
        });
      } catch (err) {
        console.error("Failed to load names:", err);
      }
  
      return select;
    }
  }