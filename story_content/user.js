function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6R5Wg07k2hT":
        Script1();
        break;
      case "6i6tz569fww":
        Script2();
        break;
      case "5XKWJzSzuN4":
        Script3();
        break;
      case "6ibL1LuZGWo":
        Script4();
        break;
      case "618LEy6v4bb":
        Script5();
        break;
      case "6Dbmv0snda0":
        Script6();
        break;
      case "67uTY5rJsnK":
        Script7();
        break;
      case "6lFhfgPSLMQ":
        Script8();
        break;
      case "5vMtga4bCub":
        Script9();
        break;
      case "64Dt4U8rXuI":
        Script10();
        break;
      case "601VEO0QgLS":
        Script11();
        break;
      case "6JKcjcPyqIp":
        Script12();
        break;
      case "6Rsd0BYr2wI":
        Script13();
        break;
      case "5nuqQoIKvgd":
        Script14();
        break;
      case "5d3b02XZ4Tw":
        Script15();
        break;
      case "5h9Cr7dJ5qm":
        Script16();
        break;
      case "6Wgsq9m0uD8":
        Script17();
        break;
      case "6a6n2nMOHkD":
        Script18();
        break;
      case "6FbJWzLZ7Pp":
        Script19();
        break;
      case "6I2bcvcS90U":
        Script20();
        break;
      case "6IxiE3OXC7N":
        Script21();
        break;
      case "6PES2f9xN4F":
        Script22();
        break;
      case "6Arqk3OChWx":
        Script23();
        break;
      case "6Ws8Q5quhmp":
        Script24();
        break;
      case "6nHscyJ2eX4":
        Script25();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"FirstName": player.GetVar("FirstName")
, "LastName": player.GetVar("LastName")
, "Email": player.GetVar("Email")

},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script2()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "Organization": player.GetVar("Organization")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script3()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "Location": player.GetVar("Location")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script4()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "OrganizationType": player.GetVar("OrganizationType")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script5()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "Affiliation": player.GetVar("Affiliation")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script6()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "OrganizationSize": player.GetVar("OrganizationSize")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script7()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "OrganizationSize": player.GetVar("OrganizationSize")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script8()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "OverseasExpenditures": player.GetVar("OverseasExpenditures")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script9()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "GACeligibility": player.GetVar("GACeligibility")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script10()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "Gender": player.GetVar("Gender")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script11()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "Age": player.GetVar("Age")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script12()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "English": player.GetVar("English")
, "French": player.GetVar("French")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script13()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "Accessibility": player.GetVar("Accessibility")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script14()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "FirstTime": player.GetVar("FirstTime")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script15()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "Consent": player.GetVar("Consent")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script16()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "QuestTotal": player.GetVar("QuestTotal")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script17()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "QuestTotal": player.GetVar("QuestTotal")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script18()
{
  window.print();
}

function Script19()
{
  window.print();
}

function Script20()
{
  window.print();
}

function Script21()
{
  window.print();
}

function Script22()
{
  window.print();
}

function Script23()
{
  window.print();
}

function Script24()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "Assessment": player.GetVar("Assessment")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script25()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "Assessment": player.GetVar("Assessment")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

