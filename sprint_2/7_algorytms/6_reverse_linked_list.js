/*
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
*/

function ListNode(value, next) {
    this.value = (value===undefined ? 0 : value)
    this.next = (next===undefined ? null : next)
}

const fifthNode = new ListNode(5)
const fourthNode = new ListNode(4, fifthNode)
const thirdNode = new ListNode(3, fourthNode)
const secondNode = new ListNode(2, thirdNode)
const firstNode = new ListNode(1, secondNode)

function reverse(head) {
    let newList
    let element = head
    while(element){
        newList = new ListNode(element.value, newList)
        element = element.next
    }
    return newList
}

console.log(firstNode)
console.log(reverse(firstNode))
