import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'
import sass from 'vite-plugin-sass'

export default defineConfig({
    server: {
        port: 3000,
    },
    build: {
        outDir: 'dist',
    },
    plugins: [
        sass(),
        handlebars({
        partialDirectory: 'src',
        context: {
            user: {
                usernameDefault: 'Инэпришэлец 2',
            },
            loginPageFields: [
                {
                    name: 'login',
                    type: 'text',
                    text: 'Login',
                    id: 'loginAuth',
                    placeholder: 'Enter email or username',
                    required: true,
                },
                {
                    name: 'password',
                    type: 'password',
                    text: 'Password',
                    id: 'passwordAuth',
                    placeholder: 'Enter password',
                    required: true,
                }
            ],
            registerPageFields: [
                {
                    name: 'first_name',
                    type: 'text',
                    text: 'First Name',
                    id: 'firstName',
                    placeholder: 'Enter your first name',
                    required: true
                },
                {
                    name: 'second_name',
                    type: 'text',
                    text: 'Last Name',
                    id: 'lastName',
                    placeholder: 'Enter your last name',
                    required: true
                },
                {
                    name: 'login',
                    type: 'text',
                    text: 'Username',
                    id: 'userLogin',
                    placeholder: 'Create a username',
                    required: true
                },
                {
                    name: 'password',
                    type: 'password',
                    text: 'Password',
                    id: 'userPassword',
                    placeholder: 'Create a password',
                    required: true
                },
                {
                    name: 'email',
                    type: 'email',
                    text: 'Email',
                    id: 'userEmail',
                    placeholder: 'example@mail.ru',
                    required: true
                },
                {
                    name: 'phone',
                    type: 'tel',
                    text: 'Phone',
                    id: 'userPhone',
                    placeholder: '+7 (999) 123-45-67',
                    required: true
                }
            ],
            manageSettingsUserFields: [
                // TODO: Think about the avatar, how to implement it correctly
                {
                    name: 'avatar',
                    type: 'file',
                    text: 'Avatar',
                    id: 'avatar',
                    accept: '/default-avatar.png"',
                    required: false
                },
                {
                    name: 'first_name',
                    type: 'text',
                    text: 'First Name',
                    id: 'firstName',
                    placeholder: 'Enter your first name',
                    required: false
                },
                {
                    name: 'second_name',
                    type: 'text',
                    text: 'Last Name',
                    id: 'lastName',
                    placeholder: 'Enter your last name',
                    required: false
                },
                {
                    name: 'display_name',
                    type: 'text',
                    text: 'Display Name',
                    id: 'displayName',
                    placeholder: 'Enter a display name',
                    required: false
                },
                {
                    name: 'login',
                    type: 'text',
                    text: 'Username',
                    id: 'userLogin',
                    placeholder: 'Enter a username',
                    required: false
                },
                {
                    name: 'email',
                    type: 'email',
                    text: 'Email',
                    id: 'userEmail',
                    placeholder: 'example@mail.ru',
                    required: false
                },
                {
                    name: 'phone',
                    type: 'tel',
                    text: 'Phone',
                    id: 'userPhone',
                    placeholder: '+7 (999) 123-45-67',
                    required: false
                },
                {
                    name: 'oldPassword',
                    type: 'password',
                    text: 'Old Password',
                    id: 'oldPassword',
                    placeholder: 'Enter old password',
                    required: false
                },
                {
                    name: 'newPassword',
                    type: 'password',
                    text: 'New Password',
                    id: 'newPassword',
                    placeholder: 'Enter new password',
                    required: false
                }
            ],
        }
    })]
})