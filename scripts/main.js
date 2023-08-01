// --------------------------------------
//plants array
// ------------------------------------

const arrPlants = [
    {
        "name": "Ficus tree",
        "Price": 350,
        "description": "blah blH BLh",
        "image": "plant1.png"
    },
    {
        "name": "White sprite succulent",
        "Price": 350,
        "description": "blah blH ",
        "image": "plant2.png"
    },
    {
        "name": "Snake plant",
        "Price": 350,
        "description": "blah BLh",
        "image": "plant3.png"
    },
    {
        "name": "Parlour palm",
        "Price": 350,
        "description": "blah bl",
        "image": "plant4.png"
    },
    {
        "name": "Japanese maple",
        "Price": 350,
        "description": "blah blH BLh",
        "image": "plant5.png"
    }
];





// ---------------------------
// When the document loads
// ---------------------------

$(document).ready(function(){

    console.log("hello");

    // --------------------------------
    //Home Page


    //When the hero image loads, animate it upwards
    $(".hero-image").animate({top: '-=100px'})

   

// ------------------------------------
//Browse Page

$("#descriptiontext").hide();
loadPlants();

$("#removeone").click(function(){
    $("#one").hide();
})

$("#removetwo").click(function(){
    $("#two").hide();
})

$("#removethree").click(function(){
    $("#three").hide();
})

    
});


// ---------------------------

//load all plants

// ---------------------------

function loadPlants() {
console.log("log");



//loop throught the list of plants
for (let i = 0; i < arrPlants.length; i++) {
    const plant = arrPlants[i];

    console.log(plant);

    // 1: select the plants containter and add the current array plant to it
    $("#plantsContainer").append($("#plantCardTemplate").html())

    // 2: create a variable that contains the most recently added plant card
    let currentChild = $("#plantContainer").children().eq(i)

    //3: set the content for the current plant card from the plants list array
    $(currentChild).find("nameText").text("Hello");

}
}



// ---------------------------

//when the card is clicked

// ---------------------------
$(".card").click(function() {
  

    //toggle the price and description text
    $("#pricetext").toggle();
    $("descriptiontext").toggle();

    //resize the image to fit additional content
    $(".card-img-top").toggleclass("small");
})