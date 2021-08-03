var favoriteBook = '4 hour work week';
var bookList = ['Eloquent Javascript', 'Javascript Cookbook', 'Javascript: Novice to Ninja', '50 Projects in Javascript', 'The Godfather', 'I am Pilgrim', 'Hooked'];

console.log(bookList);
var index = 0;
var arraySize = bookList.length;
//console.log(arraySize);
while(index < arraySize){
    if(bookList[index] == 'The Godfather'){
        bookList[index] = favoriteBook;
        break;
    }
    else
        index++;        
}
console.log(bookList);

for(index=0; index<bookList.length; index++){
    if(bookList[index] == 'Hooked')
        console.log('I am hooked');
}
