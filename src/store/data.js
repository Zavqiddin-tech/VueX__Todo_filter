import { defineStore } from "pinia";

export const useDataStore = defineStore({
    id: 'task',

    state: ()=> ({
        tasks: [],
        red: false
    }),
    getters: {
        getTasks: (state) => state.tasks,
    },

    actions: {
        setTasks(payload) {
            this.tasks = [payload, ...this.tasks]
        },
        delDoneTasks(id) {
            this.tasks = this.tasks.filter(item => item.id !== id)
        }
    }
})