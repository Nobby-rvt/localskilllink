async function postSkill() {
    const name = document.getElementById("name").value;
    const skill = document.getElementById("skill").value;

    await fetch("http://localhost:5000/skills", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, skill })
    });

    loadSkills();
}

async function loadSkills() {
    const res = await fetch("http://localhost:5000/skills");
    const data = await res.json();

    const list = document.getElementById("skillList");
    list.innerHTML = "";

    data.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} offers ${item.skill}`;
        list.appendChild(li);
    });
}

loadSkills();
