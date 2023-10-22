document.addEventListener("DOMContentLoaded", () => {
    pageLoad()
});

const pageLoad = () => {
    axios({
        method: 'post',
        url: '/output/pageload'
    })
        .then(response=>{
            if (response.data.data.log === 24) {
                lightPage()
            }else {
                window.location.replace("/")
            }
        })
        .catch(error=>{
            console.log(error);
        })
}

const lightPage = () => {
    const screen = document.querySelector("#screen");

    let startTime;
    let endTime;
    let responseTime;
    let timeoutId;

    screen.addEventListener("click", () => {
        if (screen.classList.contains("waiting")) {
            screen.classList.replace("waiting", "ready");
            screen.textContent = "초록색이 되면 클릭하세요";
            timeoutId = setTimeout(() => {
                startTime = new Date();
                screen.classList.replace("ready", "now");
                screen.textContent = "클릭 하세요!";
            }, Math.floor(Math.random() * 1000) + 2000);
        } else if (screen.classList.contains("ready")) {
            clearTimeout(timeoutId);
            screen.textContent = '너무 성급합니다!';
            screen.classList.replace('ready', 'waiting')
        } else if (screen.classList.contains("now")) {
            endTime = new Date();
            responseTime = endTime - startTime;

            if (responseTime <= 120) {
                axios({
                    method: 'post',
                    url: '/output/add/light'
                })
                    .then(response=>{
                        screen.innerHTML = "불은 키는것에 성공했다.<br/><br/>클릭하여 돌아가기";
                        screen.addEventListener('click', () => {
                            window.location.replace("/")
                        })
                    })
                    .catch(error=>{
                        console.log(error);
                    })
            }else {
                screen.classList.replace("now", "waiting");
                screen.innerHTML = "클릭하여 시작하세요.<br/><br/>현재 기록은 " + String(responseTime) + "ms입니다<br/><br/>느리네 ㅋ";
            }
        }
    });
}
