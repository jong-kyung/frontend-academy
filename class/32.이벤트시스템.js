function main() {
    const BUBBLING_PHASE = false; // 버블링 이벤트
    const CAPTURING_PHASE = true; // 캡처링 이벤트, 맨 안쪽을 클릭하면 맨 바깥에서부터 이벤트가 발생해서 안쪽으로 전파
    const PHASE_NAME = ['NONE', 'CAPTURING', 'TARGET', 'BUBBLING']

    function eventLogger({ target, currentTarget, eventPhase }) {
        console.log(`${target.dataset.name}, ${currentTarget.dataset.name}, ${PHASE_NAME[eventPhase]}`);
        // currentTarget은 버블링된 대상
    }

    let divs = document.querySelectorAll('div'); // div 태그를 다 가져온다
    divs.forEach(div => div.addEventListener('click', eventLogger, CAPTURING_PHASE));
}

document.addEventListener('DOMContentLoaded', main); // html문서가 모두 완료되고 DOM이 완료된 이후 실행될 수 있게 설정