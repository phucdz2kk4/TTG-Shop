// Button Status

const buttonStatus = document.querySelectorAll('[button-status]');

if(buttonStatus.length > 0){
    let url = new URL(window.location.href);
    // console.log(url);
    

    buttonStatus.forEach(button => {
        button.addEventListener('click', () => {
            console.log(123);
            
            const status = button.getAttribute("button-status");
            if(status){
                url.searchParams.set("status", status)
            }else {
                url.searchParams.delete("status")
            }
            window.location.href = url.href;
        })

    })
}
// End Button Status

//form search 
const formSearch = document.querySelector("#form-search");
if(formSearch){
    formSearch.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(e.target.elements.keyword.value);
    })
}
// end form search