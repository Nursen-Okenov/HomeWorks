var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br']

var tagCount = [];

for (var i = 0; i < tags.length; i++){
    var tag = tags[i];
    if (tagCount[tag]){
        tagCount[tag]++;
    }
    else {
        tagCount[tag] = 1;
    }
}

console.log(tagCount)