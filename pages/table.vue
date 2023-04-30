<template>
  <div>
    <DataTable :value="responseAsArray" tableStyle="min-width: 40rem">
      <Column field="time" header="Время"></Column>
      <Column field="action" header="Событие"></Column>
    </DataTable>
    <!-- <h1 v-for="item in responseAsArray">{{ item }}</h1> -->
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      response:
        "[13:36:53] Расчетное время: 9 мин[13:36:58] Открыть клапан откачки К1[13:36:58] Включить вакуумный насос[13:36:58] Закрыть клапан К5[13:36:58] Закрыть клапан дистилляции К2[13:36:58] Ожидание: 8 с[13:37:06] Заливка 2.2мл. в испаритель[13:37:06] Заданно 26.50602409638554 шагов[13:37:09] Заливка перекиси завершена[13:37:09] Открыть клапан дистилляции К2[13:42:09] Включить нагрев испарителя[13:42:09] Закрыть клапан дистилляции К2[13:42:09] конечное давление1.0960040758227925 торр[13:42:09] Выпаривание через К2[13:42:09] Выпаривание длилось5 мин[13:42:09] Откачка до 1 торр[13:42:15] Закрыть клапан откачки К1[13:43:09] Открыть клапан откачки К1[13:43:14] Аппаратное смещение 0 денсит. = -0.313683180809021[13:43:14] Закрыть клапан дистилляции К2",
    };
  },
  computed: {
    responseAsArray() {
        const arr = this.response.split('[');
        const res: object[] = [];
        arr.map(str => {
            str = '[' + str;
            let splitindex = str.indexOf(']')
            let time = str.slice(0, splitindex + 1)
            let action = str.slice(splitindex + 2)
            res.push({time, action})
        })
        return res.slice(1);
    }
  }
};
</script>
