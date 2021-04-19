function validate()
{
let submitOK
submitOK="True" <html>
    
<body bgColor=#f2dbdb>

        
<h3>
<center> <font color=brown size=6 face=algerian id="idDemo">Feedback</font></center>
</h3>
<table border="0" cellspacing=10 align="center">
            
<form action="index.php" method="POST">
                
<tr>
                    
<td>
                        Enter movie name:
                    </td>
                    
<td colspan=2>
                        
<input type="text" style="width:220" name="movieName" />
                    </td>
                
</tr>
                
<tr>
                    
<td>
                        Enter age:
                    </td>
                    
<td colspan=2>
                        
<input type="text" name="age" style="width:220" />
                    </td>
                
</tr>
                
<tr>
                    
<td>
                        Enter E-mail:
                    </td>
                    
<td>
                        
<input type="text" name="email_id"  style="width:220" />
                    </td>
                
</tr>
                
<tr>
                
<tr>
                    
<td>
                        Feedback:
                    </td>
                    
<td>
                        
<textarea name="feedback" style="width:220"></textarea>
                    </td>
                
</tr>
                
<tr>
                    
<td>
                        Phone Number
                    </td>
                    
<td><input type="text" name="area_code"  style="width:40" /> - <input type="text" name="phone"  style="width:170" /></td>
                
</tr>
                
<tr>
                    <td align="center" colspan=2>
                        <input type="submit" id="submitfeedback" value="Submit Feedback" />
                    
</td>
                
</tr>
            
</form>
        
</table>


</html>

<?php

if ($_POST) 
{
    
$count = 0;
    
$mname = $_POST["movieName"];
    
$age = (int) $_POST["age"];
    
$eval = $_POST["email_id"];
    
$feedback = $_POST["feedback"];
    
$parea = $_POST["area_code"];
    
$pval = $_POST["phone"];

    
if (strlen($mname) <= 0 || strlen($age) <= 0 || strlen($eval) <= 0 || strlen($feedback) <= 0 || strlen($parea) <= 0 || strlen($pval) <= 0) 
{
        
$count = 1;
        
echo "<p><font color='red'>Please provide values for all the fields</font></p>";
        
exit;
    
}
    
if ($age < 18 || $age > 80) 
{
        
$count = 1;
        
echo "<p><font color='red'>Invalid age</font></p>";
    
}
    
if (strpos($eval, '@') <= 0 || strpos($eval, '.') < strpos($eval, '@')) 
{
        
$count = 1;
        
echo "<p><font color='red'>Invalid email ID</font></p>";
    
}
    
if(strlen($parea)!=3)
    
{
        
$count = 1;
        
echo "<p><font color='red'>Area code should be equal to 3 digits</font></p>";
    
}
    
if (strlen($pval) < 7 || strlen($pval)>7) 
{
        
$count = 1;
        
echo "<p><font color='red'>Phone number should be equal to 7 digits</font></p>";
    
}
    
if (strlen($parea) > 0) 
{
        
for ($i = 0; $i < strlen($parea); $i++) 
{
            
$val = ord($parea[$i]);
            
if ($val < 48 || $val > 57) {
                
$count = 1;
                
echo "<p><font color='red'>Invalid area code</font></p>";
                 
break;
            
}
        
}
    
}
    
if (strlen($pval) == 7) 
{
        
for ($i = 0; $i < strlen($pval); $i++) 
{
            
$val = ord($pval[$i]);
            
if ($val < 48 || $val > 57) 
{
                
$count = 1;
                
echo "<p><font color='red'>Invalid phone number</font></p>";
                
break;
            
}
        
}
    
}
    
if ($count == 0) 
{
        
$phone = array($parea, $pval);
        
$phn = implode("-", $phone);
        
Display($phn);
    
}

}


function Display($phone) 
{
    
echo "Thanks for the feedback. We will update you about special offers on " . $phone;

}

?>
c=document.Tadeus
myChoice=c.user.value
if (myChoice.length==0)
{
alert("Username field is empty")
submitOK="False"
}
	else if (myChoice.length>20)
		{
			alert ("Username cannot be more than 20")
			submitOK="False"
		}
firstP=c.p1.value
if (firstP.length==0)
{
alert("Enter Your password")
submitOK="False"
}
secP=c.p2.value
if (secP!=firstP)
{
alert("Password is not the same")
submitOK="False"
}
numb=c.fone.value
if (isNaN(numb))
{
alert("Invalid Telephone Format")
submitOK="False"
}
mail=c.emai.value.indexOf("@")
if (mail==-1)
{
alert("Invalid Email")
submitOK="False"
}
	gen=c.choice.value
	if (gen==0)
		{
			alert("Select gender")
			submitOK="False"
		}
	address=c.add.value
	if (address.length==0)
		{
			alert("Address field cannot be empty")
			submitOK="False"
		}
	state=c.stat.value
	if (state.length==0)
		{
			alert("State field is empty")
			submitOK="False"
		}
	zipcode=c.zip.value
	if (isNaN(zipcode))
		{
			alert("Invalid zipcode, please re-enter")
			submitOK="False"
		}
if (submitOK=="False")
{
return false
}
}