<template>
  <div class="container">
    <DataTable
      v-model:filters="filters"
      :globalFilterFields="filterFields"
      filterDisplay="menu"
      :value="users"
      tableStyle="min-width: 40rem"
    >
      <template #header>
        <div class="input-container">
          <div class="p-inputgroup flex-1">
            <InputText v-model="filterText" class="w-80" />
            <Button @click="applyFilter()" label="Search" />
          </div>
          <MultiSelect
            placeholder="Поля Таблицы"
            v-model="selectedFilters"
            :options="filterFields"
            :show-toggle-all="false"
            class="w-20"
          />
        </div>
      </template>
      <Column field="id" header="ID"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="username" header="Username"></Column>
      <Column field="email" header="Email"></Column>
    </DataTable>
  </div>
</template>

<script lang="ts">
import { FilterMatchMode } from "primevue/api";

export default {
  data() {
    return {
      users: [],
      selectedFilters: [],
      searchText: "",
      filterText: "",
      filters: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        id: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.CONTAINS },
        username: { value: null, matchMode: FilterMatchMode.CONTAINS },
        email: { value: null, matchMode: FilterMatchMode.CONTAINS },
      },
      filterFields: ["id", "name", "username", "email"],
    };
  },
  async mounted() {
    try {
      this.users = await $fetch("https://jsonplaceholder.typicode.com/users");
    } catch (err) {
      console.log(err);
    }
  },
  watch: {
    searchText(newValue, oldValue) {
      this.selectedFilters.forEach((filter: string) => {
        if (newValue) {
          this.filters[filter] ? (this.filters[filter].value = newValue) : true;
        } else {
          this.filters[filter].value = ''
        }
      });
    },
  },
  methods: {
    applyFilter() {
      this.searchText = this.filterText
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.input-container {
  display: flex;
  gap: 10px;
}

.w-80 {
  width: 80%;
}

.w-20 {
  width: 20%;
}
</style>
