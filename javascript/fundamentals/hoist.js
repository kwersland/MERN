// 1

console.log(hello);                                   
var hello = 'world';
// Hoist 1
var hello;
console.log(hello); //logs undefined                                 
hello = 'world'; 

// 2
var needle = 'haystack';
test(); //called before it's defined
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// Hoist 2
var needle = 'haystack';
function test(){
    var needle = 'magnet';
    console.log(needle); 
}
test();//logs magnet


// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
} //function is never called
console.log(brendan); //logs 'super cool'

// 4
var food = 'chicken';
console.log(food); //logs 'chicken'
eat(); //function called before it is defined
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// Hoist 4
var food = 'chicken';
console.log(food); //logs 'chicken'
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone'
}
eat(); //logs half-chicken


// 5
mean();//mean is not defined yet
console.log(food);//undefined
var mean = function() {
    food = "chicken";
    console.log(food);//chicken
    var food = "fish";
    console.log(food);//fish
}
console.log(food);//undefined

// Hoist 5
console.log(food);//undefined
var mean = function() {
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
mean();//logs chicken and fish
console.log(food);//undefined


//6
console.log(genre); //undefined
var genre = "disco";
rewind(); //undefined function
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre); //log "disco"

//Hoist 6
var genre;
console.log(genre); //undefined
genre = "disco";
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
rewind(); //logs rock and r&b
console.log(genre); //logs "disco"

// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//Hoist 7
var dojo = "san jose";
console.log(dojo);//logs san jose
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
learn();//logs seattle and burbank
console.log(dojo); //logs san jose


// 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return
}

//Hoist 8
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo.business = "closed for now";
    }
    return dojo
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
    


