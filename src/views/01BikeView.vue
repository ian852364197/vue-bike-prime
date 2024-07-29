<template>
  <DataTable
    :value="bikeList"
    tableStyle="min-width: 50rem"
    paginator
    :rows="5"
    :rowsPerPageOptions="[5, 10, 20, 50]"
    v-model:filters="filters"
    filterDisplay="row"
    :globalFilterFields="['sna', 'sarea', 'ar']"
    scrollable
    scrollHeight="85vh"
  >
    <IconField>
      <InputIcon class="pi pi-search" />
      <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
    </IconField>

    <Column
      v-for="col of columns"
      :key="col.field"
      :field="col.field"
      :header="col.header"
      style="width: 10%"
      :sortable="col.sortable"
    ></Column>
  </DataTable>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axiosapi from '../../plugins/axiosapi';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import { FilterMatchMode } from '@primevue/core/api';
import Swal from 'sweetalert2';

const bikeList = ref([]);

const columns = ref([
  { field: 'sno', header: '站點編號', sortable: true },
  { field: 'sna', header: '站點名稱', sortable: false },
  { field: 'sarea', header: '站點所在區域', sortable: false },
  { field: 'ar', header: '站點地址', sortable: false },
  { field: 'total', header: '總車位數量', sortable: true },
  { field: 'available_rent_bikes', header: '可租借的腳踏車數量', sortable: true },
  { field: 'latitude', header: '站點緯度', sortable: false },
  { field: 'longitude', header: '站點經度', sortable: false },
  { field: 'available_return_bikes', header: '可歸還的腳踏車數量', sortable: true }
]);

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  sna: { value: null, matchMode: FilterMatchMode.CONTAINS },
  sarea: { value: null, matchMode: FilterMatchMode.CONTAINS },
  ar: { value: null, matchMode: FilterMatchMode.CONTAINS }
});

onMounted(async () => {
  Swal.fire({
    text: 'Loading......',
    showConfirmButton: false,
    allowOutsideClick: false
  });
  const response = await axiosapi.get();
  bikeList.value = [...response.data];
  Swal.close();
});
</script>

<style></style>
