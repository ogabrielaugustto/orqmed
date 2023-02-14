const buttons = document.querySelectorAll('.btn')
const textarea = document.querySelector('textarea')

const delete_btn = document.querySelector('.delete')
const shift_btn = document.querySelector('.shift')
const space_btn = document.querySelector('.space')
const btn_enter = document.querySelector('.enter')

let chars = []
textarea.value = ''

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        textarea.value += btn.innerText
        chars = textarea.value.split('')

		let inputLength = textarea.value.length
		if (inputLength == 2) {
			textarea.value += ' '
        }
        else if (inputLength == 08) {
			textarea.value += '-'
        }
        if (textarea.value.length >= 14){
            textarea.value = textarea.value.substring(0, 13)
        }
        
    }) 
 
})
document.querySelector('textarea').maxLength = '13';

delete_btn.addEventListener('click', () => {
    chars.pop()
    textarea.value = chars.join('')
})

btn_enter.addEventListener('click', () => {
	var texto = textarea.value
	const s = JSON.stringify(texto);
    console.log(s);
    $.ajax({
        url:"/resposta4",
        type:"POST",
        contentType: "application/json",
        data: JSON.stringify(s)});
		textarea.value = "Registrado"
        chars = textarea.value.split('')
        window.location.href = "/Cep"
		
})



