const recipes = document.querySelector(".recipes");
let listofRecipes = document.querySelectorAll(".grid-container");
let listofContents = document.querySelectorAll(".recipe");
const btn=document.querySelector("#addRecipe");

const listOfRemoveButtons=document.querySelectorAll(".btn-remove");
listOfRemoveButtons.forEach(btn =>
    btn.addEventListener("click", e=>{
        e.stopPropagation();
        recipes.removeChild(btn.parentNode);
    })
);

const listOfShowButtons=document.querySelectorAll(".btn-show");
var tracker="1";
listOfShowButtons.forEach(btn =>{
    btn.addEventListener("click",()=>{
        if(tracker=="1")
        {
            btn.parentNode.style.height="auto";
            btn.parentNode.children[2].children[1].style.display="block";
            btn.parentNode.children[2].children[2].style.display="block";
            btn.innerHTML= '<i class="fa fa-arrow-up"></i>' 
            tracker="0";
            
           
        }
            listOfShowButtons.forEach(btn2 => {
            btn2.addEventListener("click", ()=>{
   
               if(btn==btn2)
               {   if(tracker=="0")
                   {
                       btn.parentNode.style.height="400px";
                       btn.parentNode.children[2].children[1].style.display="none";
                       btn.parentNode.children[2].children[2].style.display="none";
                       btn.innerHTML= '<i class="fa fa-arrow-down"></i>' ;
                       tracker="1";
                   }
   
                   else
                   {
                        btn.parentNode.style.height="auto";
                        btn.parentNode.children[2].children[1].style.display="block";
                        btn.parentNode.children[2].children[2].style.display="block";
                        btn.innerHTML= '<i class="fa fa-arrow-up"></i>' ;
                        tracker="0";
                   }
                   
               }
               else if (btn != btn2) 
                {
                    btn.parentNode.style.height="400px";
                    btn.parentNode.children[2].children[1].style.display="none";
                    btn.parentNode.children[2].children[2].style.display="none";
                    btn.innerHTML= '<i class="fa fa-arrow-down"></i>';
                    btn2.parentNode.style.height="auto";
                    btn2.parentNode.children[2].children[1].style.display="block";
                    btn2.parentNode.children[2].children[2].style.display="block";
                    btn2.innerHTML= '<i class="fa fa-arrow-up"></i>' ;
                }
                
            });
          });
    })
})

imageData = [
    [
        {
            src: "przepis1.jpg",
        },
        {
            src: "przepis1.2.jpg",
        }
    ],
    [
        {
            src: "przepis2.jpg",
        },
        {
            src: "przepis2.2.jpg",
            
        }
    ],
    [
        {
            src: "przepis3.jpg",
        },
        {
            src: "przepis3.2.jpg",
        }
    ],
    [
        {
            src: "przepis4.jpg",
        },
        {
            src: "przepis4.2.jpg",
        }
    ],
    [
        {
            src: "przepis5.jpg",
        },
        {
            src: "przepis5.2.jpg",
            
        }
    ],
    [
        {
            src: "przepis6.jpg",
        },
        {
            src: "przepis6.2.jpg",
        }
    ],
    [
        {
            src: "przepis7.jpg",
        },
        {
            src: "przepis7.2.jpg",
        }
    ],
    [
        {
            src: "przepis8.jpg",
        },
        {
            src: "przepis8.2.jpg",
            
        }
    ],
    [
        {
            src: "przepis9.jpg",
        },
        {
            src: "przepis9.2.jpg",
        }
    ],
    [
        {
            src: "przepis10.jpg",
        },
        {
            src: "przepis10.2.jpg",
            
        }
    ],
    [
        {
            src: "przepis11.jpg",
        },
        {
            src: "przepis11.2.jpg",
            
        }
    ],
    [
        {
            src: "przepis12.jpg",
        },
        {
            src: "przepis12.2.jpg",
            
        }
    ],
];

var tracker_img="1";
for(let i=0; i< listOfShowButtons.length; i++)
{
    
    listOfShowButtons[i].addEventListener("click", ()=>
    {   if(tracker_img=="1")
        {
            listOfShowButtons[i].parentNode.children[1].style.transition='0.8s';
            listOfShowButtons[i].parentNode.children[1].style.opacity=0;
            setTimeout(function(){
                listOfShowButtons[i].parentNode.children[1].src=imageData[i][1].src;
            },700);
            setTimeout(function(){
                listOfShowButtons[i].parentNode.children[1].style.transition='3s';
                listOfShowButtons[i].parentNode.children[1].style.opacity=1;
            },700);
            tracker_img="0";
        }
           
        for(let j=0; j< listOfShowButtons.length; j++){
            listOfShowButtons[j].addEventListener("click", ()=>{
                if (j == i) 
                {   
                    if(tracker_img=="0")
                    {
                        listOfShowButtons[i].parentNode.children[1].style.transition='0.8s';
                        listOfShowButtons[i].parentNode.children[1].style.opacity=0;
                        setTimeout(function(){
                            listOfShowButtons[i].parentNode.children[1].src=imageData[i][0].src;
                        },700);
                        setTimeout(function(){
                            listOfShowButtons[i].parentNode.children[1].style.transition='3s';
                            listOfShowButtons[i].parentNode.children[1].style.opacity=1;
                        },700);
                        //listOfShowButtons[i].parentNode.children[1].src=imageData[i][0].src;
                        tracker_img="1";
                    }
                    else
                    {
                        listOfShowButtons[i].parentNode.children[1].style.transition='0.8s';
                        listOfShowButtons[i].parentNode.children[1].style.opacity=0;
                        setTimeout(function(){
                            listOfShowButtons[i].parentNode.children[1].src=imageData[i][1].src;
                        },700);
                        setTimeout(function(){
                            listOfShowButtons[i].parentNode.children[1].style.transition='3s';
                            listOfShowButtons[i].parentNode.children[1].style.opacity=1;
                        },700);
                        //listOfShowButtons[i].parentNode.children[1].src=imageData[i][1].src;
                        tracker_img="0";
                    }
                }  
                else if(i!=j)
                {
                    listOfShowButtons[i].parentNode.children[1].src=imageData[i][0].src;
                    listOfShowButtons[j].parentNode.children[1].style.transition='0.8s';
                        listOfShowButtons[j].parentNode.children[1].style.opacity=0;
                        setTimeout(function(){
                            listOfShowButtons[j].parentNode.children[1].src=imageData[j][1].src;
                        },700);
                        setTimeout(function(){
                            listOfShowButtons[j].parentNode.children[1].style.transition='3s';
                            listOfShowButtons[j].parentNode.children[1].style.opacity=1;
                        },700);
                }    
            });
        }
    });
       
}
$(document).ready(function(){
    $(".form").hide();
});

