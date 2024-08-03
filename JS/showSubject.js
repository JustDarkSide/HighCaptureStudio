const subjectInput = document.querySelector('#subject'); //INPUT FOR E-MAIL SUBJECT
const subject = shareVariable(); //GETTING VARIABLE FROM THE FUNCTION
subjectInput.value = subject; //INSERTING THE VALUE
localStorage.removeItem('subject'); //REMOVING LOCAL STORAGE VALUE
