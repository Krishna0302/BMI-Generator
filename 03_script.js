const form = document.querySelector("form")
// this usecase will give empty value
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit', function (e){
    e.preventDefault;
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height==='' || height < 0 || isNaN(height)){

    }
})