var formTracker="0"
$(document).ready(function(){
    $(".add-button").click(function(){
        if(formTracker=="0"){
            $(".form").show(600).animate({right:'0%'},600);
            $(".add-button").animate({right:'26%'},600);
            formTracker="1"; 
        }
        else{
            $(".form").animate({right:'-26%'},600);
            setTimeout(($("form").hide),1000);
            $(".add-button").animate({right:'0%'},600);
            formTracker="0";
        }   
    })     
});

const submit=document.querySelector("#submitBtn").addEventListener("click", e=>
{
    
    const form=document.getElementById("form");
    const isValidForm=form.checkValidity();
    const nazwa=document.querySelector("#nazwa");
    const opis=document.querySelector("#opis");
    const skladniki=document.querySelector("#skladniki");
    const url1=document.querySelector("#url1");


    if (!isValidForm) return;

    addRecipe(nazwa.value, url1.value,opis.value,skladniki.value);

    opis.value= "";
    nazwa.value= "";
    skladniki.value= "";
    url1.value= "";

    
    e.preventDefault();
    $(".form").animate({right:'-26%'},600);
    setTimeout(($("form").hide),1000);
    $(".add-button").animate({right:'0%'},600);
});


function addRecipe(nazwa,url1,opis, skladniki){

    let listOfSteps=opis.split("/");
    listOfSteps=listOfSteps.map(steps => steps.trim()); 

    let listOfIngredients=skladniki.split(",");
    listOfIngredients=listOfIngredients.map(ing => ing.trim());

    let recipe=document.createElement("div");
    recipe.classList.add("grid-container");

    let btn=document.createElement("button");
    btn.classList.add("btn-remove");
    btn.innerHTML = '<i class="fa fa-trash"></i>';
    btn.addEventListener("click", ()=>
    {
        recipes.removeChild(btn.parentNode);
    });
    recipe.appendChild(btn);

    let img1=document.createElement("img");
    img1.src=url1; 
    recipe.appendChild(img1);

    let content=document.createElement("div");
    recipe.appendChild(content);

    // div's elements
    let h2=document.createElement("h2");
    h2.classList.add("nazwa");
    h2.innerHTML=nazwa;
    content.appendChild(h2);

    let h3=document.createElement("h3");
    h3.innerHTML="Przygotowanie:";
    content.appendChild(h3);

    const ul=document.createElement("ul");
    listOfSteps.forEach((steps,index)=>
    {
        const li=document.createElement("li");
        li.innerHTML=steps;
        if(index<6)
        ul.appendChild(li);
    })
    content.appendChild(ul);

    let h4=document.createElement("h4");
    h4.innerHTML=("Składniki");
    ul.appendChild(h4);

    const ul1=document.createElement("ul");
    listOfIngredients.forEach((ing,index)=>
    {
        const li1=document.createElement("li");
        li1.innerHTML=ing;
        if(index<6)
        ul1.appendChild(li1);
    })
    ul.appendChild(ul1);

    let btn2=document.createElement("button");
    btn2.classList.add("btn-show");
    btn2.innerHTML = '<i class="fa fa-arrow-down"></i>';
    var showTracker="1"
    btn2.addEventListener("click",()=>{
        if(showTracker=="1"){
            btn2.parentNode.style.height="auto";
            btn2.parentNode.children[2].children[1].style.display="block";
            btn2.parentNode.children[2].children[2].style.display="block";
            btn2.innerHTML= '<i class="fa fa-arrow-up"></i>' ;
            showTracker="0";
        }
        else{
            btn2.parentNode.style.height="400px";
            btn2.parentNode.children[2].children[1].style.display="none";
            btn2.parentNode.children[2].children[2].style.display="none";
            btn2.innerHTML= '<i class="fa fa-arrow-down"></i>' ;
            showTracker="1"  
        }
    })
    recipe.appendChild(btn2);
    listofRecipes = [...listofRecipes, recipe];
    recipes.appendChild(recipe);
}

