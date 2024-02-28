""" 理解原理就行，要我手写真的写不出来:( """
# 快速排序1.0

def partition(array, low, high):
    pivot = array[high]
    i = low - 1

    for j in range(low, high):
        if array[j] <= pivot: # 遍历元素小于基准pivot
            i += 1 #跳过array[i]，不用交换
            array[i], array[j] = array[j], array[i]

    array[i+1], array[high] = array[high], array[i+1]
    print(array)
    return i+1

def quicksort(array, low=0, high=None):
    if high is None:
        high = len(array) - 1

    if low < high:
        pivot_index = partition(array, low, high)
        # print("left recursion", end='')
        quicksort(array, low, pivot_index-1) # pivot左边排序
        # print("right recursion", end='')
        quicksort(array, pivot_index+1, high) # pivot右边排序

my_array = [64, 34, 25, 12, 3, 11, 2, 5]
print(my_array)
quicksort(my_array)
print(my_array)

