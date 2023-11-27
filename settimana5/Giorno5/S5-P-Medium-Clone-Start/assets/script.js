    const button = document.querySelector("nav button");
    const header = document.querySelector("header");



     window.addEventListener("scroll", function () {
      // Ottenere le dimensioni e la posizione dell'header e del titolo
        const headerRect = header.getBoundingClientRect();
        const titoloRect = document.querySelector(".titolo").getBoundingClientRect();

        // Calcolare la percentuale di visibilità del titolo rispetto all'header
        const visibilityPercentage = ((titoloRect.bottom - headerRect.bottom) / titoloRect.height) * 100;
  
       // Verifica se l'header ha raggiunto la base del titolo
      if (visibilityPercentage<20) {
         button.classList.add("bottoneVerde")
         header.classList.add("sfondoBianco");
       } else {
         button.classList.remove("bottoneVerde");
         header.classList.remove("sfondoBianco");
        //  button.classList.add("bottoneNero")
        //  header.classList.add("sfondoGiallo");


     }
     });
  
  /*
        const button = document.querySelector("nav button");
        const header = document.querySelector("header");
      
        window.addEventListener("scroll", function () {
          // Ottenere le dimensioni e la posizione dell'header e del titolo
          const headerRect = header.getBoundingClientRect();
          const titoloRect = document.querySelector(".titolo").getBoundingClientRect();
      
          // Calcolare la percentuale di visibilità del titolo rispetto all'header
          const visibilityPercentage = ((titoloRect.bottom - headerRect.bottom) / titoloRect.height) * 100;
      
          // Applicare gradualmente lo stile del bottone
          button.style.backgroundColor = `rgba(0, 128, 0, ${visibilityPercentage / 100})`;
          button.style.color = visibilityPercentage > 50 ? "white" : "black";
        });
    ;
    */