window.onload = function(){
    document.getElementsByClassName('input_board')[0].addEventListener('keyup', enterEvent)
    document.getElementsByClassName('inven_icon')[0].addEventListener('click', togleInven)
    document.getElementsByClassName('item_back_btn')[0].addEventListener('click', backInven)
    document.getElementsByClassName('input_text')[0].addEventListener('click', viewProblem)
    pageLoad()
}
let isInvenOpen = false

const invenLoad = () => {
    resetInven()

    axios({
        method: 'post',
        url: '/output/item',
        data: {}
    })
        .then(response=>{
            for (let i = 0; i < response.data.data.item.length; i++) {
                let item = response.data.data.item[i]
                document.getElementsByClassName('item')[i].innerHTML = "          <div class=\"item_detail\">\n" +
                    "            <img src=\"" + item.src + "\"/>\n" +
                    "            <div>" + item.code + "</div>\n" +
                    "          </div>"
                document.getElementsByClassName('item')[i].addEventListener('click', viewItem.bind(this, item.code))
            }
        })
        .catch(error=>{
            console.log(error);
        })
}

const togleInven = () => {
    invenLoad()
    if (!isInvenOpen) {
        isInvenOpen = true
        document.getElementsByClassName("inven_detail")[0].style.display = "block"
    }else {
        isInvenOpen = false
        document.getElementsByClassName("inven_detail")[0].style.display = "none"
    }
}

const backInven = () => {
    document.getElementsByClassName("item_view")[0].style.display = "none"
}

const resetInven = () => {
    for(let i = 0; i < 20; i ++){
        document.getElementsByClassName('item')[i].innerHTML = ""
    }
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

const viewProblem = () => {
    const answer = document.getElementsByClassName("input_board")[0].value
    if (answer.length === 0) return
    document.getElementsByClassName("input_board")[0].value = ""

    axios({
        method: 'post',
        url: '/output/problem/view',
        data: {
            answer: answer
        }
    })
        .then(response=>{
            invenLoad()
            if (response.data.data.log === 24) {
                window.location.replace("/light")
            }else {
                document.getElementsByClassName('main_monit')[0].innerHTML = response.data.data.page
            }
        })
        .catch(error=>{
            console.log(error);
        })
}

const pageLoad = () => {
    axios({
        method: 'post',
        url: '/output/pageload'
    })
        .then(response=>{
            if (response.data.data.log === 24) {
                window.location.replace("/light")
            }else {
                document.getElementsByClassName('main_monit')[0].innerHTML = response.data.data.page
            }
        })
        .catch(error=>{
            console.log(error);
        })
}

const enterEvent = (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        viewProblem()
    }
}
