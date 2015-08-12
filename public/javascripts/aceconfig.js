


var editor = ace.edit("editor");
    editor.setTheme("ace/theme/solarized_dark");
    editor.getSession().setMode("ace/mode/yaml");

document.getElementById('editor').style.fontSize='15px';













editor.getSession().on('change', function(e) {









try{
    nativeObject = YAML.parse(editor.getValue());
    var outstr  = nativeObject.toString();
    //var out = JSON.stringify(nativeObject);
    //to pass the web app.main to the html element\
    var out = JSON.stringify(nativeObject.web_app.main);
    //console.log(out);

    //var ou = JSON.parse(editor.getValue());
    console.log(nativeObject.web_app.main);

    $('#jsoncode').val(out);
    $('#jsoncode').trigger('input');





}catch(e2) {
    //window.alert("Syntax Error");
    swal("Syntax Error", "Please check your yaml syntaxes!", "error");



}





});








