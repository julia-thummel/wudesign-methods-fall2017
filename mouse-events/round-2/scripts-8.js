function getRandomColor() {
   var letters = '0123456789ABCDEF';
   var color = '#F';
   for (var i = 0; i < 5; i++) {
     color += letters[Math.floor(Math.random() * 16)];
   }
    return color;
   };



var no = 1, $m = $(".main_div"), size = 712;

$m.click(function(){
    no++;
    var i, _no = no * no, _size = size/no;
    $m.empty();

    for(i=0; i<_no; i++)
        $m.append(
            $('<div title='+ i +'/>')
            .css("background-color", getRandomColor({hue: 'blue'}))
        );

    $m.find('> div').css({ width:_size, height:_size });

});
