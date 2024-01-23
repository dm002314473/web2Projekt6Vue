# projekt6-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


1) Interpolation: src/components/TaskList.vue ==> linije 4, 8
2) Two-way binding: src/components/TaskInput.vue ==> linija 4
3) Methods: src/App-vue ==> linije 19-26
            src/components/TaskList.vue ==> linije 39-46
            src/components/TaskInput.vue ==> linije 20-27
            src/views/HomePage.vue ==> linije 25-35
4) Computed properties: src/components/TaskList.vue ==> linije 24-31
                        src/components/FinishedTasks.vue ==> linije 17-21
5) Scoped style: src/components/TaskInput.vue ==> linije 31-41
                 src/components/TaskList.vue ==> linije 44-64
                 src/components/TaskManager.vue ==> linije 18-24
6) Lifecycle hook: NEMA
7) Routing: src/router/index.js
               ==> dinamičko usmjeravanje s 404 stranicom ("catch all") ==> linija 10 (šalje na src/components/NotFound.vue)
               ==> ostali linkovi ==> linije 7, 8 (šalju na src/components/FinishedTasks.vue, src/views/HomePage.vue)
8) Komponente: -sa stanjem: src/components/TaskList.vue
                            src/components/TaskManager.vue
                            src/components/TaskInput.vue
                            src/components/FinishedTasks.vue
                -bez stanja: src/components/NotFound.vue
9) Component event emit: src/components/TaskInput.vue ==> linija 23
10) Store(Pinia): src/store/index.js
                  src/store/tasks.js
11) NEMA
