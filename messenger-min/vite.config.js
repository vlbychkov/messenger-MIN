import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'
import { resolve } from 'path'
import { glob } from 'glob'
import path from 'path'

export default defineConfig({
    server: {
        port: 3000,
        headers: {
            'Content-Type': 'text/html; charset=utf-8',
        },
    },
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                index: path.resolve(__dirname, 'index.html'),
                ...Object.fromEntries(
                    glob
                        .sync('src/**/*.html')
                        .map((file) => [
                            path.relative(
                                'src',
                                file.slice(0, -path.extname(file).length)
                            ),
                            path.resolve(__dirname, file),
                        ])
                ),
            },
        },
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
                        text: 'Логин',
                        id: 'loginAuth',
                        placeholder: 'Введите логин',
                        required: true,
                        disabled: true,
                    },
                    {
                        name: 'password',
                        type: 'password',
                        text: 'Пароль',
                        id: 'passwordAuth',
                        placeholder: 'Введите пароль',
                        required: true,
                        disabled: true,
                    },
                ],
                registerPageFields: [
                    {
                        name: 'first_name',
                        type: 'text',
                        text: 'Имя',
                        id: 'firstName',
                        placeholder: 'Введите имя',
                        required: true,
                    },
                    {
                        name: 'second_name',
                        type: 'text',
                        text: 'Фамилия',
                        id: 'lastName',
                        placeholder: 'Введите фамилию',
                        required: true,
                    },
                    {
                        name: 'login',
                        type: 'text',
                        text: 'Никнейм',
                        id: 'userLogin',
                        placeholder: 'Придумайте никнейм',
                        required: true,
                    },
                    {
                        name: 'password',
                        type: 'password',
                        text: 'Пароль',
                        id: 'userPassword',
                        placeholder: 'Придумайте пароль',
                        required: true,
                    },
                    {
                        name: 'email',
                        type: 'email',
                        text: 'Почта',
                        id: 'userEmail',
                        placeholder: 'example@mail.ru',
                        required: true,
                    },
                    {
                        name: 'phone',
                        type: 'tel',
                        text: 'Телефон',
                        id: 'userPhone',
                        placeholder: '+7 (999) 123-45-67',
                        required: true,
                    },
                ],
                manageSettingsUserFields: [
                    {
                        name: 'first_name',
                        type: 'text',
                        text: 'Имя',
                        id: 'firstName',
                        placeholder: 'Введите ваше имя',
                        required: false,
                    },
                    {
                        name: 'second_name',
                        type: 'text',
                        text: 'Фамилия',
                        id: 'lastName',
                        placeholder: 'Введите вашу фамилию',
                        required: false,
                    },
                    {
                        name: 'display_name',
                        type: 'text',
                        text: 'Никнейм',
                        id: 'displayName',
                        placeholder: 'Введите никнейм',
                        required: false,
                    },
                    {
                        name: 'login',
                        type: 'text',
                        text: 'Логин',
                        id: 'userLogin',
                        placeholder: 'Введите логин',
                        required: false,
                    },
                    {
                        name: 'email',
                        type: 'email',
                        text: 'Почта',
                        id: 'userEmail',
                        placeholder: 'example@mail.ru',
                        required: false,
                    },
                    {
                        name: 'phone',
                        type: 'tel',
                        text: 'Телефон',
                        id: 'userPhone',
                        placeholder: '+7 (999) 123-45-67',
                        required: false,
                    },
                    {
                        name: 'oldPassword',
                        type: 'password',
                        text: 'Текущий пароль',
                        id: 'oldPassword',
                        placeholder: 'Введите текущий пароль',
                        required: false,
                    },
                    {
                        name: 'newPassword',
                        type: 'password',
                        text: 'Новый пароль',
                        id: 'newPassword',
                        placeholder: 'Введите новый пароль',
                        required: false,
                    },
                ],
            },
        }),
    ],
})
