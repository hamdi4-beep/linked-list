class Node {
    constructor(data) {
        this.data = data
        this.previous = null
        this.next = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
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

    shift() {
        const firstNode = this.head

        if (this.size > 1) {
            this.head = firstNode.next
            this.head.previous = null
            firstNode.next = null
        } else {
            this.head = null
            this.tail = null
        }

        this.size--

        return firstNode
    }

    pop() {
        const lastNode = this.tail

        if (this.size > 1) {
            this.tail = lastNode.previous
            this.tail.next = null
            lastNode.previous = null
        } else {
            this.head = null
            this.tail = null
        }

        this.size--

        return lastNode
    }
}

const linkedList = new DoublyLinkedList()

linkedList.append('Node 2')
linkedList.prepend('Node 1')

console.log(linkedList.pop())
console.log(linkedList)
