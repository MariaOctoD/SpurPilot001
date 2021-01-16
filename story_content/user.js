function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6CPzlK2umk2":
        Script1();
        break;
      case "5c6SByA39S9":
        Script2();
        break;
      case "6MxJdpApth0":
        Script3();
        break;
      case "6eZDMJVc036":
        Script4();
        break;
      case "5iQ1AzW5Wno":
        Script5();
        break;
      case "5p4rEoLDBAM":
        Script6();
        break;
      case "6fjTXIGbcIc":
        Script7();
        break;
      case "6JJS9ymQuCi":
        Script8();
        break;
      case "6QJhRX3Dquj":
        Script9();
        break;
      case "6YV4lgsEWh9":
        Script10();
        break;
      case "6A1jgE9qeK9":
        Script11();
        break;
      case "5iDWUusyKje":
        Script12();
        break;
      case "6Le8vNk457l":
        Script13();
        break;
      case "6C7lEBU4FWy":
        Script14();
        break;
      case "5bU5FlTA9t3":
        Script15();
        break;
      case "5i2dvnxB3Hb":
        Script16();
        break;
      case "6ojUQpEucSx":
        Script17();
        break;
      case "5uW4f74Ylva":
        Script18();
        break;
      case "5eSwsTYO9ci":
        Script19();
        break;
      case "5wfvOvUbfwc":
        Script20();
        break;
      case "6WcuE3YFCvc":
        Script21();
        break;
      case "6ZpqERyQGoD":
        Script22();
        break;
      case "5mIxeWSHWo1":
        Script23();
        break;
      case "6qeqBfQoPHo":
        Script24();
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

function Script8()
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

function Script9()
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

function Script10()
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

function Script11()
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

function Script12()
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

function Script13()
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

function Script14()
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

function Script15()
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
  window.print();
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

