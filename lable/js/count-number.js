const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");
let activated = false;

window.addEventListener("scroll", () => {
    if (window.pageYOffset > container.offsetTop - container.offsetHeight - 200 && !activated) {
        counters.forEach(counter => {
            counter.innerText = 0;
            let count = 0;
            function updateCount() {
                const target = parseInt(counter.dataset.count);
                if (count < target) {
                    count++;
                    counter.innerText = count;
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target;
                }
            }
            updateCount();
        });
        activated = true;
    } else if ((window.pageYOffset > container.offsetTop - container.offsetHeight - 500 || window.pageYOffset === 0) && activated) {
        counters.forEach(counter => {
            counter.innerText = 0;
        });
        activated = false;
    }
});
