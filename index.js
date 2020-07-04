// local reviews 
const reviews = [
        {
            id : 1,
            name : "Pankaj Mahor",
            job : "Web developer",
            img : "https://miro.medium.com/max/2560/1*gBQxShAkxBp_YPb14CN0Nw.jpeg",

            text :
                "lorem ipsum dolor , sit amet constectuar adipsing  lit. lure repredegerjit ducims acere reprepelpr necceeseeribus nstrum cum illio veilt? sint haram",
        },
        {
            id : 2,
            name : "Jonny Deeo",
            job : "Web Designer",
            img : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",

            text :
                "It is a long establithe readable content of a page  The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English"
        },
        {
            id : 3,
            name : "Meow katty",
            job : "Web Backend",
            img : "https://images.indianexpress.com/2019/04/cat_1200getty.jpg",

            text :
            "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy"
        },
        {
            id : 4,
            name : "Goya PeeP",
            job : "Web Tester",
            img : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg",

            text :
            "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

// Buttons

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item 

let currentItem = 0;

window.addEventListener("DOMContentLoaded",function(){
    showPerson();
});

function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;

}


//SHow Next item 

nextBtn.addEventListener("click",function(){
    currentItem++;
    if(currentItem > reviews.length-1){
        currentItem = 0;
    }
    showPerson();
});


/// Show previous 

prevBtn.addEventListener("click",function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length-1;
    }
    showPerson();
});

//Show Random Person 

randomBtn.addEventListener("click",function(){
    currentItem = Math.floor(Math.random()*reviews.length);;
    showPerson();
});