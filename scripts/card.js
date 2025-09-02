export default function initCard () {
    const search = '[data-js-card-search]'
    const searchAll = '[data-js-card-search-all]'
    const searchActive = '[data-js-card-search-active]'
    const searchInActive = '[data-js-card-search-inactive]'
    const card = '[data-js-card]'
    const buttonRemove = '[data-js-card-remove]'
    const buttonToggle = '[data-js-card-toggle]'

    const searchElements = document.querySelectorAll(search)
    const searchAllElement = document.querySelector(searchAll)
    const searchActiveElement = document.querySelector(searchActive)
    const searchInActiveElement = document.querySelector(searchInActive)
    const cardElements = document.querySelectorAll(card)
    const buttonRemoveElements = document.querySelectorAll(buttonRemove)
    const buttonToggleElements = document.querySelectorAll(buttonToggle)

    const isActive = 'is-active'
    const hide = 'hide'

    searchElements.forEach(element => {
        element.addEventListener('click', event => {
            const currentSearch = event.target.closest(search)

            searchElements.forEach(el => el.classList.remove(isActive))
            currentSearch.classList.add(isActive)
        })
    })

    function filterCards (callback) {
        cardElements.forEach(cardElement => {
            cardElement.classList.remove(hide)
            const toggleButton = cardElement.querySelector(buttonToggle)
            if(toggleButton && !callback(toggleButton)) {
                cardElement.classList.add(hide)
            }
        })
    }

    searchAllElement.addEventListener('click', () => {
        filterCards(() => true)
    })

    searchActiveElement.addEventListener('click', () => {
        filterCards(button => button.classList.contains(isActive))
    })

    searchInActiveElement.addEventListener('click', () => {
        filterCards(button => !button.classList.contains(isActive))
    })

    buttonRemoveElements.forEach(button => {
        button.addEventListener('click', () => {
            const currentCard = button.closest(card)
            
            currentCard.remove()
        })
    })

    buttonToggleElements.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle(isActive)
        })
    })
}