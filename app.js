const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }
        else{
            entry.target.classList.remove("show")
           
        }
    })
  })
  let elements = document.querySelectorAll(".hidden")
  elements.forEach((el) => observer.observe(el))
  let hidden_lists = document.querySelectorAll(".hidden1")
  hidden_lists.forEach((el1) => observer.observe(el1))