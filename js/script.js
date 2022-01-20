'use strict'

const main = document.querySelector('.main')
const selection = document.querySelector('.selection')
const title = document.querySelector('.main__title')

const getData = () => {
    const dataBase = [
        {
            "id": "01",
            "theme": "Тема 01 тестовая",
            "result": [
                [40, 'Есть задатки, нужно развиваться'],
                [80, 'Очень хорошо, но есть пробелы'],
                [100, 'Отличный результат']
            ],
            "list": [
                {
                    "type": "checkbox",
                    "question": "T-1 Вопрос1",
                    "answers": [
                        'Правильный1',
                        'Правильный2',
                        'Неправильный1',
                        'Неправильный2'
                    ],
                    "correct": 2
                },
                {
                    "type": "checkbox",
                    "question": "T-1 Вопрос2",
                    "answers": [
                        'Правильный1',
                        'Правильный2',
                        'Неправильный1',
                        'Неправильный2'
                    ],
                    "correct": 2
                },
                {
                    "type": "checkbox",
                    "question": "T-1 Вопрос3",
                    "answers": [
                        'Правильный1',
                        'Правильный2',
                        'Неправильный',
                        'Неправильный'
                    ],
                    "correct": 2
                },
                {
                    "type": "radio",
                    "question": "T-1 Вопрос4",
                    "answers": [
                        'Правильный1',
                        'Неправильный',
                        'Неправильный',
                        'Неправильный3'
                    ]
                },
                {
                    "type": "checkbox",
                    "question": "T-1 Вопрос5",
                    "answers": [
                        'Правильный1',
                        'Неправильный',
                        'Неправильный',
                        'Неправильный'
                    ],
                    "correct": 1
                },
                {
                    "type": "radio",
                    "question": "T-1 Вопрос6",
                    "answers": [
                        'Правильный1',
                        'Неправильный1',
                        'Неправильный2',
                        'Неправильный3'
                    ]
                }, {
                    "type": "radio",
                    "question": "T-1 Вопрос7",
                    "answers": [
                        'Правильный1',
                        'Неправильный',
                        'Неправильный',
                        'Неправильный'
                    ]
                },
                {
                    "type": "checkbox",
                    "question": "T-1 Вопрос8",
                    "answers": [
                        'Правильный1',
                        'Правильный2',
                        'Неправильный',
                        'Неправильный'
                    ],
                    "correct": 3
                },
            ]
        },
        {
            "id": "02",
            "theme": "Тема 02",
            "result": [
                [30, 'Есть задатки, нужно развиваться'],
                [60, 'Очень хорошо, но есть пробелы'],
                [100, 'Отличный результат']
            ],
            "list": [
                {
                    "type": "radio",
                    "question": "T-2 Вопрос1",
                    "answers": [
                        'Правильный1',
                        'Неправильный',
                        'Неправильный'
                    ]
                },
                {
                    "type": "checkbox",
                    "question": "T-2 Вопрос2",
                    "answers": [
                        'Правильный1',
                        'Правильный2',
                        'Правильный3',
                        'Неправильный'
                    ],
                    "correct": 3
                },
                {
                    "type": "radio",
                    "question": "T-2 Вопрос3",
                    "answers": [
                        'Правильный1',
                        'Неправильный',
                        'Неправильный',
                        'Неправильный'
                    ]
                },
                {
                    "type": "checkbox",
                    "question": "T-2 Вопрос4",
                    "answers": [
                        'Правильный1',
                        'Неправильный',
                        'Неправильный',
                        'Неправильный'
                    ],
                    "correct": 1
                },
                {
                    "type": "radio",
                    "question": "T-2 Вопрос5",
                    "answers": [
                        'Правильный1',
                        'Неправильный',
                        'Неправильный',
                        'Неправильный'
                    ]
                }, {
                    "type": "radio",
                    "question": "T-2 Вопрос6",
                    "answers": [
                        'Правильный1',
                        'Неправильный',
                        'Неправильный',
                        'Неправильный'
                    ]
                },
                {
                    "type": "checkbox",
                    "question": "T-2 Вопрос7",
                    "answers": [
                        'Правильный1',
                        'Правильный2',
                        'Неправильный',
                        'Неправильный'
                    ],
                    "correct": 3
                },
            ]
        }
    ]

    return dataBase
}

const hideElem = elem => {
    let opacity = getComputedStyle(elem).getPropertyValue('opacity')

    const animation = () => {
        opacity -= 0.05
        elem.style.opacity = opacity

        if (opacity > 0) {
            requestAnimationFrame(animation)
        } else {
            elem.style.display = 'none'
        }
    }

    requestAnimationFrame(animation)
}

const renderTheme = themes => {
    const list = document.querySelector('.selection__list')
    list.textContent = ''

    const buttons = []

    for (let i = 0; i < themes.length; i++) {
        const li = document.createElement('li')
        li.classList.add('selection__item')
        const button = document.createElement('button')
        button.classList.add('selection__theme')
        button.textContent = themes[i].theme
        button.dataset.id = themes[i].id

        li.append(button)
        list.append(li)

        buttons.push(button)
    }

    return buttons
}

const createAnswer = data => {
    const type = data.type

    return data.answers.map(item => {
        const label = document.createElement('label')
        label.classList.add('answer')
        const input = document.createElement('input')
        input.type = type
        input.name = 'answer'
        input.classList.add(`answer__${type}`)

        const text = document.createTextNode(item)

        label.append(input, text)

        return label
    })
}

const renderQuiz = quiz => {
    hideElem(title)
    hideElem(selection)

    const questionBox = document.createElement('div')
    questionBox.classList.add('main__box', 'main__box_question')

    main.append(questionBox)

    let questionCount = 0

    const showQuestion = () => {
        const data = quiz.list[questionCount]
        questionCount += 1

        questionBox.textContent = ''
        const form = document.createElement('form')
        form.classList.add('main__form-question')
        form.dataset.count = `${questionCount}/${quiz.list.length}`
        const fieldset = document.createElement('fieldset')
        const legend = document.createElement('legend')
        legend.classList.add('main__subtitle')
        legend.textContent = data.question

        const answers = createAnswer(data)

        const button = document.createElement('button')
        button.classList.add('main__btn', 'question__next')
        button.type = 'submit'
        button.textContent = 'Подтвердить'

        fieldset.append(legend, ...answers)
        form.append(fieldset, button)
        questionBox.append(form)

        form.addEventListener('submit', (evt) => {
            evt.preventDefault()
            let ok = false
            const answer = [...form.answer].map(input => {
                if (input.checked) {
                    ok = true
                    return input.checked ? input.value : false
                }
            })

            if (ok) {
                console.log(answer)
            } else {
                console.error('Не выбран ни один ответ')
            }
        })
    }

    showQuestion()
}

const addClick = (buttons, data) => {
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const quiz = data.find(item => item.id === btn.dataset.id)
            renderQuiz(quiz)
        })
    })
}

const initQuiz = () => {
    const data = getData()
    const buttons = renderTheme(data)
    addClick(buttons, data)
}

initQuiz()
