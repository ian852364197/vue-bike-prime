<template>
  <h1>Bike prime</h1>
  <DataTable :value="bikeList" tableStyle="min-width: 50rem">
    <Column field="sna" header="站點名稱"></Column>
  </DataTable>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axiosapi from '../../plugins/axiosapi';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const bikeList = ref([]);

onMounted(async () => {
  const response = await axiosapi.get();
  bikeList.value = [...response.data];
});
</script>

<style></style>
