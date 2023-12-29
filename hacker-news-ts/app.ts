interface Store { // 유니온타입은 인터페이스를 통해 나타낼 수 없음. 따라서 type alias로 작성해주어야함. 보통 타입을 정의할때, 유니온타입이 없으면 인터페이스를 사용함
    currentPage: number;
    feeds: NewsFeed[];
}

interface News {
    readonly id: number; // readonly 지시어를 typealias혹은 인터페이스로 정의해준 타입앞에 작성해주면 수정이 불가능함.
    readonly time_ago: string;
    readonly title: string;
    readonly url: string;
    readonly user: string;
    readonly content: string
}

interface NewsFeed extends News { // extends를 통해 확장함.
    readonly comments_count: number;
    readonly points: number;
    read?: boolean; // optional 타입설정
}

interface NewsDetail extends News {
    readonly comments: NewsComment[];
}

interface NewsComment extends News {
    readonly comments: NewsComment[];
    readonly level: number;
}

const container: HTMLElement | null = document.getElementById('root');
const ajax: XMLHttpRequest = new XMLHttpRequest();
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';
const store: Store = {
    currentPage: 1,
    feeds: [],
};

function getData<AjaxResponse>(url: string): AjaxResponse { // 제네릭 이용, T라고 작성하거나 명시적으로 길게 작성해도 됨.
    ajax.open('GET', url, false); // boolean => 동기/비동기 여부
    ajax.send();

    return JSON.parse(ajax.response);
};

function makeFeed(feeds: NewsFeed[]): NewsFeed[] {
    for (let i = 0; i < feeds.length; i++) { // 컴파일러가 타입추론을 통해 오류를 발생시키지 않음.
        feeds[i].read = false;
    }

    return feeds;
}

function updateView(html: string): void { // 타입 가드
    if (container != null) {
        container.innerHTML = html;
    } else {
        console.error("최상위 컨테이너가 없어 UI를 진행하지 못합니다.")
    }
}

function newsFeed(): void {
    let newsFeed: NewsFeed[] = store.feeds;
    const newsList = [];
    let template = `
     <div class="bg-gray-600 min-h-screen">
      <div class="bg-white text-xl">
        <div class="mx-auto px-4">
          <div class="flex justify-between items-center py-6">
            <div class="flex justify-start">
              <h1 class="font-extrabold">Hacker News</h1>
            </div>
            <div class="items-center justify-end">
              <a href="#/page/{{__prev_page__}}" class="text-gray-500">
                Previous
              </a>
              <a href="#/page/{{__next_page__}}" class="text-gray-500 ml-4">
                Next
              </a>
            </div>
          </div> 
        </div>
      </div>
      <div class="p-4 text-2xl text-gray-700">
        {{__news_feed__}}        
      </div>
    </div>
    `;

    if (newsFeed.length === 0) {
        newsFeed = store.feeds = makeFeed(getData<NewsFeed[]>(NEWS_URL)) // 제네릭 사용
    }

    for (let i = (store.currentPage - 1) * 10; i < store.currentPage * 10; i++) {
        newsList.push(`
        <div class="p-6 ${newsFeed[i].read ? 'bg-red-500' : 'bg-white'} mt-6 rounded-lg shadow-md transition-colors duration-500 hover:bg-green-100">
            <div class="flex">
            <div class="flex-auto">
                <a href="#/show/${newsFeed[i].id}">${newsFeed[i].title}</a>  
            </div>
            <div class="text-center text-sm">
                <div class="w-10 text-white bg-green-300 rounded-lg px-0 py-2">${newsFeed[i].comments_count}</div>
            </div>
            </div>
            <div class="flex mt-3">
            <div class="grid grid-cols-3 text-sm text-gray-500">
                <div><i class="fas fa-user mr-1"></i>${newsFeed[i].user}</div>
                <div><i class="fas fa-heart mr-1"></i>${newsFeed[i].points}</div>
                <div><i class="far fa-clock mr-1"></i>${newsFeed[i].time_ago}</div>
            </div>  
            </div>  
        </div>    
        `);
    }

    template = template.replace('{{__news_feed__}}', newsList.join(''));
    template = template.replace('{{__prev_page__}}', String(store.currentPage > 1 ? store.currentPage - 1 : 1));
    template = template.replace('{{__next_page__}}', String(store.currentPage + 1));

    updateView(template)
}

function newsDetail(): void {
    const id = location.hash.substring(7)
    const newsContent = getData<NewsDetail>(CONTENT_URL.replace('@id', id));
    let template = `
    <div class="bg-gray-600 min-h-screen pb-8">
      <div class="bg-white text-xl">
        <div class="mx-auto px-4">
          <div class="flex justify-between items-center py-6">
            <div class="flex justify-start">
              <h1 class="font-extrabold">Hacker News</h1>
            </div>
            <div class="items-center justify-end">
              <a href="#/page/${store.currentPage}" class="text-gray-500">
                <i class="fa fa-times"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="h-full border rounded-xl bg-white m-6 p-4 ">
        <h2>${newsContent.title}</h2>
        <div class="text-gray-400 h-20">
          ${newsContent.content}
        </div>

        {{__comments__}}

      </div>
    </div>
  `;

    for (let i = 0; i < store.feeds.length; i++) {
        if (store.feeds[i].id === Number(id)) {
            store.feeds[i].read = true;
            break;
        }
    }

    updateView(template.replace('{{__comments__}}', makeComment(newsContent.comments)))
}

function makeComment(comments: NewsComment[]): string {
    const commentString = [];

    for (let i = 0; i < comments.length; i++) {
        const comment: NewsComment = comments[i];

        commentString.push(`
            <div style="padding-left: ${comment.level * 40}px;" class="mt-4">
                <div class="text-gray-400">
                    <i class="fa fa-sort-up mr-2"></i>
                    <strong>${comment.user}</strong> ${comment.time_ago}
                </div>
                <p class="text-gray-700">${comment.content}</p>
            </div>      
        `)

        if (comment.comments.length > 0) {
            commentString.push(makeComment(comment.comments));
        }
    }

    return commentString.join('');

}

function router(): void {
    const routePath = location.hash;

    if (routePath === '') { // location.hash에 # 만 들어있을 경우엔 빈값을 반환한다.
        newsFeed();
    } else if (routePath.indexOf('#/page/') >= 0) {
        store.currentPage = Number(routePath.substring(7));
        newsFeed();
    } else {
        newsDetail()
    }
}

window.addEventListener('hashchange', router);

router();