const buttonsWhichCodes = [
    192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8,
    9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46,
    20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13,
    16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16,
    17, 91, 18, 32, 18, 37, 40, 39, 17
]
const buttonsCodes = [
    'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
    'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
    'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
    'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
    'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'
]
const buttonsEngValues = [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete',
    'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uarr;', 'Shift',
    'Control', 'WIN', 'Alt', '', 'Alt', '&larr;', '&darr;', '&rarr;', 'Control'
]
const buttonsEngValuesCapslock = [
    '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Delete',
    'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&uarr;', 'Shift',
    'Control', 'WIN', 'Alt', '', 'Alt', '&larr;', '&darr;', '&rarr;', 'Control'
]
const buttonsRusValues = [
    'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete',
    'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&uarr;', 'Shift',
    'Control', 'WIN', 'Alt', '', 'Alt', '&larr;', '&darr;', '&rarr;', 'Control'
]
const buttonsRusValuesCapslock = [
    'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Delete',
    'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
    'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '&uarr;', 'Shift',
    'Control', 'WIN', 'Alt', '', 'Alt', '&larr;', '&darr;', '&rarr;', 'Control'
]


class Keyboard {
    constructor() {
        this.isEng = JSON.parse(localStorage.getItem('isEng'))
        this.isShift = false
        this.isCapslock = false

        this.buttonValue
    }

    createKeyboardElements() {
        const body = document.querySelector('body')
        body.classList.add('body')

        this.textArea = document.createElement('textarea')
        this.textArea.classList.add('textarea')
        body.appendChild(this.textArea)

        // this.keyboardArea = document.createElement('ul')
        // this.keyboardArea.classList.add('keyboard')
        // body.appendChild(this.keyboardArea)

        this.information = document.createElement('p')
        this.information.classList.add('information')
        this.information.innerText = 'Клавиатура создана в операционной системе Windows.\nДля переключения языка используйте левые Ctrl + Alt'
        body.appendChild(this.information)
    }

    setButtonValue(buttonValue, index, isEng, isShift, isCapslock) {
        if (isEng) {
            buttonValue = buttonsEngValues[index]
        }
        if (!isEng) {
            buttonValue = buttonsRusValues[index]
        }
        if (isEng && isCapslock) {
            buttonValue = buttonsEngValuesCapslock[index]
        }
        if (!isEng && isCapslock) {
            buttonValue = buttonsRusValuesCapslock[index]
        }
        return buttonValue
    }

    drawButtons() {

    }
}

window.addEventListener('load', () => {
    const keyboard = new Keyboard()
    keyboard.createKeyboardElements()
})

















