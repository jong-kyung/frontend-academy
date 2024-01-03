//* 타입스크립트 자료형
/*
Boolean
Number
String
Tuple
Enum
Any
Void
Null and Defined
Never
Object
*/

//* Any는 최대한 지양하는게 좋다.
//* Never는 리턴값도 없고 리턴하지 않는 함수로써, 일반적으로 오류를 발생시킬때 사용

// 타입스크립트의 열거형 예시
enum Color {
    Red, Blue, Green
}

Color.Red;