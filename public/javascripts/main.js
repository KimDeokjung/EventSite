window.onload = function(){
    document.getElementsByClassName('inven_icon')[0].addEventListener('click', togleInven)
    document.getElementsByClassName('item_back_btn')[0].addEventListener('click', backInven)
    addItemEvent()
}
let isInvenOpen = false

const togleInven = () => {
    if (!isInvenOpen) {
        isInvenOpen = true
        document.getElementsByClassName("inven_detail")[0].style.display = "block"
    }else {
        isInvenOpen = false
        document.getElementsByClassName("inven_detail")[0].style.display = "none"
    }

    // axios({
    //     method: 'post', //통신 방식
    //     url: '/output/submit', //통신할 페이지
    //     data: {} //인자로 보낼 데이터
    // })
    //     .then(response=>{
    //         console.log(response)
    //     })
    //     .catch(error=>{
    //         console.log(error);
    //     })
}

const backInven = () => {
    document.getElementsByClassName("item_view")[0].style.display = "none"
}

const addItemEvent = () => {
    document.getElementsByClassName("item_detail")[0].addEventListener('click', viewItem.bind(this, "0000"))
}

const viewItem = (code) => {
    axios({
        method: 'post',
        url: '/output/item/view',
        data: {code: code}
    })
        .then(response=>{
            document.getElementsByClassName("item_view")[0].style.display = "block"
            document.getElementsByClassName("item_code")[0].innerHTML = response.data.data.code
            document.getElementsByClassName("item_img_src")[0].src = response.data.data.src
            document.getElementsByClassName("item_view_bottom")[0].innerHTML = response.data.data.detail
        })
        .catch(error=>{
            console.log(error);
        })

}
