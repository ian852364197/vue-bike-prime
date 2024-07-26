<template>
  <h1>Bike prime</h1>
  <DataTable :value="bikeList" tableStyle="min-width: 50rem">
    <Column
      v-for="col of columns"
      :key="col.field"
      :field="col.field"
      :header="col.header"
    ></Column>
  </DataTable>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axiosapi from '../../plugins/axiosapi';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Swal from 'sweetalert2';

const bikeList = ref([]);
const columns = ref([
  { field: 'sno', header: '站點編號' },
  { field: 'sna', header: '站點名稱' },
  { field: 'sarea', header: '站點所在區域' },
  { field: 'sar', header: '站點地址' },
  { field: 'total', header: '總車位數量' },
  { field: 'available_rent_bikes', header: '可租借的腳踏車數量' },
  { field: 'latitude', header: '站點緯度' },
  { field: 'longitude', header: '站點經度' },
  { field: 'available_return_bikes', header: '可歸還的腳踏車數量' }
]);

onMounted(async () => {
  Swal.fire({
    text: 'Loading......',
    showConfirmButton: false,
    allowOutsideClick: false
  });
  const response = await axiosapi.get();
  Swal.close();
  bikeList.value = [...response.data];
});
</script>

<style></style>
