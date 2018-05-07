(function(){

  var data = [
  	{
  		id: 'box1',
  		title: 'First box',
  		content: '<p>Lorem ipsum dolor sit amet!</p>',
  		categories: ['highlighted', 'special-header', 'important']
  	},
  	{
  		id: 'box2',
  		title: 'Second box',
  		content: '<p>Lorem ipsum dolor sit amet!</p>',
  		categories: ['special-header', 'important']
  	},
  	{
  		id: 'box3',
  		title: 'Third box',
  		content: '<p>Lorem ipsum dolor sit amet!</p>',
  		categories: ['highlighted', 'important']
  	},
  	{
  		id: 'box4',
  		title: 'Fourth box',
  		content: '<p>Lorem ipsum dolor sit amet!</p>',
  		categories: ['highlighted']
  	},
  	{
  		id: 'box5',
  		title: 'Fifth box',
  		content: '<p>Lorem ipsum dolor sit amet!</p>',
  		categories: []
  	},
  ];

  var container = document.getElementById('container');

  for (let box of data) {
    var div = document.createElement('div');
    var header = document.createElement('header');
    header.textContent = box.title;
    div.id = box.id;
    // add all classes from the categories table
    for (let className of box.categories) {
      div.classList.add(className);
    }
    // add header element to the div
    div.appendChild(header);
    // add p text from the content property
    div.innerHTML += box.content;
    // add the div to the div.container
    container.appendChild(div);
  }


}());
