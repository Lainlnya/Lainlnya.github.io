---
  layout: post
title: [Data Structure]재귀함수
author: Lainlnya
date:
  - 2022-07-19 23:00
categories:
  - Data Structure
tags:
- C
- Data Structure
toc: true
---

# 재귀함수

## 재귀함수

함수 내에서 자기 자신을 다시 호출하는 함수

```C
  void Recursive(void)
  {
    printf("Recursive call!\n");
    Recursive();
  }
```

즉, Recursive 함수를 실행하는 중간에 다시 Recursive 함수가 호출되면, Recursive 함수의 복사본을 하나 더 만들어서 복사본을 실행하게 되는 구조

```C
#include <stdio.h>

int Factorial(int n)
{
    if(n == 0)
        return 1;
    else
        return n * Factorial(n - 1);
}

int main(int argc, char *argv[])
{
    printf("1! = %d \n", Factorial(1));
    printf("2! = %d \n", Factorial(2));
    printf("3! = %d \n", Factorial(3));
    printf("4! = %d \n", Factorial(4));
    printf("9! = %d \n", Factorial(9));

    return 0;
}
```

## 재귀의 활용

1. 피보나치 수열 \
   수열의 n번째 값 = 수열의 n-1번째 값 + 수열의 n-2번째 값

```C
#include <stdio.h>

int Fibo(int n)
{
    printf("func call param %d \n", n);

    if(n == 1) return 0;
    else if(n == 2) return 1;
    else return Fibo(n-1) + Fibo(n-2);
}

int main(void)
{
    // int i;
    // for(i = 1; i<15; ++i)
    //     printf("%d ", Fibo(i));
    Fibo(7);

    return 0;
}
```

2. 이진탐색 알고리즘 \
   탈출 조건: 탐색 대상을 찾았거나 탐색 대상이 배열에 존재하지 않는 경우 \
   즉, 탐색 범위의 시작위치를 의미하는 first가 탐색 범위의 끝을 의미하는 last보다 커지는 경우

```C
#include <stdio.h>

int BSearchRecur(int ar[], int first, int last, int target)
{
    int mid;
    if(first > last) {
        return -1;
    }
    mid = (first + last)/2;

    if(ar[mid] == target)
        return mid;
    else if(target < ar[mid])
        return BSearchRecur(ar, first, mid-1, target);
    else
        return BSearchRecur(ar, mid+1, last, target);
}

int main(int argc, char * argv[])
{
    int arr[] = {1, 3, 5, 7, 9};
    int idx;

    idx = BSearchRecur(arr, 0, sizeof(arr)/sizeof(int) - 1, 7);
    if(idx == -1)
        printf("탐색 실패 \n");
    else
        printf("타겟 저장 인덱스: %d \n", idx);

    idx = BSearchRecur(arr, 0, sizeof(arr)/sizeof(int) - 1, 4);
    if(idx == -1)
        printf("탐색 실패 \n");
    else
        printf("타겟 저장 인덱스: %d \n", idx);

    return 0;
}
```

3. 하노이타워

```C
#include <stdio.h>

void HanoiTowerMove(int num, char from, char by, char to)
{
    if(num == 1)
    {
        printf("원반1을 %c에서 %c로 이동 \n", from, to);
    }
    else
    {
        HanoiTowerMove(num-1, from, to, by);
        printf("원반%d를 %c에서 %c로 이동 \n", num, from, to);
        HanoiTowerMove(num-1, by, from, to);
    }
}

int main(void)
{
    HanoiTowerMove(3, 'A', 'B', 'C');
    return 0;
}
```

---

위 내용은 윤성우의 열혈 자료구조를 공부하며 작성한 문서입니다.
