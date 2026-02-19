class Solution:
    def nthRoot(self, n, m):
       # code here
        l=1
        h=m
        if m==0:
           return 0
        while h>=l :
            mid=(l+h)//2
            if (mid**n == m):
                return mid
            if (mid**n<m):
                l=mid+1
            else:
                h=mid-1
        return -1
       
