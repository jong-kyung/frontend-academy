//* type alias
// 타입에 이름을 지어주고 싶을때 사용
// 컴파일시 타입만 검사하는 용도로 사용됨.
type YesOrNo = 'Y' | 'N';
type DayOfWeek = '월' | '화' | '수' | '목' | '금' | '토' | '일';
// 열거형, 타입 별칭과 달리 실제 데이터임
enum DayOfTheWeek { '월', '화', '수', '목', '금', '토', '일' };
type xPosition = number;
type Name = string;
type FooFunction = () => string; // 함수도 설정이 가능함

let x: xPosition = 10;

//* interface
interface IUser {
    readonly id: number;
    readonly name: Name; // type alias와 혼용가능
    email: string;
    receiveInfo: boolean;
    active: YesOrNo;
}

interface IUser {
    address?: string; // 옵셔널 설정, address라는 속성이 있어도 되고 없어도 됨
}

//! interface는 중복선언이 되면 맨처음 선언된 interface에 덧붙여줌.
//! type alias는 중복 선언 불가능

type TUser = {
    readonly id: number;
    readonly name: string;
    email: string;
    receiveInfo: boolean;
    active: YesOrNo;
}

// export type TUser = { // 중복선언이 불가능하다.
//     address?: string;
// }

interface IUserProfile extends IUser { // interface 확장
    profileImage: string;
    github?: string;
    twitter?: string;
}

type TUserProfile = IUser & { // type alias 확장, intersection시 interface와 type alias 둘다 와도 무방함
    profileImage: string;
    github?: string;
    twitter?: string;
}

interface Color {
    fontColor: string;
    strokeColor: string;
    borderColor: string;
    backgroundColor: string;
}

type Display = {
    display: 'none' | 'block';
    visibility: boolean;
    opacity: number;
}

type Geometry = {
    width: number;
    height: number;
    padding: number;
    margin: number;
}

interface IStyle extends Color, Display, Geometry { // 여러개를 상속해서 사용할 수 있음.
    tagName: string;
}

type TStyle = Color & Display & Geometry & { // type alias도 마찬가지로 여러개 상속 가능
    tagName: string;
}

interface IOnlyNumberValueObject {
    [key: string]: number; // key는 무조건 문자형만 가능함.
}

interface IGetApi { // 함수를 interface로 작성하는 방식
    (url: string, search?: string): Promise<string>
}

interface IRect { //! interface는 항상 public만 기술한다 
    id: number;
    x: number;
    y: number;
    width: number;
    height: number;
}

interface IRectConstruct {
    new(x: number, y: number, width: number, height: number): IRect; // 생성자를 생성할때 생성자의 스펙을 묘사해줌.
}

// 실제 사용
const iStyle: IOnlyNumberValueObject = {
    borderWidt1h: 5,
    width: 300,
    height: 100,
}