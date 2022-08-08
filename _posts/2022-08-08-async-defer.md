---
layout: post
title: Async와 Defer - JS복습
author: Lainlnya
date: 
- 2022-08-08 20:00
categories: Javascript
tags: 
- Javascript
toc: true
published: true

---
# Async와 Defer

1. head 안에 적었을 경우
    
    스크립트 파일이 어마어마하게 클 경우, 사용자가 페이지를 보는데까지 너무 많은 시간이 걸린다.
    
2. body의 가장 마지막에 적을 경우
    
    페이지가 사용자에게 이미 보여지지만, 자바스크립트에 의존적이라면 서버에 있는 데이터를 보거나 실행하는데에 시간이 오래 걸린다.
    
3. head + asyn
    
    html을 다운받아 파싱을 하다가 asyn을 만나면 병렬로 main.js를 받자고 명령해 놓고, main.js가 전부 다운로드 되면 그때 parsing을 멈추고 실행하게 된다. 실행 후 html을 parsing하게 된다.
    
    ⇒ fetching이 병렬적으로 일어나기 때문에 다운로드 하는데 시간을 절약할 수 있다는 장점이 있지만, queryselector처럼 돔 요소를 가져와야 할 경우 html 파싱하기도 전에 실행이 되면 오류가 날 가능성이 있다.
    
4. head + defer
    
    parsing을 하다가 다운로드 받자고 명령시켜놓고, 나머지 html을 전부 다운 받은 이후 페이지가 준비되면 실행된다.
    
    ⇒ 가장 좋은 옵션
    

## Async

정의된 스크립트 순서와 상관없이 다운로드가 빠른 것부터 실행하게 된다.
만약 순서에 의존적이라면, 문제가 생길 수 있다.

![async](/assets/img/async.jpeg)

## Defer

원하는 순서대로 실행할 수 있다.

![defer](/assets/img/defer.jpeg)

---
위 내용은 유튜브 '드림코딩'을 공부하며 정리한 문서입니다.