const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const ul = document.querySelector('ul')
const li = document.getElementsByTagName('li')
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
const lowerFruit = fruit.map(x => x.toLowerCase());


//filter out each piece of fruit using the user's keyboard input.
//each filtered piece of fruit is passed through the function liInit as an array
function searchHandler(e) {
	const userValue = e.target.value.toLowerCase();
	console.log(userValue)


	const eachFruit = lowerFruit.filter(function(val){
		if(val.includes(userValue)){
			return true
		} 
		return false
		

	})
	
	liInit(eachFruit)
	if(userValue === ""){
		fruitRemove()
	}
}

/* At the first iteration of a keypress this function does not run. 
It's only until the second key press in which the first set of lis created 
with one character are deleted and replaced with lis created with both characters from the user input an so on  */
function fruitRemove(){
const li = document.querySelectorAll('li')
for(let i = 0; i < li.length; i++){
	li[i].remove()
	}
}

/* When the user clicks on a fruit from the drop down list, the innerHTML of the search bar is replaced with said fruit text. */
function useSuggestion(e) {
	if(e.target.tagName === 'LI') {
		document.getElementById('fruit').value = e.target.innerHTML

		fruitRemove()

	}
}	

/*a new li is created and appended to the parent ul. 
The inner text for each li is each piece of fruit being filtered in the liInit function  */
function fruitAppend(fruitName){
	const fruitList = document.querySelector('ul')
	const fruitLi = document.createElement("li")
	fruitLi.classList.add("dropdown-content")
	fruitLi.innerText = fruitName
	fruitList.appendChild(fruitLi)


}
/*using a for loop to iterate through the filtered fruit array & 
appending each piece of fruit through the fruitAppend function
each key up is dynamically adding and removing lis with the fruitRemove function based off the user's input */
function liInit(filteredFruit){
 fruitRemove()
	for(let i = 0;i < filteredFruit.length; i++){
		fruitAppend(filteredFruit[i])
	}


}

input.addEventListener('keyup', searchHandler);

suggestions.addEventListener('click', useSuggestion,);