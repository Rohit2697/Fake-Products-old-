
    let arrItem=[];
    let arrImage=[];
let flag=true;


async function getapi() {
    const response = await fetch("https://api.github.com/users");
    var data = await response.json();
    //console.log(data);
    let test=document.getElementById("test");
    if(test){
    
    for(i=0; i<data.length;i++){
        
       
        
//    const loginData = data[i].login;
//        
//        
//       document.querySelector('button.add').addEventListener("click", addToCart(loginData)
                                                             
                                                             
//     ()=>{
////           console.log(loginData);
////           let arr = [];
////           arr.push(loginData);
////           console.log(arr);
//           
           
//           
//       );
//        
        
        
        
            
            
            test.insertAdjacentHTML("afterbegin",`
    <div class="card"><img class="card-img-top" src="${data[i].avatar_url}" alt="Card image cap">

    <div class="card-body">

    <h5 class="login">${data[i].login}</h5><span>
    <button class='add' type='submit'>Add to Cart</button>
    </div></div>`);
        
        let name=document.querySelector(".login").innerHTML;
        let image_url=document.querySelector(".card-img-top").getAttribute('src');
        
        addToCard(name,image_url);
        
    }
    }
}
//}
//function addToCart(item){
//    arr.push(item);
//}
//console.log(arr);
getapi();

const addToCard= function(name,image_url){
    
     document.querySelector(".add").addEventListener("click",()=>{     arrItem.push(name)
         arrImage.push(image_url);                                                          
         localStorage.setItem("item",arrItem);
         localStorage.setItem("image_url", arrImage);                                                          
                                                                  
            
         document.querySelector('.cart_itemcount').innerHTML=arrItem.length;                                                         
                   
                                                                  
          // console.log(arr.length);                                                          
        });
        
    
}

//const removeItem=function(nameArr,imageArr){
//    
//    //let removeEl=document.querySelectorAll('.remove');
//    
//   
//    
//    if(nameArr.length>0){
////        const firstElement=nameArr.find(e=> e===name);
////        if(firstElement){
////                const index = nameArr.indexOf(firstElement);
////                
////                //console.log("delete"+ index);
////                nameArr.splice(index, 1);
////                imageArr.splice(index,1);
//////                arrItem.splice(index,1);
//////                arrImage.splice(index,1);
//////        
//         for(let item in removeEl){
//        
//        
//        removeEl[item].addEventListener('click', ()=>{
//        //flag=false;
//        nameArr.splice(item, 1);
//        imageArr.splice(item,1);
//        let parent=removeEl[item].parentElement;
//        let cartParent=parent.parentElement;
//        cartParent.classList.add('hidden');   
//                                        });
//        
//        
//            }
////               
//            localStorage.setItem("item",nameArr);
//            localStorage.setItem("image_url", imageArr);
//            showCartItem(nameArr,imageArr);
//                
//            }
//        else{
//            alert("This Item is not in the cart, Please add it first");
//        }
//    
//    }
//        else{
//            alert("No Itenms");
//        }
//         
   // console.log(arr);
    
    //console.log("removed");
    

    


//shopping cart html page 

function showCartItem(localItem,localImage){
    
//    let test_ShoppingCart=document.getElementById("test_ShoppingCart") 
//   // console.log(localItem,localImage);
//    if(test_ShoppingCart){
//    if(localItem.length>1){    
//   for(let i=0;i<localItem.length;i++){
//       
// test_ShoppingCart.insertAdjacentHTML("afterbegin",`
//    <div class="card"><img class="card-img-top" src="${localImage[i]}" alt="Card image cap">
//
//    <div class="card-body">
//
//    <h5 class="login">${localItem[i]}</h5><span>
//    <button class='remove' type='submit'>Remove Item</button>
//   
//    </div></div>`);
//       
////       document.querySelector(".remove").addEventListener("click", ()=>{
////        removeItem(localItem[i],localItem,localImage);
////        });
////       
//      
//   }
//    }
//        else{
//            console.log("no item");
//        }
//    }
    
    let testShoppingCart=document.querySelector('#test_ShoppingCart');
    if(testShoppingCart && localItem[0]!=""){
   
for(let i=0;i<localItem.length;i++){  
    
testShoppingCart.insertAdjacentHTML('afterbegin', `

<div class="card"><img class="card-img-top" src="${localImage[i]}" alt="Card image cap">
    <div class="card-body">
    <h5 class="login">${localItem[i]}</h5><span>
    <button class='remove' type='submit'>Remove Item</button>
    </div></div>`)
    
}
        
        
remove(); 
        
    }
    else{
        testShoppingCart.insertAdjacentHTML('afterbegin', `

        <div class="card"> No Item</div>`)
        
    }
    }


let localItem=localStorage.getItem("item").split(',');
let localImage=localStorage.getItem("image_url").split(',');
const remove=()=>{
    let removeBtn=document.querySelectorAll('.remove');
removeBtn.forEach((e,i)=>{
    
    e.addEventListener('click', ()=>{
     
    let parentNode=e.parentElement;
    let loginName=parentNode.parentElement.firstElementChild.innerHTML;
    //let loginName=document.querySelector(.`${login}`);  
        const index = localItem.indexOf(loginName);
            
              //console.log("delete"+ index);
                localItem.splice(index, 1);
                localImage.splice(index,1);
                //showCartItem(localItem,localImage);
                localStorage.setItem('item',localItem);
                localStorage.setItem('image_url',localImage);
                location.reload();
                                    
                                    });
})
}

showCartItem(localItem,localImage);
// Remove item logic to be build



    







   
