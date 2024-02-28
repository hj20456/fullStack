#include <stdio.h>

int count = 2;
int fibonacci(int, int);
int F(int);

int main() {
    // Show Fibonacci Numbers: version 1-for循环

    /* int prev2 = 0;
    int prev1 = 1;
    int newFibo;
    printf("%d\n", prev2);
    printf("%d\n", prev1);
    for (int i = 0; i < 18; i++) {
        newFibo = prev1 + prev2;
        printf("%d\n", newFibo);
        prev2 = prev1;
        prev1 = newFibo;
    } */

    // Show Fibonacci Numbers: version 2-recursion递归
/* 
    printf("0\n1");
    fibonacci(1, 0); */

    // Show Fibonacci Numbers: version 3-公式递归
    printf("%d\n", F(19));

    return 0;
}

int fibonacci(int prev1, int prev2) {
    int newFibo;
    if (count <= 19) {
        newFibo = prev1 + prev2;
        printf("\n%d", newFibo);
        prev2 = prev1;
        prev1 = newFibo;
        count++;
        fibonacci(prev1, prev2);
    }
    return 0;
}

int F(int n) {
    return n <= 1 ? n : F(n - 1) + F(n - 2);
}