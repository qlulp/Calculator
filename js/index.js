var result = document.getElementById("result");
var num1, num2;
var sign = "";
var problem = document.getElementById("problem");

function addNum(num)
{
	result.value = result.value + num;	
}

function clearRes()
{
	if (result.value == "")
		problem.value = "";
	result.value = "";
}

function signSelector(mark)
{
	if (isEmpty(result.value) == false && !isNaN(result.value))
	{
		num1 = result.value;
		sign = mark;
		clearRes();
		problem.value = num1 + " " + sign + " ";
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
		problem.value = problem.value + num2 +" = " + result.value;
	}
}

function isEmpty(line)
{
	if (line == "")
		return true;
	else return false;
}