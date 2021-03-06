'use strict';

var data = [{
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


for (var i of data) {
    console.log(i);
    //create boxes
    var box = document.createElement('div');
    document.body.appendChild(box);
    //add ids to boxes
    box.id = i.id;
    //add headders
    var header = document.createElement('header');
    //add titles to headders
    header.innerText = i.title;
    box.appendChild(header);
    // add content to boxes
    box.innerHTML += i.content;
    //add classes to boxes
    box.className = i.categories.join(' ');
}