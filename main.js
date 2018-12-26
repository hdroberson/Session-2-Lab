alert('Hello!')


// gives you the area of a triangle
alert('Lets find out the area of a Triangle')
var h,b,area;
h=parseFloat(prompt('enter height'));
b=parseFloat(prompt('enter base'));
area=(b*h)/2;
document.write('Triangle'+'<br>');
document.write('Height = '+h+'<br>');
document.write('Base = '+b+'<br>');
document.write('Area of the Triangle is '+area+'<br>'+'<br>');

// gives you the area of a circle
alert('Now get the area of a Circle')
var r,pi,area;
r=parseFloat(prompt('enter the radius.'));
pi=3.14;
area=pi*r*r;
document.write('Circle'+'<br>');
document.write('Area of the Circle is '+area+'<br>'+'<br>');

// gives you the area of a rectangle
alert('Now the area of a Rectangle')
var l,w,area;
l=parseFloat(prompt('enter length'));
w=parseFloat(prompt('enter width'));
area=l*w;
document.write('Rectangle'+'<br>');
document.write('Length = '+l+'<br>');
document.write('Width = '+w+'<br>');
document.write('Area of the Rectangle is '+area+'<br>'+'<br>');

// gives you the area of a trapezoid
alert('Lets find out the area of a Trapezoid')
var b1,b2,h,area;
b1=parseFloat(prompt('enter length of base 1'));
b2=parseFloat(prompt('enter length of base 2'));
h=parseFloat(prompt('enter height'));
area=(b1+b2)*h/2;
document.write('Trapezoid'+'<br>');
document.write('b1 = '+b1+'<br>');
document.write('b2 = '+b2+'<br>');
document.write('h = '+h+'<br>');
document.write('Area of the Trapezoid is '+area);