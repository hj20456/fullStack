# Show Fibonacci Numbers: version 1-for循环
"""
prev2 = 0
prev1 = 1
print(prev2)
print(prev1)
for fibo in range(18):
    newFibo = prev1 + prev2
    print(newFibo)
    prev2 = prev1
    prev1 = newFibo 
"""

# Show Fibonacci Numbers: version 2-recursion递归
""" 
print(0)
print(1)
count = 2

def fibonacci(prev1, prev2):
    global count
    if count <= 19:
        newFibo = prev1 + prev2
        print(newFibo)
        prev2 = prev1
        prev1 = newFibo
        count += 1
        fibonacci(prev1, prev2)
    else:
        return

fibonacci(1,0)
"""

# Show Fibonacci Numbers: version 3-公式递归
def F(n):
    if n <= 1:
        return n
    else:
        return F(n - 1) + F(n - 2)

print(F(19))