// change status 
const buttonsChangeStatus = document.querySelectorAll('[btn-change-status]');
if(buttonsChangeStatus.length > 0){
    buttonsChangeStatus.addEventListener('click', () =>{
        const statusCurrent = buttons.getAttribute('data-status-current');
        const id = button.getAttribute('data-id');

        let statusChange = statusCurrent == 'active' ? 'inactive' : 'active';

        console.log(statusChange);
        console.log(statusCurrent);
        console.log(id);
    })
}
// end change status 

