function runSequential(tasks, delay) {
    return new Promise((resolve, reject) => {
        const results = []
        let index = 0
        function runNext() {
            if (index >= tasks.length) {
                return resolve(results)
            }
            tasks[index]().then((result) => {
                results.push(result)
                index++
                setTimeout(runNext, delay)
            })
                .catch((error) => { reject(error) })
        }
        runNext()
    })
}
