// function jinnybabu(어떤숫자) {
//     if (어떤숫자 < 10) {
//         if (어떤숫자 < 5) console.log("이 숫자는 10보다 작으며 5보다도 작습니다.")
//         else if (어떤숫자 > 5) console.log("이 숫자는 10보다 작으나 5보단 큽니다.")
//         else if (어떤숫자 == 5) console.log("이 숫자는 5입니다.")
//     }
//     else if (어떤숫자 > 10) {
//         if (어떤숫자 < 100) console.log("이 숫자는 10보다 크지만 100보다 작습니다.")
//         else if (어떤숫자 > 100) console.log("이 숫자는 10보다 크고 100보다도 큽니다.")
//     }
//     else {
//         console.log("이 숫자는 10입니다.")
//     }
// }

// const arr = [{ id: "wlsl", pw: "111" }, { id: "wlsl", pw: "111" }, { id: "wlsl", pw: "111" }, { id: "wlsl", pw: "111" }]


// const arr1 = { id: "wlsl", pw: "111" }

// // console.log(arr.indexOf(arr1))

// const arr23 = [9, 10, 11, 8]

// console.log(arr23.splice(1, 1))
function solution(array) {
    var arr = [...array]
    arr.sort((a, b) => {
        if (a < b) return -1
        else if (a > b) return 1
        else return 0
    })
    var maxnum = arr[arr.length - 1]
    var indexnum = array.indexOf(arr[arr.length - 1])
    return [maxnum, indexnum]
}
console.log(solution([12, 9, 10, 11, 8]))