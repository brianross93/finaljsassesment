const display = document.querySelector('#display')

const inputSize = document.querySelector('#input-size')
const showSize = document.querySelector('#show-size')

const fontFamily = document.querySelector('#select-font')
const fontFamilyChange = document.querySelector('#show-font')

const textColor = document.querySelector('#input-color')
const textChange = document.querySelector('#show-color')

const rightDataOutput = document.querySelector("#data-output")

const backgroundColor = document.querySelector("#input-bg-color")
const backgroundColorChange = document.querySelector('#input-bg-change')

const textField = document.querySelector('#enter-text')
const textChangeField = document.querySelector('#headline-display')

inputSize.addEventListener('input', handleSizeInput)

fontFamily.addEventListener('change', handleFontFamily)
textColor.addEventListener('change', handleFontColor)

backgroundColor.addEventListener('input', handleBackground)

textField.addEventListener('input', changeText)

fontFamilyChange.addEventListener('change', handleFontFamily)

function handleSizeInput() {
	// get the font size:
	const fontSize = inputSize.value + 'px'
	// Set the style 
	display.style.fontSize = fontSize
	// Show the size
	showSize.innerHTML = fontSize
}

function handleFontFamily() {
    const fontType = fontFamily.value

    display.style.fontFamily = fontType
    fontFamilyChange.innerHTML = fontFamily.value
}

function handleFontColor() {
    const fontColor = textColor.value 

    display.style.color = fontColor
    textChange.innerHTML = fontColor
}

function handleBackground() {
    const backgroundColorChange = backgroundColor.value

    display.style.backgroundColor = backgroundColorChange
    backgroundColor.innerHTML = backgroundColorChange
}

function changeText() {
    const textChanger = textField.value

    display.innerHTML = textChanger
}