
var editor = ace.edit("editor");
    editor.setTheme("ace/theme/solarized_dark");
    editor.getSession().setMode("ace/mode/yaml");
    
document.getElementById('editor').style.fontSize='15px';








var code  = editor.getValue();
nativeObject = YAML.parse(editor.getValue());
console.log(nativeObject);



editor.getSession().on('change', function(e) {


        nativeObject = YAML.parse(editor.getValue());
        //window.alert(nativeObject);
        var out  = nativeObject.toString();
        //window.alert(editor.getValue());
        console.log(out);

    //}

});



