function uuid2kr (uuid) {
    const stack = Array.from(uuid).map(c => parseInt(c, 16))
    let kr = ''
    let state = 0
    let k = 44032
    while (stack.length > 0) {
        const c = stack.pop()
        switch (state) {
            case 0:
                k = 44032 + c * 588
                break
            case 1:
                k += c * 28
                break
            case 2:
                k += c
                kr += String.fromCharCode(k)
                break
        }
        if (++state > 2) state = 0
    }
    if (state) {
        kr += String.fromCharCode(k)
    }
    return kr
}