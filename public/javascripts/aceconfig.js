var editor = ace.edit("editor");
    editor.setTheme("ace/theme/xcode");
    editor.getSession().setMode("ace/mode/yaml");





editor.getSession().on('change', function(e) {


    nativeObject = YAML.parse(editor.getValue());
    //window.alert(nativeObject);
    console.log(nativeObject);



});
var code  = editor.getValue();
nativeObject = YAML.parse(editor.getValue());
console.log(nativeObject);



editor.getSession().on('change', function(e) {


        nativeObject = YAML.parse(editor.getValue());
        //window.alert(nativeObject);
        var out  = nativeObject.toString();
        window.alert(editor.getValue());
        console.log(out);

    //}

});

var code  = editor.getValue();
//console.log(code);
//console.log(code);







//nativeObject = YAML.parse(code);
//console.log(nativeObject);

//nativeObject = YAML.parse(code);



// parse YAML string
//nativeObject = YAML.parse(code);

//console.log(nativeObject);

