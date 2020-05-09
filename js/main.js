var colors = [
    ['#ACDB86', '#81C14B'], ['#F8FA8E', '#F5BB00'], ['#F4BCBF', '#D43A43'],['#ECBA82','#ED6A5A'],['#C2E7DA','#6290C3'] 
], circles = [], lang=["CSS","HTML","JS","C++","Py"] ,st =[90,95,70,75,80];

for (var i = 1; i <= 5; i++) {
    var child = document.getElementById('circles-' + i),
        percentage = st[i-1];

    circles.push(Circles.create({
        id:         child.id,
        value:		percentage,
        text:       lang[i-1],
        textClass:  'a',
        duration:   2000,
        radius:     60,
        width:      10,
        colors:     colors[i-1]
    }));
}
AOS.init();
