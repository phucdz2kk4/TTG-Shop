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

// Checkbox Multi
const checkboxMulti = document.querySelector("[checkbox-multi]");
if(checkboxMulti){
    const inputCheckAll = checkboxMulti.querySelector("input[name='checkall']");
    const inputCheckItem = checkboxMulti.querySelectorAll("input[name='id']");
    // console.log(inputCheckItem)
    // console.log(inputCheckAll);

    inputCheckAll.addEventListener("click", () => {
        if(inputCheckAll.checked){
            inputCheckItem.forEach((input) => {
                input.checked = true;
            })
        }else{
            inputCheckItem.forEach((input) => {
                input.checked = false;
            })
        }
    });
    inputCheckItem.forEach((input) => {
        input.addEventListener("click", () => {
            const checkedCount = checkboxMulti.querySelectorAll("input[name='id']:checked").length;
            // console.log(checkedCount);
            if(checkedCount === inputCheckItem.length){
                inputCheckAll.checked = true;
            }else{
                inputCheckAll.checked = false;
            }
        })
    })
}
// End Checkbox Multi

// Form change multi
const formchangeMulti = document.querySelector("[form-change-multi]");
if(formchangeMulti){
    formchangeMulti.addEventListener("submit", (e) => {
        e.preventDefault();
        const inputCheckmulti = document.querySelector("[checkbox-multi]");
        const inputCheckItem = inputCheckmulti.querySelectorAll("input[name='id']:checked");
        // console.log(inputCheckItem);
        if(inputCheckItem.length > 0){
            let ids = [];
            const inputIds = formchangeMulti.querySelector("input[name='ids']");
            inputCheckItem.forEach(input => {
                const id = input.value;
                ids.push(id);
            })
            console.log(ids.join(","));
            inputIds.value = ids.join(",");
            formchangeMulti.submit();
        }else{
            alert("Please select at least one item");
        }
    })
}

// End Form change multi


