const names = [
  "Joker",
  "Clown Prince",
  "The Jester",
  "Agent of Chaos",
  "King of Gotham",
  "Mistah J",
];

let current = 0;

function changeName() {
  const title = document.getElementById("joker-title");

  gsap.to(title, {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      current = (current + 1) % names.length;
      title.textContent = names[current];
      gsap.to(title, {
        opacity: 1,
        duration: 0.5,
      });
    },
  });
}

// Initial fade-in (optional)
gsap.from("#joker-title", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

// Change every 3 seconds
setInterval(changeName, 3000);
