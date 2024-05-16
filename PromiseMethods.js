function promiseAll(arr) {
    return new Promise(function (res, rej) {
        const results = []
        let count = 0
        arr.forEach((p, i) => {
            p.then(function (result) {
                results[i] = (result)
                count++
                if (count === arr.length) {
                    res(results)
                }
            }).catch(e => rej(e))
        })
    })
}

function promiseRace(arr) {
    return new Promise(function (resolve, reject) {
        arr.forEach(p => {
            p.then(resolve).catch(reject)
        })
    })
}

function promiseAllSettled(arr) {
    return new Promise((resolve) => {
        const results = []
        let count = 0

        arr.forEach((p, i) => {
            p.then(
                result => {
                    results[i] = { status: "fulfilled", value: result }
                },
                error => {
                    results[i] = { status: "rejected", reason: error }
                }
            ).finally(() => {
                count++;
                if (count === arr.length) {
                    resolve(results)
                }
            })
        })
    })
}

function promiseAny(arr) {    
    let errors = []
    let resolved = true
    return new Promise((resolve, reject) => {
      arr.forEach(p => {
        p.then(res => {
          if (resolved) {
            resolved = false
            resolve(res)
          }
        }).catch(error => {
          errors.push(error)
        })
      })
    })
  }