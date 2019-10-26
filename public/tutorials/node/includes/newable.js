// create an JSON object so the app can use 
module.exports = {
    "word": "hello world", 
    "number": 5, 
    "function": function(){
        console.log(this.word); 
    }
}