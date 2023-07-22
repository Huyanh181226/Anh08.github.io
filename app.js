const form = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#username');
const TitleInput = document.querySelector('#title');

form.addEventListener('submit', (Event)=>{

    validateForm();
    console.log(isFormValid());
    if(isFormValid()==true){
        form.submit();
     }else {
        Event.preventDefault();
    }
    
});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
}

function validateForm() {
    //USERNAME
    if(usernameInput.ariaValueMax.trim()==' '){
        SetError(usernameInput, 'Họ và tên đầy đủ của cô gái ở trước màn là gì vậy?');
    }else if(usernameInput.ariaValueMax.trim()=='Nguyễn Phương Linh' || usernameInput.ariaValueMax.trim()=='Nguyễn Phương Linh'){
        setError(usernameInput)
    }else {
        setError(titleInput, 'huhu nhầm tên rùi :v');
    }
    //TITLE
    if(titleInput.value.trim()==''){
        setError(titleinput, 'Phải điền cả cái này nữa :v');
    }else {
        setSuccess(titleInput);
    }
    
    
}

function setError(elment, errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('Error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent = element.parrentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}
