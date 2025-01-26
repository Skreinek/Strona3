    const p=document.getElementsByClassName("Przycisk");
    const x=document.getElementsByClassName("start")[0];
    const z=document.getElementsByClassName("Znikanie");
    const v=document.getElementsByClassName("Napisy");
    const g=document.getElementById("Gra");
    const q=document.getElementById("Q1");
    const T0=document.getElementsByClassName("Text1")[0];
    const T1=document.getElementsByClassName("Text1")[2];
    const T4=document.getElementById("Text4");
    const pro=document.getElementById("Pro");
    let liczba = Math.floor((Math.random() * 9999) + 1000); 

    for(let a=0; a<5; a++){
            p[a].addEventListener("click", start);
            p[a].addEventListener("click", dzwiek);
            p[a].addEventListener("animationend", trudnosc);
        }
        
        function start(){
        
        
        
        p[0].style.animationPlayState = "running";
        p[2].style.animationPlayState = "running";
        

        x.style.animationPlayState = "running";
        
        for(let a=0; a<3; a++){
            z[a].style.animationName = "znikanie";
            z[a].style.animationPlayState = "running";
        }
        v[0].style.animationIterationCount= "1";
        v[1].style.animationIterationCount= "1";

        for(let a=0; a<3; a++){
            p[a].style.backgroundImage="linear-gradient(#f39020,#a76316)";
            p[a].style.animationName = "start";
            p[a].style.animationDuration= "1s";
            p[a].style.animationTimingFunction="ease-out";
            p[a].style.animationPlayState = "running";
            p[a].style.pointerEvents= "none";
        }
        for(let a=0; a<3; a++){
            p[a].removeEventListener("click", start);
        }
        
       }
    
       function trudnosc(){
        for(let a=0; a<3; a++){
            p[a].style.animationName = "znikanie";
            p[a].style.animationPlayState = "running";
            p[a].style.animationDirection = "reverse";
            p[a].style.display = "inline-block";
            p[a].style.animationTimingFunction="ease-in";
            a++;

            

        }
        
        T0.style.animationName = "znikanie";
        T0.style.animationDirection = "reverse";
        T0.innerHTML="WYBIERZ POZIOM GRY";

        p[0].style.backgroundImage="linear-gradient(#20f34e,#16a735)";
        p[2].style.backgroundImage="linear-gradient(#f04040,#9e2b2b)";
        p[1].innerHTML="SREDNI";
        p[1].style.animationName = "start";
        p[1].style.animationDuration = "2.5s";
        p[1].style.animationPlayState = "running";
        p[1].style.animationDirection = "reverse";
        p[1].style.animationTimingFunction="(1.000, 0.010, 1.000, 0.265)";
        
        for(let a=0; a<3; a++){
            p[a].removeEventListener("click", start);
            p[a].addEventListener("click", dzwiek2);
            p[a].style.pointerEvents= "auto";
            p[a].addEventListener("click", function () {
                gra(a);});
            p[a].removeEventListener("animationend", trudnosc);
        }

        x.style.animationName = "start_animacja2, shake, pudlo, disp"
        x.style.animationPlayState = "paused, paused, paused, paused";
        x.style.animationDuration = "2s"; //
        x.style.animationIterationCount = "1, 6, 1, 1";
        x.style.animationDelay = "0s, 0s, 0s 6.5s";
        x.style.animationTimingFunction = "cubic-bezier(0.415, 1.275, 1.000, -0.600)";
    }

    function animacja(){
        g.style.display="inline-block";
        g.style.animationName = "pudlo2"
        g.style.animationPlayState = "running";
        g.style.animationDuration = "1s";
    }
    function gra(poziom){
        
        const tab = [];

        
        setInterval(function () {
            T0.innerHTML = Math.floor((Math.random() * 9999999) + 1000000);}, 5);
        
        
        for(let a=0; a<3; a++){
            p[a].removeEventListener("click", gra);
            p[a].style.display = "none";
            p[a].removeEventListener("click", dzwiek2);
            }
        
            p[4].removeEventListener("click", dzwiek);
            p[3].removeEventListener("click", dzwiek);
            p[3].addEventListener("click", dzwiek6);
        
            x.style.animationPlayState = "running";
            x.addEventListener("animationend", animacja);
            p[4].addEventListener("click", function () { enter(liczba, poziom);});
            p[3].addEventListener("click", function () { pomoc(poziom, tab[1], tab[2], tab[3]);});
            q.addEventListener('input', function () { this.value = this.value.replace(/[^0-9]/g, '');});


             tab[0] = Math.floor(liczba/1000);
             tab[1] = Math.floor(liczba/100 - tab[0]*10);
             tab[2] = Math.floor(liczba/10 - tab[0]*100 - tab[1]*10);
             tab[3] = Math.floor(liczba - tab[0]*1000 - tab[1]*100 - tab[2]*10);
            
            if(poziom==0){
                T4.innerHTML="? ?";
                q.maxLength ="2";
            }
                
            else if(poziom==1){
                T4.innerHTML="? ? ?";
                q.maxLength ="3";
            }
                
            else{
                T4.innerHTML="? ? ? ?";
                q.maxLength ="4";
            }
        }
    
    function enter(liczba, poziom){

        let wygrana = false;
        let r = 0;
        let num = 0;
        
        switch(poziom){
            case 0:
                
                r=10;
                num = Math.floor(liczba/100);

                if(q.value == num)
                    wygrana=true;
                else if(q.value > num)
                    T1.innerHTML="JEST MNIEJSZA";
                else
                    T1.innerHTML="JEST WIĘKSZA";
                    break;
            case 1:

                r=50;
                num = Math.floor(liczba/10);

                if(q.value == num)
                    wygrana=true;
                else if(q.value > num)
                    T1.innerHTML="JEST MNIEJSZA";
                else
                    T1.innerHTML="JEST WIĘKSZA";
                    break;

            case 2:

                r=100;
                num=liczba;

                    if(q.value == num)
                    wygrana=true;
                else if(q.value > num)
                    T1.innerHTML="JEST MNIEJSZA";
                else
                    T1.innerHTML="JEST WIĘKSZA";
                    break;
    
        }
            
            if(Math.abs(num-q.value) <= r){
                pro.style.animationName = "zielony";
                pro.style.animationPlayState = "running";
                pro.style.animationFillMode = "forwards";
                pro.style.animationDuration = "1s";

            }
            else if((Math.abs(num-q.value) > r)&&(Math.abs(num-q.value) <= 4*r)){
                pro.style.animationName = "zolty";
                pro.style.animationPlayState = "running";
                pro.style.animationFillMode = "forwards";
                pro.style.animationDuration = "1s";
            }
            else{
                pro.style.animationName = "czerwony";
                pro.style.animationPlayState = "running";
                pro.style.animationFillMode = "forwards";
                pro.style.animationDuration = "1s";
            }
        
            if(wygrana==true){
                T4.innerHTML="Gratuluje, zgadles";
                setTimeout(() => {location.reload();}, 2000);
                dzwiek4();
            }
            else
            dzwiek5();
            




    }
    function pomoc(poziom, l2, l3, l4){
        
        
        if(poziom==0){
            T4.innerHTML="? " + l2;
            
        }
            
        else if(poziom==1){
            T4.innerHTML="? ? " + l3;
        
        }
            
        else{
            T4.innerHTML="? ? ? " + l4;

        }

        p[3].style.animationName = "znikanie"
        p[3].style.animationPlayState = "running";
        p[3].style.animationDuration = "1s";
        p[3].style.animationIterationCount = "1";
        p[3].style.animationDirection = "normal";
        p[3].style.animationFillMode = "forwards";
        p[3].removeEventListener("click", function () { pomoc(poziom, tab[1], tab[2], tab[3]);});
        p[3].removeEventListener("click", dzwiek6);
        


    
    
            
    }
    function dzwiek(){
        var audio = document.getElementById("audio");
        audio.play();
    }
    function dzwiek2(){
        var audio = document.getElementById("audio2");
        var audio2 = document.getElementById("audio3");
        audio.play();
        audio.onended = function(){audio2.play();}
    }
    function dzwiek4(){
        var audio = document.getElementById("audio4");
        audio.play();
    }
    function dzwiek5(){
        var audio = document.getElementById("audio5");
        audio.play();
    }
    function dzwiek6(){
        var audio = document.getElementById("audio6");
            audio.play();


    }
    