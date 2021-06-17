var avalibleVariableNames = ['Red', 'HoneyDew', 'Beige', 'DarkTurquoise', 'DarkMagenta', 'DarkGreen', 'Crimson', 'Bisque', 'Magenta', 'SeaGreen', 'Snow', 'Grey', 'LightSeaGreen', 'DimGrey', 'Navy', 'LightGreen', 'MintCream', 'Linen', 'LavenderBlush', 'Turquoise', 'Plum', 'DarkViolet', 'MediumSeaGreen', 'MistyRose', 'DarkOrchid', 'LightPink', 'DarkSlateGray', 'HotPink', 'RosyBrown', 'DarkSalmon', 'MediumTurquoise', 'Orange', 'DarkGoldenRod', 'IndianRed', 'Azure', 'MediumSlateBlue', 'LightGrey', 'SandyBrown', 'BlueViolet', 'LightBlue', 'LightSlateGrey', 'BurlyWood', 'PaleTurquoise', 'SeaShell', 'LightSkyBlue', 'PaleVioletRed', 'Ivory', 'LightYellow', 'SlateGrey', 'MediumPurple', 'PeachPuff', 'SkyBlue', 'NavajoWhite', 'AntiqueWhite', 'LawnGreen', 'MidnightBlue', 'Fuchsia', 'GreenYellow', 'White', 'CornflowerBlue', 'Gold', 'DarkGrey', 'RoyalBlue', 'Salmon', 'DarkKhaki', 'CadetBlue', 'GhostWhite', 'DarkCyan', 'PaleGreen', 'Orchid', 'Green', 'Indigo', 'YellowGreen', 'MediumAquaMarine', 'Khaki', 'DarkBlue', 'FloralWhite', 'Coral', 'Cyan', 'LimeGreen', 'LightSlateGray', 'LemonChiffon', 'PapayaWhip', 'Purple', 'Olive', 'SpringGreen', 'Violet', 'MediumBlue', 'DarkRed', 'BlanchedAlmond', 'LightGoldenRodYellow', 'Blue', 'OrangeRed', 'MediumSpringGreen', 'Brown', 'DeepSkyBlue', 'Sienna', 'Wheat', 'DarkSlateGrey', 'DarkSeaGreen', 'DeepPink', 'Tomato', 'DarkGray', 'Gray', 'FireBrick', 'Moccasin', 'Silver', 'GoldenRod', 'LightSalmon', 'Peru', 'DarkOliveGreen', 'Chocolate', 'AliceBlue', 'DimGray', 'OldLace', 'Black', 'ForestGreen', 'LightCoral', 'Tan', 'Chartreuse', 'LightCyan', 'PowderBlue', 'Lavender', 'Gainsboro', 'OliveDrab', 'Aquamarine', 'Lime', 'Thistle', 'RebeccaPurple', 'PaleGoldenRod', 'MediumVioletRed', 'Cornsilk', 'SteelBlue', 'Maroon', 'DarkSlateBlue', 'Teal', 'LightGray', 'SaddleBrown', 'LightSteelBlue', 'DarkOrange', 'SlateBlue', 'SlateGray', 'Aqua', 'Yellow', 'MediumOrchid', 'Pink', 'WhiteSmoke', 'DodgerBlue'];
var variables = [];
var variableCount = 0;
function download(text, name, type) {
    var a = document.getElementById("saveButton");
    var file = new Blob([text], {type: type});
    a.href = URL.createObjectURL(file);
    a.download = name;
}

function setSaveButton() {
	filename = textInput.value.replace(/[^A-Za-z\d\-\_]/g, "_").slice(0,16);
	if (!filename.length > 0) {
		filename = "WordProblemTemplate";
	}
	download(JSON.stringify({"text":textInput.value,"variables":variables,"answer":answerFormulaInput.value}), filename+'.wps', 'text/plain');
}

function addVariable() {
	variableName = avalibleVariableNames.pop();
    if (variableName == undefined) {
        variableName = "extraVarName"+variableCount;
    }
	newVariable = document.createElement("div");
	newVariable.id = variableName+"Div";
    
    newIdBox = document.createElement("span");
    newVariable.appendChild(newIdBox);
    
	newTextBox = document.createElement("input");
	newTextBox.id = variableName+"TextBox";
    newVariable.appendChild(newTextBox);
    
    newPreviewBox = document.createElement("span");
    newVariable.appendChild(newPreviewBox);
    
    newRemoveButton = document.createElement("button");
    newRemoveButton.onclick = function (buttonElement) {
        buttonElement.parentElement.remove();//  bug how do I get buttonElement
    }
    newVariable.appendChild(newRemoveButton);
    
	variablesDiv.appendChild(newVariable);
    variableCount+=1;
    console.log(variableName);
}

textInput.oninput = setSaveButton;
answerFormulaInput.oninput = setSaveButton;
addVariableButton.onclick = newVariable;
setSaveButton();


