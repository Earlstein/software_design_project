
/*
TODO:
    Give the icons IDs for reference
    add functionality to the icon to increase and decrease amount of items in cart
*/  
//location.reload();
// fetches cart items

const cartUrl = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Cart/MPGetCart.php";
const productPicUrl = 'https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Products/';

let loggedUser = JSON.parse(localStorage.getItem('user'));
console.log(loggedUser);

let populate = function(){
    
    $.getJSON(cartUrl , {userID : loggedUser.UserID} , function(results){
        let totalItemsQuant = 0;
        let priceSum = 0;
        let htmlItems = ``;
        console.log(results);

       // sessionStorage.setItem("cart" , JSON.stringify(results));

        htmlItems += `${results.map(function(cartItem){
            totalItemsQuant += 1;
            priceSum += (cartItem.Product_Price * cartItem.Amount);
            if(parseInt(cartItem.Amount) !== 0){
            return `
            <div class="media" style="margin-bottom: 20px; ">
            <img src="${productPicUrl}${cartItem.Product_Pic}" class="mr-3 cartItemPic" alt="..." >
            <div class="media-body">
              
              <h4 class="mt-0" style="text-color : rgb(72, 74, 72)">${cartItem.Product_Name}</h4>  
              <p>${cartItem.Product_Description}</p> 
            </div>
        
            <div class="media-body">
            <h6><i class="fa fa-minus" aria-hidden="true" style="margin-right:20px;"></i>${cartItem.Amount}<i class="fa fa-plus" aria-hidden="true" style="margin-left:20px;"></i></h6>
            </div>

            <div class="media-body">
                <h5>R${cartItem.Product_Price}</h5>
            </div>
            
            
            <div class="media-body">
            <h5>R${cartItem.Product_Price * cartItem.Amount}</h5>
            </div>

            </div>
            `;
            }
        }).join('')}`;

        if(results.length === 0 ){
            htmlItems = `<a href="Homepage.html" style="marginn:auto; width:50%;"><Button class="btn btn-danger">Continue Shopping<button></a>`;
        }

        document.getElementById("cartItemsDiv").innerHTML = htmlItems;
        document.getElementById("tLNumItem").innerHTML = totalItemsQuant;
        document.getElementById("SumNumItem").innerHTML = totalItemsQuant;
        document.getElementById("PriceSum").innerHTML = "R"+priceSum;

        
    });

       

}
populate();

//window.location.href = 'CartItem.html';

