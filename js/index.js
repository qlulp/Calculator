var result = document.getElementById("result");
var num1, num2;
var sign = "";

function addNum(num)
{
	result.value = result.value + num;	
}

function clearRes()
{
	result.value = "";
}

function signSelector(mark)
{
	if (isEmpty(result.value) == false && !isNaN(result.value))
	{
		num1 = result.value;
		sign = mark;
		clearRes();
	}
}

function compute()
{
	if (isEmpty(result.value) == false && !isNaN(result.value))
	{
		num2 = result.value;
		switch (sign)
		{
			case '+':
				result.value = parseFloat(num1) + parseFloat(num2);
			break;
			case '-':
				result.value = parseFloat(num1) - parseFloat(num2);
			break;
			case '*':
				result.value = parseFloat(num1) * parseFloat(num2);
			break;
			case '/':
				if (parseFloat(num1) == 0 || parseFloat(num2) == 0)
				{
					result.value = "Can't divide by zero!"
				}
				else
					result.value = parseint(num1) / parseint(num2);
			break;
		}
	}
}

function isEmpty(line)
{
	if (line == "")
		return true;
	else return false;
}