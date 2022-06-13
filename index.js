function mergeData(users, attendances) {
    users = [
        { name: 'Andrea', email: 'andrea@gmail.com' },
        { name: 'Georg', email: 'georg@academlo.com' }
    ]
    
    attendances = [
        { email: 'andrea@gmail.com', attendance: false }, 
        { email: 'georg@academlo.com', attendance: true }
    ]
    for (i = 0; i <= users.length-1; i++) {
        if (users[i].email == attendances[i].email) { 
            var allData = [{
            name: users[i].name,
            email: users[i].email,
            attendance: attendances[i].attendance }]
        }
        //return allData
        console.log(allData)
    }
}

console.log(mergeData())