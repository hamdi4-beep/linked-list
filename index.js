class Node {
    constructor(data) {
        this.data = data
        this.previous = null
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    shift() {
        const firstNode = this.head
        this.head = firstNode.next
        this.head.previous = null
        firstNode.next = null
        this.size--
        return firstNode
    }

    pop() {
        const lastNode = this.tail
        this.tail = lastNode.previous
        this.tail.next = null
        lastNode.previous = null
        this.size--
        return lastNode
    }

    prepend(data) {
        const newNode = new Node(data)

        if (this.size === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.previous = newNode
            this.head = newNode
        }

        this.size++
    }

    append(data) {
        const newNode = new Node(data)

        if (this.size === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.previous = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }

        this.size++
    }
}

const linkedList = new LinkedList()

linkedList.append('Node 2')
linkedList.append('Node 3')
linkedList.prepend('Node 1')

console.log(linkedList)
console.log(linkedList.shift())
console.log(linkedList)
console.log(linkedList.pop())
console.log(linkedList)
