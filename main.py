#BOJ 2292 벌집
n = int(input())
num = 1
i = 1 

while n > num:
  num += 6 * i
  i+=1

print(i)