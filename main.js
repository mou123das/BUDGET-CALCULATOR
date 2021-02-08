function progress()
{
	var budget=document.getElementById('enter-budget');
	var value=budget.value;
	var flag=0;
	
	for(let i=0;i<value.length;i++)
	{
		if (value.charCodeAt(i)>=48 && value.charCodeAt(i)<=57)
			flag++;
	}

    if(value == "")
	{
        alert("Please enter atleast some amount!!");
    }
	
	else if(flag!=value.length)
	{
        alert("Please enter valid amount!!");
		alert("Please donot use anything other than digits!!");
    }
	
	
	else
	{

		var welcome=document.getElementById("welcome");
		welcome.style.display="none";
		var menu=document.getElementById("menu");
		menu.style.display="block";
		
	}
}


function calculate()
{
	var menu=document.getElementById("menu");
	menu.style.display="none";
	var display1=document.getElementById("display");
	display1.style.display="block";
		
	var item_price = [90,75,110,50,65];
	var quantity=[document.getElementById("item-1").value,
	              document.getElementById("item-2").value,
				  document.getElementById("item-3").value,
				  document.getElementById("item-4").value,
				  document.getElementById("item-5").value];
	
	var res=document.createElement('h2');
	
	var budget=document.getElementById('enter-budget');
	var value=budget.value;

	var first=document.createElement('h3');
	first.innerText="Your budget is: ₹"+value;
	document.getElementById('response').appendChild(first);
	
	var total_expense=0;
	
	for(let i=0;i<5;i++)
      	total_expense+=(item_price[i]*quantity[i]);
	
	var second=document.createElement('h3');
	second.innerText="Your expense is: ₹"+total_expense;
	document.getElementById('response').appendChild(second);
	
	if((total_expense>value) || (total_expense==0 && value==0))
	{
		res.innerText="You cannot make the purchase! 😟";
		document.getElementById('response').appendChild(res);
	}
	
	else
	{
		if(total_expense==0)
			res.innerText="You have'nt bought anything! 😶";
		else
			res.innerText="You can make the purchase! 😃";
		
		document.getElementById('response').appendChild(res);
		
		
		var savings=document.createElement('h2');
		
		if(total_expense==value)
			savings.innerText="No savings ☹";
		else
			savings.innerText="Your savings is ₹"+Math.abs(total_expense-value)+"😄";
		
		document.getElementById('response').appendChild(savings);
			
	}
}

function home()
{
	document.getElementById('response').innerHTML="";
	var display1=document.getElementById("display");
	display1.style.display="none";
	document.getElementById('enter-budget').value="";
	var welcome=document.getElementById("welcome");
	welcome.style.display="block";
	
	document.getElementById("item-1").value=0;
	document.getElementById("item-2").value=0;
	document.getElementById("item-3").value=0;
	document.getElementById("item-4").value=0;
	document.getElementById("item-5").value=0;
	
}
