const counters = document.querySelectorAll(".count");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const see = +counter.innerText;

    const increment = target / 200;

    if (see < target) {
      counter.innerText = `${Math.ceil(see + increment)}`;
      setTimeout(updateCount, 1);
    }
  };
  updateCount();
});
