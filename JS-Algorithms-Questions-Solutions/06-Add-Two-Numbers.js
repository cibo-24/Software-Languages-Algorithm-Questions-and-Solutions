// leetcode

// Bu func, l1 ve l2 adında 2 adet dizi alacak. Bu dizilerin indexlerine göre, l1 ve l2 dizisinde ki 0.indexteki veriler toplanacak. Daha sonra l1 ve l2 dizisinde ki 1.indexteki veriler toplanacak ve daha sonra l1 ve l2 dizindeki 2.indexteki veriler toplanacak. 

// Toplanan veriler matematik işlevi gibi alt alta toplandığı gibi eğer 6+4 = 10 ise 0 olarak alınıp diğer indeksteki verinin üzerine +1 eklenecek.

// Toplanacak verileri başka bir değişkende tut.
// Ayrı olarak En son l1 dizisinde ki veriler büyükten küçüğe sıralanacak aynı şey l2 dizisi içinde olacak. Ve bu veriler toplanacak.

var addTwoNumbers = function (l1, l2) {
   
    let head = null;
   
    let temp = null;
    
    let carry = 0;
   
    while (l1 !== null || l2 !== null) {
       
        let sum = carry;
       
        if (l1 != null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 != null) {
            sum += l2.val;
            l2 = l2.next;
        }
       
        let node = new ListNode(Math.floor(sum) % 10);
       
        carry = Math.floor(sum / 10);
        
        if (temp == null) {
            temp = head = node;
        }
        
        else {
            temp.next = node;
            temp = temp.next;
        }
    }
    
    if (carry > 0) {
        temp.next = new ListNode(carry);
    }
    return head;
};