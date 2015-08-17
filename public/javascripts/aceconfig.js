var editor = ace.edit("editor");
editor.setTheme("ace/theme/solarized_dark");
editor.getSession().setMode("ace/mode/yaml");

document.getElementById('editor').style.fontSize = '15px';



function convertJSon2XML() {

    var x2js = new X2JS();
    var input = JSON.parse(JSON.stringify(YAML.parse(editor.getValue())));
//console.log(input);
    var output =x2js.json2xml_str(input);
//console.log(output);

    var hiddenElement = document.createElement('a');

    hiddenElement.href = 'data:attachment/xml,' + encodeURI(output);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'cuubez.xml';
    hiddenElement.click();

}

$("#xml").click(convertJSon2XML);


