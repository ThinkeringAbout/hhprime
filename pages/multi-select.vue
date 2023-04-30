<template>
  <div>
    <MultiSelect
      v-model="selectedUsers"
      :options="users"
      :show-toggle-all="false"
      optionLabel="name"
      placeholder="Выберите"
      :max-selected-labels="2"
      class="multi-select"
    >
      <template v-if="selectedUsers.length" v-slot:dropdownicon>
        <svg
          class="close-btn"
          @click="clearSelectedUsers"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g id="Menu / Close_MD">
              <path
                id="Vector"
                d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </g>
        </svg>
      </template>
    </MultiSelect>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      users: [],
      selectedUsers: [],
    };
  },
  async mounted() {
    try {
      this.users = await $fetch("https://jsonplaceholder.typicode.com/users");
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    clearSelectedUsers() {
      this.selectedUsers = [];
    },
  },
};
</script>

<style scoped>
.close-btn {
  transition: all 0.1s ease-in-out;
}

.close-btn:hover {
  transform: scale(1.2);
}

.multi-select {
  width: 20rem;
}
</style>
