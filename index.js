import {saveUser} from './firebase.js'

window.addEventListener('DOMContentLoaded', () => {

})

const userForm = document.getElementById('user-form')

userForm.addEventListener('click', (e) => {

    const name = userForm['user-name']
    const person = userForm['user-person']
    const keyword = userForm['user-keyword']

    saveUser(name.value, person.value, keyword.value);
    
})

