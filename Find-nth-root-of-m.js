class Solution {
    NthRoot(n, m) {
        let l=1
        let h=m
        if (m===0){
            return 0
        } 
        while(h>=l){
            let mid=Math.floor((l+h)/2)
            if (mid**n === m){
                return mid
            }
            if (mid**n<m){
                l=mid+1
            }else{
                h=mid-1
            }
        }return -1
      
    }
}
