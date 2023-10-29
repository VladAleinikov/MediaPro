// slider
let slides = [...document.getElementsByClassName("slides__item")];
const slideLeft = document.getElementById("slide-left");
const slideRight = document.getElementById("slide-right");
const slider = document.getElementById("slider");


const placeSlides = (slides) => {
      slides.map((slide, id) => {
            if (id == 0 || id == slides.length - 1)
                  slide.style.dispaly = "none";
            else
                  slide.style.dispaly = "block";
            slide.style.left = (195 * id) - 195 * 4 + 'px';
      })
}
placeSlides(slides);

slideRight.addEventListener("click", e => {
      slider.removeChild(slides[0]);
      slider.appendChild(slides[0]);
      slides = [...document.getElementsByClassName("slides__item")];
      placeSlides(slides);
})
slideLeft.addEventListener("click", e => {
      slider.removeChild(slides[slides.length - 1]);
      slider.prepend(slides[slides.length - 1]);
      slides = [...document.getElementsByClassName("slides__item")];
      placeSlides(slides);
})


// input range
const sales = document.querySelector("#range-sales")
const salesValue = document.querySelector("#sales-value");
const clients = document.querySelector("#range-clients");
const clientsValue = document.querySelector("#clients-value");
const price = document.getElementById("price");

const countPrice = () => {
      const salesCount = parseInt(salesValue.textContent); // Колличество продаж в месяц
      const clientsCount = parseInt(clientsValue.textContent); // Постоянный процент клиентов

      price.textContent = (salesCount * clientsCount * 1000) + " руб." ; // !!!Сюда вставить формулу
}
sales.addEventListener("input", (event) => {
      const tempSliderValue = event.target.value;
      const progress = (tempSliderValue / sales.max) * 100;
      salesValue.textContent = tempSliderValue;
      salesValue.style.left = `calc((100% - 40px) * ${progress/100} + 12px)`
      sales.style.background = `linear-gradient(to right, #ff0000 ${progress}%, #fff ${progress}%)`;
      countPrice();
})
clients.addEventListener("input", (event) => {
      const tempSliderValue = event.target.value;
      const progress = (tempSliderValue / clients.max) * 100;
      clientsValue.textContent = tempSliderValue;
      clientsValue.style.left = `calc((100% - 40px) * ${progress / 100} + 9px)`
      clients.style.background = `linear-gradient(to right, #ff0000 ${progress}%, #fff ${progress}%)`;
      countPrice();
})


// modal
const openModal = [...document.getElementsByClassName("open-modal")];
const body = document.body;
const modal = document.getElementById("modal");
const modalBg = document.getElementById("modal-bg");
const closeModal = document.getElementById("close-modal");

const toggleModal = () => {
      body.classList.toggle("hide");
      modal.classList.toggle("active");
      modalBg.classList.toggle("active");
}
openModal.map(item => item.addEventListener("click", e => {
      toggleModal();
}))
modalBg.addEventListener("click", e => {
      e.preventDefault();
      toggleModal();
})
closeModal.addEventListener("click", e => {
      toggleModal();
})