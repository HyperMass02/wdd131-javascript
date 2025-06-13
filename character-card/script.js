const character = {
      name: "~ Muffin ~",
      class: "Steampunk Cat",
      level: 5,
      health: 100,
      image: 'c02d4ea9-3351-4c1e-ac1b-d6c33d5b5b80.jpg',
      attacked() {
        if (this.health >= 20) {
          this.level -= 1;
          this.health -= 20;
        } else {
            alert('Character Died');
        }
      },
      levelUp() {
        this.level += 1;
        this.health += 20;
      }
    };
      document.getElementsByClassName("name")[0].innerText = character.name;
      document.getElementById("class").innerText = character.class;
      document.getElementById("class").innerText = character.class;
      document.getElementById("level").innerText = character.level;
      document.getElementById("health").innerText = character.health;

document.getElementById("attacked").addEventListener("click", function() {
    result = character.attacked()
    document.getElementById("level").innerText = character.level;
    document.getElementById("health").innerText = character.health;
});

document.getElementById("levelup").addEventListener("click", function() {
    result1 = character.levelUp()
    document.getElementById("health").innerText = character.health;
    document.getElementById("level").innerText = character.level;
});
