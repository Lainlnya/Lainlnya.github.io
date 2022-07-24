---
layout: post
title: DataStructure 3강 - LinkedList1
author: Lainlnya
date: 
- 2022-07-24 22:00
categories: Data-structure
tags: 
- Data Structure
toc: true

---
# LinkedList1(연결 리스트)

## ADT
추상 자료형

**구체적인 기능의 완성과정을 언급하지 않고, 순수하게 기능이 무엇인지를 나열한 것**

구조체와 관련된 연산의 종류를 결정하는 것도 자료형 정의의 일부

⇒ ‘자료형'의 정의에 ‘기능' 혹은 ‘연산'과 관련된 내용을 명시할 수 있다는 것

## 리스트
- 순차 리스트: 배열을 기반으로 구현된 리스트
- 연결 리스트: 메모리의 동적 할당을 기반으로 구현된 리스트

**리스트 자료구조는 데이터를 나란히 저장한다. 또한 중복된 데이터의 저장을 막지 않는다.**

### 리스트의 ADT를 기반으로 정의된 main 함수

{% highlight C %}

#include <stdio.h>
#include "ArrayList.h"

int main(int argc, char *argv[]) 
{
    List list;
    int data;
    int sum = 0;
    ListInit(&list);

    for( int i = 1; i < 10; ++i)
    {
        LInsert(&list, i);
    }

    printf("현재 데이터의 수: %d \n", LCount(&list));

    if(LFirst(&list, &data))
    {
        sum += data;

        while(LNext(&list, &data))
            sum += data;
    }
    printf("sum : %d ", sum);
    printf("\n\n");

    if(LFirst(&list, &data)) 
    {
        if( data % 2 == 0 || data % 3 == 0 ) 
            LRemove(&list);
        
        while(LNext(&list, &data))
        {
            if( data % 2 == 0 || data % 3 == 0 )
                LRemove(&list);
        }
    }

    printf("현재 데이터의 수: %d \n", LCount(&list));

    if(LFirst(&list, &data))
    {
        printf("%d ", data);

        while(LNext(&list, &data))
            printf("%d ", data);
    }
    printf("\n\n");
    return 0;
}

{% endhighlight %}

즉, 여기서 우리는 ArrayList.h 내부에 있는 ListInit(), LFirst(), LNext(), LRemove()와 같은 함수가 어떻게 만들어졌는지 알 필요가 없다.

---
공부중