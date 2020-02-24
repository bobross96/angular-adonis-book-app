'use strict'

class UserController {


    async login({auth, request}){
        //retrieves from user login attempt
        const {email, password } = request.all()
        await auth.attempt(email,password)

        return 'logged in successfully'
    }


    show ({auth, params}){
        if (auth.user.id !== Number(params.id)){
            return "this is someone elses profile"
        }

        //else shows the user model
        return auth.user
    }
}

module.exports = UserController
