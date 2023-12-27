let oo = true
let s = false
let q = 0
let zz = true
let t = 0.2
let y = 0
let ee = true
let wr = [0, 1, 2]
let g = 0

window.onload = function(){
    c()
    window.addEventListener('keyup', k)
}

const k = (event) => {
    if (!s && event.keyCode === 37) {
        w()
        v()
    }else if(s && event.keyCode === 39) {
        w()
        i()
    }
}

const w = () => {
    if (oo && q > 70) {
        h()
        m()
    }else if (ee && q > 50) {
        h()
        z()
    }else if (zz && !oo && !ee && q > 80) {
        zz = false
        h()
        e()
    }
    q += t
    y += 1
    console.log(q)
    document.getElementsByClassName('a')[0].style.left = q.toString() + "vw"
}

const v = () => {
    document.getElementsByClassName('a')[0].src = "../../images/right_snail.png"
    document.getElementsByClassName('left_btn')[0].src = "../../images/left_default.png"
    document.getElementsByClassName('right_btn')[0].src = "../../images/right_active.png"
    s = true
}

const i = () => {
    document.getElementsByClassName('a')[0].src = "../../images/left_snail.png"
    document.getElementsByClassName('left_btn')[0].src = "../../images/left_active.png"
    document.getElementsByClassName('right_btn')[0].src = "../../images/right_default.png"
    s = false
}

const z = () => {
    t = 0.1
    ee = false
    document.getElementsByClassName('animation')[0].innerHTML = "<span class=\"two_text\">\n" +
        "                첫번째 이벤트~ ㅎㅎ<br/>\n" +
        "                달팽이가 지쳐서 느려졌어요... ㅠㅠ\n" +
        "            </span>"
}

const n = (s) => {
    return new Promise(_ => setTimeout(_, s * 1000));
}

const j = () => {
    axios({
        method: 'post',
        url: '/game/run/result'
    }).then(response=>{
        window.location.replace(response.data.link)
    })
}

const rg = () => {
    axios({
        method: 'post',
        url: '/game/run/a',
        data: {
            num: g
        }
    })
    g += 1
}

const ow = () => {
    axios({
        method: 'post',
        url: '/game/run/b',
        data: {
            num: g
        }
    })
    g += 1
}

const aa = () => {
    axios({
        method: 'post',
        url: '/game/run/c',
        data: {
            num: g
        }
    })
    g += 1
}

const c = () => {
    axios({
        method: 'post',
        url: '/game/run/answer'
    })
        .then(response=>{
            wr = response.data.result
        })
}

const m = () => {
    d()
    oo = false
    document.getElementsByClassName('animation')[0].innerHTML = "<span class=\"two_text\">\n" +
        "                두번째 이벤트~ ㅎㅎ<br/>\n" +
        "                저런... 바람이 불어서 달팽이가 뒤로 가버렸네요....\n" +
        "            </span>"
}

const d = async () => {
    for (let _ = 0; _ < 300; _++) {
        await n(0.01)
        q -= 0.1
        document.getElementsByClassName('a')[0].style.left = q.toString() + "vw"
    }
}

const e = async() => {
    document.getElementsByClassName('animation')[0].innerHTML = "<span class=\"two_text\">\n" +
        "                앗..! ㅠㅠ 사실<br/>\n" +
        "                골대가 반대였군요..! 돌아갈까요?\n" +
        "            </span>"
    await n(2)
    document.getElementsByClassName('animation')[0].innerHTML = "<span class=\"two_text\">\n" +
        "                농담이에요 ~ ㅎㅎ<br/>\n" +
        "                다음으로 넘어갈게요~" +
        "            </span>"
    await n(2)
    j()
}

let ww = [rg, ow, aa]

const h = async() => {
    if(g === 0) {
        ww[wr[0]]()
    }else if(g === 1) {
        ww[wr[1]]()
    }else {
        ww[wr[2]]()
    }
}
