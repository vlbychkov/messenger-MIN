import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'
import { resolve } from 'path';
import { glob } from 'glob';
import path from 'path';




export default defineConfig({
    server: {
        port: 3000,
        headers: {
            'Content-Type': 'text/html; charset=utf-8'
        }
    },
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                index: path.resolve(__dirname, 'index.html'),
                ...Object.fromEntries(
                    glob.sync('src/**/*.html').map(file => [
                        path.relative('src', file.slice(0, -path.extname(file).length)),
                        path.resolve(__dirname, file)
                    ])
                )
            }
        }
    },
    plugins: [
        handlebars({
        partialDirectory: resolve(__dirname, 'src'),
        compileOptions: {
           preventIndent: true,
        },
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
                    disabled: true
                },
                {
                    name: 'password',
                    type: 'password',
                    text: 'Password',
                    id: 'passwordAuth',
                    placeholder: 'Enter password',
                    required: true,
                    disabled: true
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