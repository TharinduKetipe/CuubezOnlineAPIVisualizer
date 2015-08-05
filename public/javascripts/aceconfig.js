


var editor = ace.edit("editor");
    editor.setTheme("ace/theme/solarized_dark");
    editor.getSession().setMode("ace/mode/yaml");

document.getElementById('editor').style.fontSize='15px';








//var code  = editor.getValue();
//nativeObject = YAML.parse(editor.getValue());
//console.log(nativeObject);




editor.getSession().on('change', function(e) {









try{
    nativeObject = YAML.parse(editor.getValue());
    //var out  = nativeObject.toString();
    var out = JSON.stringify(nativeObject);
    console.log(out);


    $('#jsoncode').val(out);
    $('#jsoncode').trigger('input');



}catch(e2) {
    //window.alert("Syntax Error");
    swal("Syntax Error", "Please check your yaml syntaxes!", "error");



}





});








