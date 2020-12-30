let btnEnter = document.querySelector(".entrance-button")
let modalWindow = document.querySelector(".modal-enter")
let btnCloseForm = document.querySelectorAll(".close-modal-btn")
let elbtnCloseForm = document.querySelectorAll(".el-close-modal-btn")
let callBackButton = document.querySelector(".button-call-back")
let callBackForm = document.querySelector(".modal-call-back")
let tabContent = document.querySelectorAll(".block-select")
let tabs = document.querySelectorAll(".tab")
let tabsWrap = document.querySelector(".block-tabs")
function hideTabsContent() {
    tabContent.forEach(item => {
        item.style.display = "none"
    })
    tabs.forEach(item => {
        item.classList.remove("tab-active")
    })
}
function showTabsContent(i = 0) {
    tabContent[i].style.display = "block"
    tabs[i].classList.add("tab-active");
}
hideTabsContent() 
showTabsContent()

tabsWrap.addEventListener("click",function (e) {
    let target = e.target
    if (target && target.classList.contains("tab")) {
        tabs.forEach((item,i) => {
            if (target == item) {
                hideTabsContent()
                showTabsContent(i)
            }
        })
    }
})

btnEnter.addEventListener("click", function (e) {
    let target = e.target
    if (target.classList.contains("entrance-button")) {
        modalWindow.classList.add("modal-enter-active")
    }
})
callBackButton.addEventListener("click", function (e) {
    let target = e.target
    if (target.classList.contains("button-call-back")) {
        callBackForm.classList.add("modal-call-back-active")
    }
})


for (let i = 0; i < btnCloseForm.length; i++) {

    btnCloseForm[i].addEventListener("click", function (e) {
        let target = e.target
        if (target === btnCloseForm[i]) {
            modalWindow.classList.remove("modal-enter-active")
            callBackForm.classList.remove("modal-call-back-active")
        }
        if (target.classList.contains("el-close-modal-btn")) {
            modalWindow.classList.remove("modal-enter-active")
            callBackForm.classList.remove("modal-call-back-active")

        }
    })

}