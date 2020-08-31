function input(input)
{
    
    var display = document.getElementById("display").value;
    setValue("display", display + input);
}

function calculate()
{
    var display = document.getElementById("display").value;
    var calculated = eval(display);
    
    setValue("display", calculated);
}

function clearDisplay()
{
    setValue("display", "")
}

function backspace()
{
    var display = document.getElementById("display").value;
    var length = display.length;
    var display = display.substring(0, length-1);
    console.log(display);

    setValue("display", display);
}
function setValue(id, data)
{
    document.getElementById(id).value = data;

}

function switchS()
{
    var display = document.getElementById("display").value;
    var newdisplay = -1 * display;

    setValue("display", newdisplay);
}

function squareRoot()
{
    var display = document.getElementById("display").value;
    var newdisplay = Math.sqrt(display);

    setValue("display", newdisplay);
}

function squared()
{
    var display = document.getElementById("display").value;
    var newdisplay = Math.pow(display, 2);

    setValue("display", newdisplay);
}

function reciprical()
{
    var display = document.getElementById("display").value;
    var newdisplay = 1/display;

    setValue("display", newdisplay);
}

function percent()
{
    var display = document.getElementById("display").value;
    var newdisplay = 0.01*display;

    setValue("display", newdisplay);
}

function pi()
{
    setValue("display", 3.14159)
}

