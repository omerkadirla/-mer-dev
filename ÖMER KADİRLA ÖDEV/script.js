document.getElementById("Ulke").addEventListener("change",yer)
let sonuc = document.getElementById("sonucBaslık")

function yer(){
      sonuc.classList.remove("ABD","TR","UK","RUS","normal")
      let ulke=document.getElementById("Ulke").selectedIndex

      if(ulke==1){
      sonuc.innerHTML="Nüfus:350 milyon"
      sonuc.classList.add("ABD")
      document.getElementById("logo").setAttribute("src","amerika.png")

      }
      if(ulke==2){
        sonuc.innerHTML="Nüfus:81 milyon"
        sonuc.classList.add("TR")
        document.getElementById("logo").setAttribute("src","turkiye.png")
  
        }
        if(ulke==3){
            sonuc.innerHTML="Nüfus:44 milyon"
            sonuc.classList.add("UK")
            document.getElementById("logo").setAttribute("src","ukrayna.png")
      
            }
      
            if(ulke==4){
                sonuc.innerHTML="Nüfus:144 milyon"
                sonuc.classList.add("RUS")
                document.getElementById("logo").setAttribute("src","rusya.png")
          
                }
               console.log(ulke);
            }
            function merhaba(){
                  let ad

                ad=document.getElementById("txtad").value
            }
