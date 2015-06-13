var editor = ace.edit("editor");
    editor.setTheme("ace/theme/xcode");
    editor.getSession().setMode("ace/mode/yaml");




editor.getSession().on('change', function(e) {
    // e.type, etc
    var code  = editor.getValue();
    window.alert(code);
});

var code  = editor.getValue();
console.log(code);
//console.log(code);



//nativeObject = YAML.parse(code);
//console.log(nativeObject);

//nativeObject = YAML.parse(code);



// parse YAML string
//nativeObject = YAML.parse(code);

//console.log(nativeObject);

