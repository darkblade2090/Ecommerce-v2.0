var alertMessage = document.getElementById('alertMessage');
console.log(alertMessage);

function removeItem(event)
{
    console.log(event.target.parentNode.childNodes[5].childNodes[1].value);
    var value = event.target.parentNode.childNodes[5].childNodes[1].value;
    if(value !== undefined && value != 1)
    {   
        console.log(alertMessage);
        alertMessage.style = 'visibility:hidden;';

        var url=event.target.parentNode.childNodes[5].childNodes[3].value;
        console.log(url);
        var request=new XMLHttpRequest();
        request.open("GET",url);
        request.setRequestHeader("Content-type","application/json");
        request.send();
        request.addEventListener("load",function()
        {
            event.target.parentNode.childNodes[5].childNodes[1].value = Math.max(0,parseInt(value-1)) ; 
        })
        
        var productId = event.target.parentNode.childNodes[5].childNodes[5].value;
        var payDetails = document.getElementById(productId);
        console.log(payDetails.childNodes[3]);
        var quantity=payDetails.childNodes[3].innerHTML;
        var price = payDetails.childNodes[5].innerHTML.slice(4,);

        var newPrice=(price/quantity)*(Math.max(quantity-1,0));

        //console.log(totalSum.slice(4,));
        payDetails.childNodes[3].innerHTML = Math.max(quantity-1,0);
        payDetails.childNodes[5].innerHTML = "Rs. " + newPrice;
        document.getElementById('totalSum').childNodes[0].innerHTML = "Rs. " + ( document.getElementById('totalSum').childNodes[0].innerHTML.slice(4,)-(price/quantity));

    }
    else{
        alertMessage.style = 'visibility:visible;';
        alertMessage.innerHTML = 'Limit Exceeded';
    }
}

function addItem(event)
{
    console.log(event.target.parentNode.childNodes[5].childNodes[7].value);
    var value = event.target.parentNode.childNodes[5].childNodes[1].value;
    if(value !== undefined && value != 10)
    {   
        alertMessage.style = 'visibility:hidden;';

        var url=event.target.parentNode.childNodes[5].childNodes[7].value;
        console.log(url);
        var request=new XMLHttpRequest();
        request.open("GET",url);
        request.setRequestHeader("Content-type","application/json");
        request.send();
        request.addEventListener("load",function()
        {
            event.target.parentNode.childNodes[5].childNodes[1].value = Math.min(parseInt(value)+1,10); 
        })
        
        var productId = event.target.parentNode.childNodes[5].childNodes[5].value;
        var payDetails = document.getElementById(productId);
        var quantity=parseInt(payDetails.childNodes[3].innerHTML);
        var price = parseInt(payDetails.childNodes[5].innerHTML.slice(4,));

        var newPrice=(price/quantity)*(Math.min(quantity+1,10));
        console.log(price/quantity);
        
        payDetails.childNodes[3].innerHTML = Math.min(quantity+1,10);
        payDetails.childNodes[5].innerHTML = "Rs. " + newPrice;
        document.getElementById('totalSum').childNodes[0].innerHTML = "Rs. " + ( parseInt(document.getElementById('totalSum').childNodes[0].innerHTML.slice(4,))+(price/quantity));
        
    }
    else{
        alertMessage.style = 'visibility:visible;';
        
    }
}
