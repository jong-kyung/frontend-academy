//* 타입이 컴파일 되면서 오류가 생길 수 있음. 런타임이 실행중일땐 타입스크립트가 외부로부터 데이터를 공급받을땐 오류여부를 확인해줄 수 없음.
//* 따라서 외부데이터가 오염되는것을 대비하여 방어코드를 작성할 줄 알아야함.
function add(x: number, y: number): number {
    return x + y;
}

add(10, 20);

//* 서버에서 데이터를 받는 예시
type ObjType = {
    x: number;
    y: number;
}

const json = `{
    "x": 10, 
    "y": 20
}`
const obj: ObjType = JSON.parse(json) as ObjType;

add(obj.x, obj.y)