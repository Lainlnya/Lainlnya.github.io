---
layout: post
title: Data types - JS복습
author: Lainlnya
date: 
- 2022-08-08 20:30
categories: Javascript
tags: 
- Javascript
toc: true

---
# Data types in Javascript

## Variable

1. let (added in ES6) - mutable ⇒ rw(read/write)
2. const - immutable ⇒ r(read only) \
    가리키고 있는 포인터가 잠겨있기 때문에, 선언함과 동시에 값을 할당한다.
    이후 값 변경이 불가하다.
    ⇒ 보안상의 이유, thread safety, 실수를 막을 수 있다.

- block scope {} \
    global은 어느 곳에서나 접근 가능하지만, block scope는 block 내부에서만 가능하다.
    
- **var는 쓰면 안된다.** \
**선언 전에 할당이 가능하다. ⇒ var hoisting(어디에 선언했는지와 관계없이 가장 위로 선언을 끌어올려주는 것을 의미한다.), 함수 선언의 경우도 마찬가지이니 주의할 것**
block scope이 없다. 즉, block scope를 무시한다.
    
    

## Variable Types

primitive, single item = \
 number, string, boolean, null, undefined, symbol, object, box container

function, first-class function

first-class function : 리턴 타입이 함수가 가능하다는 의미

**primitive 타입의 경우, 값 자체가 메모리에 저장되지만, object의 경우 object를 가리키는 reference가 메모리에 저장된다.**

### bigInt

**숫자 뒤에 n을 붙이면 type은 bigInt로 인식한다.**

```jsx
const bigInt = 123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
```

### string

+를 통해 string을 붙이는 것이 가능하다. \
타입도 결국 string이 된다.

### boolean

false: 0, null, undefined, NaN, ‘’ \
true: any other value

### null

텅텅 비어있는 empty 값

```jsx
let nothing = null;
```

### undefined

선언은 되었지만 값이 비어있는 것

```jsx
let x;
let x = undefined;
```

### symbol

자바스크립트가 가지고 있는 특이한 **Datatype** \
고유한 식별자가 필요할 때, 우선순위를 주고 싶을 때

```jsx
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`;
```

---
위 내용은 유튜브 '드림코딩'을 공부하며 정리한 문서입니다.