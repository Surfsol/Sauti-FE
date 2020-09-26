Account.js http://framebox.org/AmOxP

new Subscription - should need to relogin.

tier levels
Free - Paid (Admin, Gov, Paid), expired

make user expired - need to change token

run kron job to update tiers in database, based off registration date

js write to file, to update dictonary
// Singly-linked lists are already defined with this interface:
function ListNode(x) {
this.value = x;
this.next = null;
}

function remove_kth_from_end(head, k) {
if (k === 0){
return head
}
if (k === 2){
return ([head.next.value])
}
console.log(head.length)
}

// remove the k node from the end of the list
//check length of list.
//use counter, until hit null
counter = 1
current = head
nextValue = head.next.value
while (nextValue !== null){
current = current.next
counter += 1
// check if = null
nextValue = current.next.value
}
return counter

// if counter === k, remove head, return head.next.value

// if counter > k, return head

// else counter - k = index to remove
counter = 1
current = head.next
previous = head
found = false
while (found === false)
if counter === k.
previous.next = current.next
return head
previous = current
current = current.next

def sum(n):
count = 0

    if current.left === null & current.right === null:
        count += current.value
    else:
        return current.value + sum(current.left) + sum(current.right)

factorial(5)
