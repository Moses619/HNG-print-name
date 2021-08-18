const anObject = {
    value: 0,
    checkThis() {
        function doit() {
            console.log(this)
        }
    }
} 
