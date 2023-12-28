const container = document.getElementById('root');
const ajax = new XMLHttpRequest();
const content = document.createElement('div');
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

function getData(url) {
    ajax.open('GET', url, false); // boolean => 동기/비동기 여부
    ajax.send();

    return JSON.parse(ajax.response);
};

function newsFeed() {
    const newsFeed = getData(NEWS_URL);
    const newsList = [];

    newsList.push('<ul>');

    for (let i = 0; i < newsFeed.length; i++) {
        newsList.push(`
        <li>
            <a href="#${newsFeed[i].id}">
                ${newsFeed[i].title} (${newsFeed[i].comments_count})
            </a>
        </li>
        `);
    }

    newsList.push('</ul>');

    container.innerHTML = newsList.join('');
}

function newsDetail() {
    const id = location.hash.substring(1)

    const newsContent = getData(CONTENT_URL.replace('@id', id));

    container.innerHTML = `
    <h1>${newsContent.title}</h1>
    <div>
    <a href="#">목록으로</a>
    </div>
    `;
}

function router() {
    const routePath = location.hash;

    if (routePath === '') { // location.hash에 # 만 들어있을 경우엔 빈값을 반환한다.
        newsFeed();
    } else {
        newsDetail();
    }
}

window.addEventListener('hashchange', router);

router();