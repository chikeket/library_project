// Table : t_book_01

// 각 변수별로 SQL문을 등록할 떄 백틱(``)을 사용하는 이유는 줄바꿈 허용을 허용하기 떄문.
// ( 따옴표는 줄을 바꿀 경우 값이 깨지면서 에러발생 )

// 조건없이 전체조회
const selectBookList =
  //
  `SELECT no
    , name
    , writer
    , publisher
    , publication_date
    , info
FROM t_book_01
ORDER BY no`;

// PRIMARY KEY를 활용한 단건조회

// ? 은 대체될 값이 들어갈 위치 지정
// 1) ?의 총 갯수
// -1) 1개 : 배열이 아닌 단일 값
// -2) 2개 이상 : 배열
// 2) 각 ?의 위치
// -1) ? 에 대체할 값이 입력될 컬럼이 명확할 경우 : 기본값(문자, 숫자, 날짜)
// -2) ? 에 대체할 값이 입력될 컬럼이 명확하지 않을 경우 : 객체, 필드명이 컬럼명이 됨
const selectBookOne = `SELECT no
         , name
         , writer
         , publisher
         , publication_date
         , info 
FROM t_book_01
 WHERE no = ?`;
// ?의 총 갯수는 1개이고 대체할 값이 입력될 컬럼은 no로 명확함 : 단일 기본값(숫자)

// 등록
const bookInsert =
  //
  `INSERT INTO t_book_01 (name, writer, publisher, publication_date, info)
VALUES (?, ?, ?, ?, ?)`;
// ?의 총 갯수는 2개이상이므로 배열이 필요하고 각 ?에 대체할 값이 입력될 컬럼은 명확
// : 기본값을 5개 가진 배열

// 수정
const bookUpdate = ``;

// PRIMARY KEY를 활용한 삭제
const bookDelete = ``;

module.exports = {
  selectBookList,
  selectBookOne,
  bookInsert,
  bookUpdate,
  bookDelete,
};
