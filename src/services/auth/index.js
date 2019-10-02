import ROUTER from 'router';

export default {
    user: null,
    registeredUser: [],
    subjects: [],
    course: [],
    setUser(user) {
        this.user = user
    },

    getUser(user) {
        return this.user = user;
    },

    register(email, password) {
        this.registeredUser.push({
            email: email,
            password: password, 
        })
        ROUTER.push('/login')
    },

    login(email, password) {
        for (let i = 0; i < this.registeredUser.length; i++) {
            if (this.registeredUser[i].email === email && this.registeredUser[i].password === password) {
                ROUTER.push('/dashboard')
                return this.registeredUser[i]
            }
        }
        alert("Email or Password is incorrect!")
        return null
    },

    addSubject(subject, teach, sched) {
        this.subjects.push({
            subject: subject,
            teach: teach,
            sched: sched,
        });
    },

    addCourse(course, year){
        this.course.push({
            course: course,
            year: year
        })
    }
}