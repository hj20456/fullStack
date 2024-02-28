#include <iostream>
using namespace std;

void fibonacci(int, int);
int F(int);
int count = 2;

int main()
{
    // Show Fibonacci Numbers: version 1-for循环
    /*     int prev2 = 0;
        int prev1 = 1;
        int newFibo;
        std::cout << prev2 << std::endl;
        std::cout << prev1 << std::endl;
        for (int i = 0; i <= 19; i++) {
            newFibo = prev1 + prev2;
            std::cout << newFibo << std::endl;
            prev2 = prev1;
            prev1 = newFibo;
        } */

    // Show Fibonacci Numbers: version 2-recursion递归
    /* cout << 0 << endl;
    cout << 1 << endl;
    fibonacci(1, 0); */

    // Show Fibonacci Numbers: version 3-公式递归
    cout << F(19) << endl;
    
    return 0;
}

void fibonacci(int prev1, int prev2)
{
    int newFibo;

    if (count < 18)
    {
        newFibo = prev1 + prev2;
        cout << newFibo << endl;
        prev2 = prev1;
        prev1 = newFibo;
        count++;
        fibonacci(prev1, prev2);
    } else
    {
        return;
    }
}

int F(int n)
{
    if (n <= 1) {
        return n;
    } else {
        return F(n - 1) + F(n - 2);
    }
}