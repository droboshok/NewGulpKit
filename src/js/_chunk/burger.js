
        menuToggle();
    
        function menuToggle() {
            document.querySelector(".burger").onclick = function() {
                document.querySelector(".burger").classList.toggle("active")
                document.querySelector(".header__nav").classList.toggle("active")
                console.log(this);
                document.querySelector("body").classList.toggle("lock")
            };

        }
