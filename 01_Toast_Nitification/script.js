const notications = document.querySelector(".notications"),
buttons = document.querySelectorAll(".buttons .btn");

const createToast = (id) => {
  const toast = document.createElement("li");
  toast.className = `toast ${id}`;
  toast.innerHTML = ` <div class="column">
                <i class="fa-solid fa-circle-check"></i>
                <span>Success: This is a success toast.</span>
            </div>
            <i class="fa-solid fa-xmark"></i>`;
    notications.appendChild(toast)            
};

buttons.forEach((btn) => {
  btn.addEventListener("click", () => createToast(btn.id));
});
