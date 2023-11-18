


function hello() {



    let timerInterval
    Swal.fire({
        title: 'Successfully Submitted',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    })
}







// function contactsubmit(form) {
//     var FirstName = document.getElementById("firstname").val();
//     var LastName = document.getElementById("lastname").val();
//     var Email = document.getElementById("email").val();
//     var message = document.getElementById("message").val();


//     if (FirstName == '' || LastName == '' || Email == ''|| message == '') {
//         let timerInterval
//         Swal.fire({
//             title: 'Auto close alert!',
//             html: 'I will close in <b></b> milliseconds.',
//             timer: 2000,
//             timerProgressBar: true,
//             didOpen: () => {
//                 Swal.showLoading()
//                 const b = Swal.getHtmlContainer().querySelector('b')
//                 timerInterval = setInterval(() => {
//                     b.textContent = Swal.getTimerLeft()
//                 }, 100)
//             },
//             willClose: () => {
//                 clearInterval(timerInterval)
//             }
//         }).then((result) => {
//             /* Read more about handling dismissals below */
//             if (result.dismiss === Swal.DismissReason.timer) {
//                 console.log('I was closed by the timer')
//             }
//         })


//     }
// }




