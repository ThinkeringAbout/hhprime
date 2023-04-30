import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import Calendar from "primevue/calendar";
import MultiSelect from "primevue/multiselect";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import ru from "@/locale/ru.json";


export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true, locale: ru});
    nuxtApp.vueApp.component("InputText", InputText);
    nuxtApp.vueApp.component("Calendar", Calendar);
    nuxtApp.vueApp.component("MultiSelect", MultiSelect);
    nuxtApp.vueApp.component("DataTable", DataTable);
    nuxtApp.vueApp.component("Column", Column);
    nuxtApp.vueApp.component("Button", Button);
});