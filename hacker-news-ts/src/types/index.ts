import View from "../core/view";

export interface Store { // 유니온타입은 인터페이스를 통해 나타낼 수 없음. 따라서 type alias로 작성해주어야함. 보통 타입을 정의할때, 유니온타입이 없으면 인터페이스를 사용함
    currentPage: number;
    feeds: NewsFeed[];
}

export interface News {
    readonly id: number; // readonly 지시어를 typealias혹은 인터페이스로 정의해준 타입앞에 작성해주면 수정이 불가능함.
    readonly time_ago: string;
    readonly title: string;
    readonly url: string;
    readonly user: string;
    readonly content: string
}

export interface NewsFeed extends News { // extends를 통해 확장함.
    readonly comments_count: number;
    readonly points: number;
    read?: boolean; // optional 타입설정
}

export interface NewsDetail extends News {
    readonly comments: NewsComment[];
}

export interface NewsComment extends News {
    readonly comments: NewsComment[];
    readonly level: number;
}

export interface RouteInfo {
    path: string;
    page: View;
}
