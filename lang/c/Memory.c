#include <stdio.h>

int main() {

    int myVal = 13;
    
    printf("Value of integer 'myVal': %d\n", myVal);
    printf("Size of integer 'myVal': %lu bytes\n", sizeof(myVal)); // 4 bytes
    printf("Address to 'myVal': %p\n", &myVal);
    printf("Size of the address to 'myVal': %lu bytes\n", sizeof(&myVal)); // 8 bytes

    return 0;
}