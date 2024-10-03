// Button Status

const buttonStatus = document.querySelectorAll('[button-status]');

// filter buttons change color and change link
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
console.log(formSearch);

if(formSearch){
    let url = new URL(window.location.href);

    formSearch.addEventListener("submit", (e) => {
        e.preventDefault();
        const keyword = e.target.elements.keyword.value;

        if(keyword){
            url.searchParams.set("keyword", keyword);
        }else{
            url.searchParams.delete("keyword");
        }

        window.location.href = url.href;
    })
}
// end form search

// Pagination

const buttonsPagination = document.querySelectorAll('[button-pagination]');

if(buttonsPagination){
    let url = new URL(window.location.href); // create new url from URL
    buttonsPagination.forEach(buttons => { // loop through buttons
        buttons.addEventListener("click", () => {
            const page = buttons.getAttribute("button-pagination");
                
            url.searchParams.set("page", page); // update tham so truy van page trong url
    
            window.location.href = url.href; // link to URL new update
        })
    })
}

// End Pagination
