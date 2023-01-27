var each = function (coll,func){
    if (Array.isArray(coll)){
        for (var i =0;i<coll.length;i++){
        func(coll[i],i)
    }
    }
    else {
        for (var key in coll){
            func(coll[key],key)
        }
    }
}

var filter = function(array,predicate){
    var acc = [];
    each(array,function(e,i){
        if (predicate(e,i)){
            acc.push(e)
        }
    })
    return acc;
    }

var menu =[{nameOfMeal:"sandwich1",
            price:5.500,
        imgSrc:"assets\img\kakrout kafteji.jpeg"},
            {nameOfMeal:"sandwich2",
              price:4.800,
            imgSrc:"assets\img\kaskrout thon.jpg"},
            {nameOfMeal:"meal1",
              price:8.000,
            imgSrc:"assets\img\shan kafteji .jpeg"}]




var popup=document.getElementById('popup');
function openPopup(){
popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");

}


$('#search_btn').on('click',function(e){
   var filtred=filter(menu,function(e,i){
    console.log(e.nameOfMeal);
        return $('.search').val().includes(e.nameOfMeal)
    })
   
    console.log( $('.search').val());
    console.log(filtred);
    console.log(filtred.price);
   var result = $(`<div> <img src="${filtred[0].imgSrc}"> <p>${filtred[0].price}</p>`)
   $("#1").empty()
   $("#1").append(result)
})




//$('#searchbtn').on("click",function(e){
    // var term =$('.search').val()
    //  e.menu.toLowerCase()===term.toLowerCase()
//})



//$('#searchbtn').on("click",function(e){
  //  var flt=filter(menu,function(e){
    //    var term =$('.search').val()
      //  return e.menu.toLowerCase()===term.toLowerCase()
    //})
////})