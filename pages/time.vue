<template>
  <div>
    <Calendar
      id="calendar-timeonly"
      v-model="time"
      show-button-bar
      time-only
      show-icon
    />
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      time: "",
    };
  },
};
</script>
