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

    }

    createKeyboardElements() {
        const body = document.querySelector('body')
        body.classList.add('body')

        this.textArea = document.createElement('textarea')
        this.textArea.classList.add('textarea')
        body.appendChild(this.textArea)

        this.keyboardArea = document.createElement('ul')
        this.keyboardArea.classList.add('keyboard')
        body.appendChild(this.keyboardArea)

        this.information = document.createElement('p')
        this.information.classList.add('information')
        this.information.innerText = 'Клавиатура создана в операционной системе Windows.\nДля переключения языка используйте левые Ctrl + Alt'
        body.appendChild(this.information)
    }

    drawButtons() {
        this.keyboardArea.querySelectorAll('li').forEach(item => item.remove())
        buttonsWhichCodes.forEach((whichCode, index) => {
            let buttonValue = ''
            buttonValue = this.setButtonValue(buttonValue, index, this.isEng, this.isShift, this.isCapslock)
            let buttonClass = 'button-item '
            if (whichCode === 8) {
                buttonClass += 'backspace '
                buttonClass += 'special'
            }
            if (whichCode === 9) {
                buttonClass += 'tab '
                buttonClass += 'special'
            }
            if (whichCode === 46) {
                buttonClass += 'delete '
                buttonClass += 'special'
            }
            if (whichCode === 20) {
                buttonClass += 'capslock '
                buttonClass += 'special'
            }
            if (whichCode === 13) {
                buttonClass += 'enter '
                buttonClass += 'special'
            }
            if (whichCode === 16) {
                buttonClass += 'shift '
                buttonClass += 'special'
            }
            if (whichCode === 38) {
                buttonClass += 'arrow '
                buttonClass += 'special'
            }
            if (whichCode === 17) {
                buttonValue = 'Ctrl'
                buttonClass += 'control '
                buttonClass += 'special'
            }
            if (whichCode === 91) {
                buttonClass += 'win '
                buttonClass += 'special'
            }
            if (whichCode === 18) {
                buttonClass += 'alt '
                buttonClass += 'special'
            }
            if (whichCode === 37) {
                buttonClass += 'arrow '
                buttonClass += 'special'
            }
            if (whichCode === 40) {
                buttonClass += 'arrow '
                buttonClass += 'special'
            }
            if (whichCode === 39) {
                buttonClass += 'arrow '
                buttonClass += 'special'
            }
            if (whichCode === 32) {
                buttonClass += 'space '
                buttonClass += 'special'
            }
            this.keyboardArea.innerHTML += `<li class="${buttonClass}" data-code="${buttonsCodes[index]}">${buttonValue}</li>`
        })

        if (this.isShift) {
            if (event.code === 'ShiftLeft') {
                document.querySelector('li[data-code="ShiftLeft"]').classList.add('active')
            } else if (event.code === 'ShiftRight') {
                document.querySelector('li[data-code="ShiftRight"]').classList.add('active')
            }
        }

        if (this.isShift) {
            if (event.target.getAttribute('data-code') === 'ShiftLeft') {
                document.querySelector('li[data-code="ShiftLeft"]').classList.add('active')
            } else if (event.target.getAttribute('data-code') === 'ShiftRight') {
                document.querySelector('li[data-code="ShiftRight"]').classList.add('active')
            }
        }
    }

    setButtonValue(buttonValue, index, isEng, isShift, isCapslock) {
        if (isEng) {
            buttonValue = buttonsEngValues[index]
        }
        if (isEng && isCapslock) {
            buttonValue = buttonsEngValuesCapslock[index]
        }
        if (isEng && isShift) {
            buttonValue = buttonsEngValuesCapslock[index]
        }
        if (isEng && isCapslock && isShift) {
            buttonValue = buttonsEngValues[index]
        }
        if (!isEng) {
            buttonValue = buttonsRusValues[index]
        }
        if (!isEng && isCapslock) {
            buttonValue = buttonsRusValuesCapslock[index]
        }
        if (!isEng && isShift) {
            buttonValue = buttonsRusValuesCapslock[index]
        }
        if (!isEng && isCapslock && isShift) {
            buttonValue = buttonsRusValues[index]
        }

        return buttonValue
    }

    buttonDown(event) {
        event.preventDefault()
        if (!document.querySelector('li[data-code="' + event.code + '"]')) {
            return
        } else {
            document.querySelector('li[data-code="' + event.code + '"]').classList.add('active')
        }

        let text = ''
        let index = buttonsCodes.indexOf(event.code)
        text = this.setButtonValue(text, index, this.isEng, this.isShift, this.isCapslock)
        if (event.key !== 'Tab'
            && event.key !== 'CapsLock'
            && event.key !== 'Shift'
            && event.key !== 'Control'
            && event.key !== 'Meta'
            && event.key !== 'Alt'
            && event.key !== 'Backspace'
            && event.key !== 'Delete'
            && event.key !== 'Enter'
            && event.code !== 'Space') {
            this.textArea.innerHTML += text
        }
        if (event.key === 'Tab') {
            this.textArea.innerHTML += '    '
        }
        if (event.code === 'Space') {
            this.textArea.innerHTML += ' '
        }
        if (event.key === 'Enter') {
            this.textArea.innerHTML += '\n'
        }
        if (event.key === 'Backspace') {
            this.textArea.innerHTML = this.textArea.innerHTML.slice(0, -1)
        }
        if (event.key === 'Delete') {
            this.textArea.innerHTML = this.textArea.innerHTML.slice(0, 1)
        }

        if (event.key === 'Shift') {
            this.isShift = true
            this.drawButtons()
        }

    }

    buttonUp(event) {
        event.preventDefault()
        document.querySelector('li[data-code="' + event.code + '"]').classList.remove('active')

        if (event.key === 'Shift') {
            this.isShift = false
            this.drawButtons()
        }

        if (event.key === 'CapsLock') {
            this.isCapslock = !this.isCapslock
            this.drawButtons()
        }

        if ((event.code === 'ControlLeft' && event.altKey) || (event.ctrlKey && event.code === 'AltLeft')) {
            this.isEng = !this.isEng
            localStorage.setItem('isEng', this.isEng)
            this.drawButtons()
        }
    }

    mouseDown(event) {
        if (event.target.tagName !== 'LI') {
            return
        } else {
            let button = event.target
            button.classList.add('active')
            let buttonDataCode = button.getAttribute('data-code')

            if (buttonDataCode !== 'Tab'
                && buttonDataCode !== 'CapsLock'
                && buttonDataCode !== 'ShiftLeft'
                && buttonDataCode !== 'ShiftRight'
                && buttonDataCode !== 'ControlLeft'
                && buttonDataCode !== 'ControlRight'
                && buttonDataCode !== 'MetaLeft'
                && buttonDataCode !== 'AltLeft'
                && buttonDataCode !== 'AltRight'
                && buttonDataCode !== 'Backspace'
                && buttonDataCode !== 'Delete'
                && buttonDataCode !== 'Enter'
                && buttonDataCode !== 'Space') {
                this.textArea.innerHTML += button.innerText
            }
            if (buttonDataCode === 'Tab') {
                this.textArea.innerHTML += '    '
            }
            if (buttonDataCode === 'Space') {
                this.textArea.innerHTML += ' '
            }
            if (buttonDataCode === 'Enter') {
                this.textArea.innerHTML += '\n'
            }
            if (buttonDataCode === 'Backspace') {
                this.textArea.innerHTML = this.textArea.innerHTML.slice(0, -1)
            }
            if (buttonDataCode === 'Delete') {
                this.textArea.innerHTML = this.textArea.innerHTML.slice(0, 1)
            }
            if (buttonDataCode === 'ShiftLeft') {
                this.isShift = !this.isShift
                this.drawButtons()
            }
            if (buttonDataCode === 'ShiftRight') {
                this.isShift = !this.isShift
                this.drawButtons()
            }

        }


    }

    mouseUp() {
        let button = event.target
        button.classList.remove('active')
        let buttonDataCode = button.getAttribute('data-code')

        if (buttonDataCode === 'ShiftLeft') {
            this.isShift = !this.isShift
            this.drawButtons()
        }
        if (buttonDataCode === 'ShiftRight') {
            this.isShift = !this.isShift
            this.drawButtons()
        }

        if (buttonDataCode === 'CapsLock') {
            this.isCapslock = !this.isCapslock
            this.drawButtons()
        }
    }

    eventListener() {
        document.addEventListener('keydown', (event) => this.buttonDown(event))
        document.addEventListener('keyup', (event) => this.buttonUp(event))
        document.addEventListener('mousedown', (event) => this.mouseDown(event))
        document.addEventListener('mouseup', (event) => this.mouseUp(event))

    }


}

window.addEventListener('load', () => {
    const keyboard = new Keyboard()
    keyboard.createKeyboardElements()
    keyboard.drawButtons()
    keyboard.eventListener()

})

















