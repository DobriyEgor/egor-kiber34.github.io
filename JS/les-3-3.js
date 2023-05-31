function loop_num(x) {
    if (x < 1) {
        return
    }
    else {
        alert(x - 1)
        loop_num(x - 1)
    }
}

loop_num(8)