### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

### Anser -1
Firstable getElementById just onley take Id, don't  take other items,
secondly getElementByClassName take all class in whole  document body, if is similar,
thirdly querySlector take  class or id and tagname but if you want to catch class or id you have to write .(className) and #(idname) this is way you have to write,
finally  qureySelectorAll take similar all tageName or .className and #id 
so we can say that there are many differen betweem getElementById, getElementsByClassName, and querySelector / querySelectorAll select all items;
### Anser -2
firstabe I take new  Element tag Name,  then this tag hold a variabel then write such as code
 const p =document.creatElemet('p'),
 p.innerText='now write any text';
 
 const stor =document.getElemtById('btn') //in this line is whene i want to hold new creat element; then;
 
 stor.appearedChild(p), in this way i creat dom element |

### Anser -3
Event Bubbling is trigger , trigger means that we  click a button but want to take access other element or div whene bubbling firstabe goback her parent elemet and if here did't fine right element then goback her parents eleme finally he find to her current element and giv currect access so Bubblin goback bottom to top ,

### Anser -4
Event Delegation is javascript mathod where instead of attaching event listener to multiple child element this situation to need event delegation in this way we can event listener to set parent element then we can access child elemen for this reasorn ,we don't need to set every child event listener add , 

### Anser -5
preventDefault() is when button in form bottom so normally this button to do behaviou  type is submit button so if we don't it then we will use preventDefautl(), this mathod don't repres page
 and stopPropagation() using by stop event bubling then no more go ahead ;
