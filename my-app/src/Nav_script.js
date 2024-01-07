const NavScript = () => {
  const A = document.querySelectorAll("ul li a");

  for (let i = 0; i < A.length; i++) {
    A[i].classList.add("inactive");
    A[i].addEventListener("click", (e) => {
      for (let j = 0; j < A.length; j++) {
        if (A[j] !== A[i]) {
          A[j].classList.remove("active");
        }
      }
      A[i].classList.add("active");
    });
  }
};

export default NavScript;
