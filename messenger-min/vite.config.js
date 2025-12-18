import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'

export default defineConfig({
    server: {
        port: 3000,
    },
    build: {
        outDir: 'dist',
    },
    plugins: [handlebars({
        partialDirectory: 'src',
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
                    placeholder: 'Введите почту или логин',
                    required: true,
                },
                {
                    name: 'password',
                    type: 'password',
                    text: 'Пароль',
                    id: 'passwordAuth',
                    placeholder: 'Введите пароль',
                    required: true,
                }
            ],
            registerPageFields: [
                {
                    name: 'first_name',
                    type: 'text',
                    text: 'Имя',
                    id: 'firstName',
                    placeholder: 'Введите ваше имя',
                    required: true
                },
                {
                    name: 'second_name',
                    type: 'text',
                    text: 'Фамилия',
                    id: 'lastName',
                    placeholder: 'Введите вашу фамилию',
                    required: true
                },
                {
                    name: 'login',
                    type: 'text',
                    text: 'Логин',
                    id: 'userLogin',
                    placeholder: 'Придумайте логин',
                    required: true
                },
                {
                    name: 'password',
                    type: 'password',
                    text: 'Пароль',
                    id: 'userPassword',
                    placeholder: 'Придумайте пароль',
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
                    text: 'Телефон',
                    id: 'userPhone',
                    placeholder: '+7 (999) 123-45-67',
                    required: true
                }
            ],
            manageSettingsUserFields: [
                // Todo подумать над аватаром, как правильно сделать
                {
                    name: 'avatar',
                    type: 'file',
                    text: 'Аватар',
                    id: 'avatar',
                    accept: '/default-avatar.png"',
                    required: false
                },
                {
                    name: 'first_name',
                    type: 'text',
                    text: 'Имя',
                    id: 'firstName',
                    placeholder: 'Введите ваше имя',
                    required: false
                },
                {
                    name: 'second_name',
                    type: 'text',
                    text: 'Фамилия',
                    id: 'lastName',
                    placeholder: 'Введите вашу фамилию',
                    required: false
                },
                {
                    name: 'display_name',
                    type: 'text',
                    text: 'Отображаемое имя',
                    id: 'displayName',
                    placeholder: 'Введите отображаемое имя',
                    required: false
                },
                {
                    name: 'login',
                    type: 'text',
                    text: 'Логин',
                    id: 'userLogin',
                    placeholder: 'Введите логин',
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
                    text: 'Телефон',
                    id: 'userPhone',
                    placeholder: '+7 (999) 123-45-67',
                    required: false
                },
                {
                    name: 'oldPassword',
                    type: 'password',
                    text: 'Старый пароль',
                    id: 'oldPassword',
                    placeholder: 'Введите старый пароль',
                    required: false
                },
                {
                    name: 'newPassword',
                    type: 'password',
                    text: 'Новый пароль',
                    id: 'newPassword',
                    placeholder: 'Введите новый пароль',
                    required: false
                }
            ]
        }
    })]
})